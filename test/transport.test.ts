import { afterEach, describe, expect, it, vi } from 'vitest';
import {
  AniListAuthenticationError,
  AniListClient,
  AniListGraphQLError,
  AniListHttpError,
  AniListRateLimitError,
} from '../src/index.js';
import { canonicalizeDocument, stableStringify } from '../src/transport.js';
import { jsonResponse, queuedFetch } from './helpers.js';

afterEach(() => {
  vi.useRealTimers();
});

describe('AniList transport', () => {
  it('retries network failures twice by default', async () => {
    const fetch = queuedFetch(
      new TypeError('offline'),
      new TypeError('offline'),
      jsonResponse({ data: { Viewer: { id: 1 } } }),
    );
    const client = new AniListClient({ fetch, retry: { baseDelayMs: 0 } });
    await expect(client.query({ Viewer: { id: true } })).resolves.toEqual({
      Viewer: { id: 1 },
    });
    expect(fetch).toHaveBeenCalledTimes(3);
  });

  it('honours Retry-After before retrying', async () => {
    vi.useFakeTimers();
    const fetch = queuedFetch(
      jsonResponse({ error: 'limited' }, 429, { 'Retry-After': '1' }),
      jsonResponse({ data: { Viewer: { id: 1 } } }),
    );
    const client = new AniListClient({ fetch });
    const request = client.query({ Viewer: { id: true } });
    await vi.advanceTimersByTimeAsync(999);
    expect(fetch).toHaveBeenCalledTimes(1);
    await vi.advanceTimersByTimeAsync(1);
    await expect(request).resolves.toEqual({ Viewer: { id: 1 } });
  });

  it('throws a typed rate-limit error after maximum attempts', async () => {
    const fetch = queuedFetch(
      jsonResponse({}, 429, { 'Retry-After': '0' }),
      jsonResponse({}, 429, { 'Retry-After': '0' }),
      jsonResponse({}, 429, { 'Retry-After': '2' }),
    );
    const client = new AniListClient({ fetch });
    const error = await client.query({ Viewer: { id: true } }).catch((reason: unknown) => reason);
    expect(error).toBeInstanceOf(AniListRateLimitError);
    expect((error as AniListRateLimitError).retryAfterMs).toBe(2_000);
    expect(fetch).toHaveBeenCalledTimes(3);
  });

  it('maps HTTP, GraphQL, and authentication failures to typed errors', async () => {
    const http = new AniListClient({
      fetch: queuedFetch(jsonResponse({ message: 'bad gateway' }, 500)),
      retry: { retries: 0 },
    });
    await expect(http.query({ Viewer: { id: true } })).rejects.toBeInstanceOf(AniListHttpError);

    const graphQL = new AniListClient({
      fetch: queuedFetch(jsonResponse({ data: { Viewer: null }, errors: [{ message: 'broken', path: ['Viewer'] }] })),
    });
    const graphQLError = await graphQL.query({ Viewer: { id: true } }).catch((reason: unknown) => reason);
    expect(graphQLError).toBeInstanceOf(AniListGraphQLError);
    expect((graphQLError as AniListGraphQLError).data).toEqual({ Viewer: null });

    const authentication = new AniListClient({ fetch: queuedFetch(jsonResponse({}, 401)) });
    await expect(authentication.query({ Viewer: { id: true } })).rejects.toBeInstanceOf(AniListAuthenticationError);
  });

  it('does not retry when disabled and surfaces terminal network errors', async () => {
    const fetch = queuedFetch(new TypeError('offline'));
    const client = new AniListClient({ fetch });
    await expect(client.query({ Viewer: { id: true } }, { retry: false })).rejects.toMatchObject({
      status: 0,
      cause: expect.any(TypeError),
    });
    expect(fetch).toHaveBeenCalledOnce();
  });

  it('passes AbortSignal through and does not retry aborts', async () => {
    const controller = new AbortController();
    const fetch = vi.fn(
      (_input: RequestInfo | URL, init?: RequestInit) =>
        new Promise<Response>((_resolve, reject) => {
          init?.signal?.addEventListener('abort', () => reject(new DOMException('Aborted', 'AbortError')), {
            once: true,
          });
        }),
    );
    const client = new AniListClient({ fetch });
    const request = client.query({ Viewer: { id: true } }, { signal: controller.signal });
    await vi.waitFor(() => expect(fetch).toHaveBeenCalledOnce());
    controller.abort();
    await expect(request).rejects.toMatchObject({ name: 'AbortError' });
    expect(fetch).toHaveBeenCalledOnce();
  });

  it('canonicalizes comments and insignificant whitespace without changing strings', () => {
    expect(
      canonicalizeDocument('query Test { # comment\n Media(search: "cowboy bebop") { id, title { romaji } } }'),
    ).toBe('query Test{Media(search:"cowboy bebop"){id title{romaji}}}');
    expect(canonicalizeDocument('query Test { Markdown(markdown: """a, b\n# text""") { markdown } }')).toContain(
      '"""a, b\n# text"""',
    );
    expect(stableStringify({ z: undefined, b: [1, undefined], a: false })).toBe('{"a":false,"b":[1,null]}');
  });

  it('validates raw documents and missing response data', async () => {
    const client = new AniListClient({ fetch: queuedFetch(jsonResponse({ data: null })) });
    await expect(client.request('fragment MediaFields on Media { id }', {})).rejects.toThrow(
      'GraphQL documents must start with query or mutation',
    );
    await expect(client.request('query Empty { Viewer { id } }', {})).rejects.toThrow('AniList returned no data');
  });

  it('maps GraphQL authentication codes and sends provider tokens', async () => {
    const fetch = queuedFetch(
      jsonResponse({ errors: [{ message: 'login', extensions: { code: 'UNAUTHENTICATED' } }] }),
    );
    const client = new AniListClient({ fetch, token: async () => 'secret' });
    await expect(client.query({ Viewer: { id: true } })).rejects.toBeInstanceOf(AniListAuthenticationError);
    expect(fetch.mock.calls[0]?.[1]?.headers).toMatchObject({ Authorization: 'Bearer secret' });
  });

  it('aborts while waiting to retry a retryable HTTP response', async () => {
    vi.useFakeTimers();
    const controller = new AbortController();
    const fetch = queuedFetch(jsonResponse({}, 503, { 'Retry-After': '10' }));
    const client = new AniListClient({ fetch });
    const request = client.query({ Viewer: { id: true } }, { signal: controller.signal });
    await vi.waitFor(() => expect(fetch).toHaveBeenCalledOnce());
    controller.abort();
    await expect(request).rejects.toMatchObject({ name: 'AbortError' });
  });

  it('retains non-JSON HTTP bodies on typed errors', async () => {
    const fetch = queuedFetch(new Response('upstream failed', { status: 500, statusText: '' }));
    const client = new AniListClient({ fetch, retry: { retries: 0 } });
    await expect(client.query({ Viewer: { id: true } })).rejects.toMatchObject({
      status: 500,
      body: 'upstream failed',
    });
  });

  it('maps malformed successful responses to GraphQL errors', async () => {
    const client = new AniListClient({ fetch: queuedFetch(new Response('not json', { status: 200 })) });
    await expect(client.query({ Viewer: { id: true } })).rejects.toThrow('invalid JSON response');
  });
});
