import { vi } from 'vitest';
import type { FetchLike } from '../src/transport.js';

export function jsonResponse(data: unknown, status = 200, headers?: HeadersInit): Response {
  return new Response(JSON.stringify(data), {
    status,
    statusText: status === 200 ? 'OK' : 'Error',
    headers: { 'Content-Type': 'application/json', ...headers },
  });
}

export function queuedFetch(...responses: Array<Response | Error>): ReturnType<typeof vi.fn<FetchLike>> {
  return vi.fn<FetchLike>(async () => {
    const next = responses.shift();
    if (!next) throw new Error('No mock response queued.');
    if (next instanceof Error) throw next;
    return next;
  });
}

export function requestBody(
  fetchMock: ReturnType<typeof vi.fn<FetchLike>>,
  index = 0,
): {
  readonly query: string;
  readonly variables: Record<string, unknown>;
} {
  const init = fetchMock.mock.calls[index]?.[1];
  if (!init?.body || typeof init.body !== 'string') throw new Error('Mock request has no JSON body.');
  return JSON.parse(init.body) as { query: string; variables: Record<string, unknown> };
}
