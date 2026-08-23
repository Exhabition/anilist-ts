import type { CacheAdapter, RequestCacheOptions } from './cache/types.js';
import {
  AniListAuthenticationError,
  AniListConfigurationError,
  AniListGraphQLError,
  AniListHttpError,
  AniListRateLimitError,
  type GraphQLErrorPayload,
} from './errors.js';

export type MaybePromise<T> = T | Promise<T>;
export type TokenProvider = string | (() => MaybePromise<string | null | undefined>);
export type FetchLike = (input: RequestInfo | URL, init?: RequestInit) => Promise<Response>;

export interface RetryOptions {
  /** Number of retries after the initial attempt. Defaults to 2. */
  readonly retries?: number;
  /** Base exponential-backoff delay in milliseconds. Defaults to 250. */
  readonly baseDelayMs?: number;
  /** Backoff ceiling in milliseconds. Defaults to 30 seconds. */
  readonly maxDelayMs?: number;
}

export interface RequestOptions {
  readonly signal?: AbortSignal;
  readonly retry?: false | RetryOptions;
  readonly cache?: false | RequestCacheOptions;
}

export interface TransportOptions {
  readonly endpoint: string;
  readonly fetch: FetchLike;
  readonly token?: TokenProvider;
  readonly retry?: RetryOptions;
  readonly cache?: CacheAdapter;
  readonly cacheNamespace: string;
  readonly cacheTtlMs?: number;
}

interface GraphQLResponse<TData> {
  readonly data?: TData | null;
  readonly errors?: readonly GraphQLErrorPayload[];
}

const RETRYABLE_STATUS = new Set([429, 502, 503, 504]);

export function stableStringify(value: unknown): string {
  if (value === null || typeof value !== 'object') return JSON.stringify(value) ?? 'null';
  if (Array.isArray(value)) return `[${value.map((item) => stableStringify(item ?? null)).join(',')}]`;
  return `{${Object.keys(value as object)
    .sort()
    .filter((key) => (value as Record<string, unknown>)[key] !== undefined)
    .map((key) => `${JSON.stringify(key)}:${stableStringify((value as Record<string, unknown>)[key])}`)
    .join(',')}}`;
}

export function canonicalizeDocument(document: string): string {
  let result = '';
  let string = false;
  let blockString = false;
  let escaped = false;
  let comment = false;
  let whitespace = false;
  for (let index = 0; index < document.length; index += 1) {
    const character = document[index]!;
    const triple = document.slice(index, index + 3) === '"""';
    if (comment) {
      if (character === '\n' || character === '\r') {
        comment = false;
        whitespace = true;
      }
      continue;
    }
    if (!string && !blockString && character === '#') {
      comment = true;
      continue;
    }
    if (!string && triple) {
      blockString = !blockString;
      whitespace = false;
      result += '"""';
      index += 2;
      continue;
    }
    if (!blockString && character === '"' && !escaped) string = !string;
    if (!string && !blockString && /\s|,/.test(character)) {
      whitespace = true;
      continue;
    }
    const punctuation = '!$():=@[]{}|';
    if (whitespace && result && !punctuation.includes(character) && !punctuation.includes(result.at(-1)!)) {
      result += ' ';
    }
    whitespace = false;
    result += character;
    escaped = (string || blockString) && character === '\\' && !escaped;
    if (character !== '\\') escaped = false;
  }
  return result.trim();
}

function retryAfterMilliseconds(value: string | null, now = Date.now()): number | undefined {
  if (!value) return undefined;
  const seconds = Number(value);
  if (Number.isFinite(seconds)) return Math.max(0, seconds * 1_000);
  const date = Date.parse(value);
  return Number.isNaN(date) ? undefined : Math.max(0, date - now);
}

async function wait(milliseconds: number, signal?: AbortSignal): Promise<void> {
  if (milliseconds <= 0) return;
  await new Promise<void>((resolve, reject) => {
    const timer = setTimeout(() => {
      signal?.removeEventListener('abort', abort);
      resolve();
    }, milliseconds);
    const abort = () => {
      clearTimeout(timer);
      reject(signal?.reason ?? new DOMException('The operation was aborted.', 'AbortError'));
    };
    if (signal?.aborted) abort();
    else signal?.addEventListener('abort', abort, { once: true });
  });
}

async function sha256(value: string): Promise<string> {
  if (!globalThis.crypto?.subtle) {
    throw new AniListConfigurationError('The Web Crypto API is required when caching is enabled.');
  }
  const digest = await globalThis.crypto.subtle.digest('SHA-256', new TextEncoder().encode(value));
  return [...new Uint8Array(digest)].map((byte) => byte.toString(16).padStart(2, '0')).join('');
}

export class AniListTransport {
  private readonly options: TransportOptions;

  constructor(options: TransportOptions) {
    this.options = options;
  }

  get hasAuthentication(): boolean {
    return this.options.token !== undefined;
  }

  private async token(): Promise<string | undefined> {
    const value = typeof this.options.token === 'function' ? await this.options.token() : this.options.token;
    return value || undefined;
  }

  async request<TData, TVariables extends Record<string, unknown>>(
    document: string,
    variables: TVariables,
    requestOptions: RequestOptions = {},
  ): Promise<TData> {
    const canonicalDocument = canonicalizeDocument(document);
    const operation = canonicalDocument.match(/^(query|mutation)\b/)?.[1];
    if (!operation) throw new AniListConfigurationError('GraphQL documents must start with query or mutation.');
    const token = await this.token();
    const cacheOptions = requestOptions.cache === false ? undefined : requestOptions.cache;
    const canCache = Boolean(
      this.options.cache && operation === 'query' && (!token || (cacheOptions && cacheOptions.scope)),
    );
    let cacheKey: string | undefined;
    if (canCache) {
      const namespace = [this.options.cacheNamespace, cacheOptions?.namespace].filter(Boolean).join(':');
      cacheKey = `anilist-ts:${namespace}:${await sha256(
        stableStringify({
          document: canonicalDocument,
          endpoint: this.options.endpoint,
          scope: token ? cacheOptions?.scope : undefined,
          variables,
        }),
      )}`;
      const hit = await this.options.cache?.get(cacheKey);
      if (hit !== null && hit !== undefined) return JSON.parse(hit) as TData;
    }

    const retry = requestOptions.retry === false ? { retries: 0 } : { ...this.options.retry, ...requestOptions.retry };
    const retries = retry.retries ?? 2;
    const baseDelayMs = retry.baseDelayMs ?? 250;
    const maxDelayMs = retry.maxDelayMs ?? 30_000;
    let lastNetworkError: unknown;

    for (let attempt = 0; attempt <= retries; attempt += 1) {
      if (requestOptions.signal?.aborted) {
        throw requestOptions.signal.reason ?? new DOMException('The operation was aborted.', 'AbortError');
      }
      let response: Response;
      try {
        response = await this.options.fetch(this.options.endpoint, {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            ...(token ? { Authorization: `Bearer ${token}` } : {}),
          },
          body: JSON.stringify({ query: canonicalDocument, variables }),
          signal: requestOptions.signal,
        });
      } catch (error) {
        if (requestOptions.signal?.aborted || (error instanceof DOMException && error.name === 'AbortError'))
          throw error;
        lastNetworkError = error;
        if (attempt < retries) {
          await wait(Math.min(maxDelayMs, baseDelayMs * 2 ** attempt), requestOptions.signal);
          continue;
        }
        throw new AniListHttpError('Network request to AniList failed.', 0, '', undefined, { cause: error });
      }

      const retryAfterMs = retryAfterMilliseconds(response.headers.get('Retry-After'));
      if (RETRYABLE_STATUS.has(response.status) && attempt < retries) {
        await wait(retryAfterMs ?? Math.min(maxDelayMs, baseDelayMs * 2 ** attempt), requestOptions.signal);
        continue;
      }

      let payload: GraphQLResponse<TData> | unknown;
      const responseText = await response.text();
      try {
        payload = responseText ? (JSON.parse(responseText) as GraphQLResponse<TData>) : undefined;
      } catch {
        payload = responseText;
      }
      if (!response.ok) {
        if (response.status === 429) {
          throw new AniListRateLimitError(
            'AniList rate limit exceeded.',
            response.status,
            response.statusText,
            payload,
            retryAfterMs,
          );
        }
        if (response.status === 401 || response.status === 403) {
          throw new AniListAuthenticationError('AniList authentication failed.', {
            status: response.status,
            statusText: response.statusText,
            body: payload,
          });
        }
        throw new AniListHttpError(
          `AniList returned HTTP ${response.status}${response.statusText ? ` ${response.statusText}` : ''}.`,
          response.status,
          response.statusText,
          payload,
        );
      }

      if (!payload || typeof payload !== 'object') {
        throw new AniListGraphQLError(
          [{ message: 'AniList returned an invalid JSON response.' }],
          undefined,
          response.status,
        );
      }
      const graphQL = payload as GraphQLResponse<TData>;
      if (graphQL.errors?.length) {
        const authenticationError = graphQL.errors.some((error) => {
          const code = error.extensions?.code;
          return code === 'UNAUTHENTICATED' || code === 'FORBIDDEN';
        });
        if (authenticationError) {
          throw new AniListAuthenticationError('AniList authentication failed.', {
            status: response.status,
            body: payload,
            errors: graphQL.errors,
          });
        }
        throw new AniListGraphQLError(graphQL.errors, graphQL.data, response.status);
      }
      if (graphQL.data === undefined || graphQL.data === null) {
        throw new AniListGraphQLError([{ message: 'AniList returned no data.' }], graphQL.data, response.status);
      }
      if (cacheKey) {
        await this.options.cache?.set(cacheKey, JSON.stringify(graphQL.data), {
          ttlMs: cacheOptions?.ttlMs ?? this.options.cacheTtlMs,
        });
      }
      return graphQL.data;
    }

    throw new AniListHttpError('Network request to AniList failed.', 0, '', undefined, { cause: lastNetworkError });
  }
}
