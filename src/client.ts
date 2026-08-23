import type { CacheAdapter } from './cache/types.js';
import { compileOperation } from './compiler.js';
import type { EntityContext } from './context.js';
import { AniListConfigurationError } from './errors.js';
import type { MutationResult, MutationSelection, QueryResult, QuerySelection } from './generated/schema.js';
import { CharacterService } from './services/characters.js';
import { MediaService } from './services/media.js';
import { UserService } from './services/users.js';
import {
  AniListTransport,
  type FetchLike,
  type RequestOptions,
  type RetryOptions,
  type TokenProvider,
} from './transport.js';

export interface OperationOptions extends RequestOptions {
  readonly operationName?: string;
}

export interface AniListClientOptions {
  readonly endpoint?: string;
  readonly fetch?: FetchLike;
  readonly token?: TokenProvider;
  readonly retry?: RetryOptions;
  readonly cache?: CacheAdapter;
  readonly cacheNamespace?: string;
  readonly cacheTtlMs?: number;
}

const DEFAULT_ENDPOINT = 'https://graphql.anilist.co';

export class AniListClient implements EntityContext {
  readonly media: MediaService;
  readonly characters: CharacterService;
  readonly users: UserService;
  private readonly transport: AniListTransport;

  constructor(options: AniListClientOptions = {}) {
    const fetchImplementation = options.fetch ?? globalThis.fetch?.bind(globalThis);
    if (!fetchImplementation) {
      throw new AniListConfigurationError('No fetch implementation is available. Pass { fetch } to AniListClient.');
    }
    this.transport = new AniListTransport({
      endpoint: options.endpoint ?? DEFAULT_ENDPOINT,
      fetch: fetchImplementation,
      token: options.token,
      retry: options.retry,
      cache: options.cache,
      cacheNamespace: options.cacheNamespace ?? 'default',
      cacheTtlMs: options.cacheTtlMs,
    });
    this.media = new MediaService(this);
    this.characters = new CharacterService(this);
    this.users = new UserService(this);
  }

  get authenticated(): boolean {
    return this.transport.hasAuthentication;
  }

  query<const TSelection extends QuerySelection>(
    selection: TSelection,
    options?: OperationOptions,
  ): Promise<QueryResult<TSelection>>;
  async query(selection: QuerySelection, options: OperationOptions = {}): Promise<Record<string, unknown>> {
    return this.executeQuery(selection, options);
  }

  async executeQuery(selection: QuerySelection, options: OperationOptions = {}): Promise<Record<string, unknown>> {
    const operation = compileOperation('query', selection as unknown as Readonly<Record<string, unknown>>, options);
    return this.request<Record<string, unknown>, Record<string, unknown>>(
      operation.document,
      operation.variables,
      options,
    );
  }

  mutate<const TSelection extends MutationSelection>(
    selection: TSelection,
    options?: OperationOptions,
  ): Promise<MutationResult<TSelection>>;
  async mutate(selection: MutationSelection, options: OperationOptions = {}): Promise<Record<string, unknown>> {
    return this.executeMutation(selection, options);
  }

  async executeMutation(
    selection: MutationSelection,
    options: OperationOptions = {},
  ): Promise<Record<string, unknown>> {
    const operation = compileOperation('mutation', selection as unknown as Readonly<Record<string, unknown>>, options);
    return this.request<Record<string, unknown>, Record<string, unknown>>(
      operation.document,
      operation.variables,
      options,
    );
  }

  request<TData, TVariables extends Record<string, unknown>>(
    document: string,
    variables: TVariables,
    options?: RequestOptions,
  ): Promise<TData> {
    return this.transport.request<TData, TVariables>(document, variables, options);
  }
}
