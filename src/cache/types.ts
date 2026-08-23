export interface CacheSetOptions {
  /** Time-to-live in milliseconds. Omit for adapter-defined persistence. */
  readonly ttlMs?: number;
}

export interface CacheAdapter {
  get(key: string): Promise<string | null>;
  set(key: string, value: string, options?: CacheSetOptions): Promise<void>;
  delete?(key: string): Promise<void>;
}

export interface RequestCacheOptions {
  /** Per-request namespace appended to the client namespace. */
  readonly namespace?: string;
  /** Required before an authenticated response may be cached. Use a stable, per-user value. */
  readonly scope?: string;
  readonly ttlMs?: number;
}
