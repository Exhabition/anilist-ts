import type { CacheAdapter, CacheSetOptions } from './cache/types.js';

/** Minimal structural contract implemented by redis v4/v5 clients. Connection ownership stays with the caller. */
export interface RedisCacheClient {
  get(key: string): Promise<string | null>;
  set(key: string, value: string, options?: { readonly PX?: number }): Promise<unknown>;
  del(key: string): Promise<unknown>;
}

export class RedisCacheAdapter implements CacheAdapter {
  constructor(private readonly client: RedisCacheClient) {}

  get(key: string): Promise<string | null> {
    return this.client.get(key);
  }

  async set(key: string, value: string, options?: CacheSetOptions): Promise<void> {
    await this.client.set(key, value, options?.ttlMs === undefined ? undefined : { PX: options.ttlMs });
  }

  async delete(key: string): Promise<void> {
    await this.client.del(key);
  }
}
