export interface GraphQLErrorLocation {
  readonly line: number;
  readonly column: number;
}

export interface GraphQLErrorPayload {
  readonly message: string;
  readonly locations?: readonly GraphQLErrorLocation[];
  readonly path?: readonly (string | number)[];
  readonly extensions?: Readonly<Record<string, unknown>>;
}

export class AniListError extends Error {
  constructor(message: string, options?: ErrorOptions) {
    super(message, options);
    this.name = new.target.name;
  }
}

export class AniListConfigurationError extends AniListError {}

export class AniListHttpError extends AniListError {
  readonly status: number;
  readonly statusText: string;
  readonly body: unknown;

  constructor(message: string, status: number, statusText = '', body?: unknown, options?: ErrorOptions) {
    super(message, options);
    this.status = status;
    this.statusText = statusText;
    this.body = body;
  }
}

export class AniListRateLimitError extends AniListHttpError {
  readonly retryAfterMs: number | undefined;

  constructor(message: string, status: number, statusText: string, body: unknown, retryAfterMs?: number) {
    super(message, status, statusText, body);
    this.retryAfterMs = retryAfterMs;
  }
}

export class AniListAuthenticationError extends AniListHttpError {
  readonly errors: readonly GraphQLErrorPayload[] | undefined;

  constructor(
    message: string,
    options: {
      readonly status?: number;
      readonly statusText?: string;
      readonly body?: unknown;
      readonly errors?: readonly GraphQLErrorPayload[];
    } = {},
  ) {
    super(message, options.status ?? 401, options.statusText ?? 'Unauthorized', options.body);
    this.errors = options.errors;
  }
}

export class AniListGraphQLError<TData = unknown> extends AniListError {
  readonly errors: readonly GraphQLErrorPayload[];
  readonly data: TData | null | undefined;
  readonly status: number;

  constructor(errors: readonly GraphQLErrorPayload[], data?: TData | null, status = 200) {
    super(errors.map((error) => error.message).join('; ') || 'AniList returned a GraphQL error');
    this.errors = errors;
    this.data = data;
    this.status = status;
  }
}
