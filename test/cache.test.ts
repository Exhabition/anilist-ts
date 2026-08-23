import { describe, expect, it, vi } from 'vitest';
import { AniListClient, type CacheAdapter, type CacheSetOptions } from '../src/index.js';
import { jsonResponse } from './helpers.js';

class MemoryCache implements CacheAdapter {
  readonly values = new Map<string, string>();
  readonly writes: Array<{ key: string; options?: CacheSetOptions }> = [];

  async get(key: string): Promise<string | null> {
    return this.values.get(key) ?? null;
  }

  async set(key: string, value: string, options?: CacheSetOptions): Promise<void> {
    this.values.set(key, value);
    this.writes.push({ key, options });
  }
}

describe('query cache', () => {
  it('caches anonymous queries and separates variables and selections', async () => {
    const cache = new MemoryCache();
    const fetch = vi.fn(async () => jsonResponse({ data: { Media: { id: 1, title: { romaji: 'Bebop' } } } }));
    const client = new AniListClient({ fetch, cache, cacheNamespace: 'tests', cacheTtlMs: 500 });

    await client.query({ Media: { $args: { id: 1 }, $select: { id: true } } });
    await client.query({ Media: { $args: { id: 1 }, $select: { id: true } } });
    await client.query({ Media: { $args: { id: 2 }, $select: { id: true } } });
    await client.query({
      Media: { $args: { id: 1 }, $select: { title: { romaji: { $args: {}, $select: true } } } },
    });

    expect(fetch).toHaveBeenCalledTimes(3);
    expect(cache.values).toHaveLength(3);
    expect(cache.writes[0]?.options?.ttlMs).toBe(500);
  });

  it('separates client and request namespaces', async () => {
    const cache = new MemoryCache();
    const fetch = vi.fn(async () => jsonResponse({ data: { Viewer: { id: 1 } } }));
    const one = new AniListClient({ fetch, cache, cacheNamespace: 'one' });
    const two = new AniListClient({ fetch, cache, cacheNamespace: 'two' });
    const selection = { Viewer: { id: true } } as const;
    await one.query(selection, { cache: { namespace: 'a' } });
    await one.query(selection, { cache: { namespace: 'b' } });
    await two.query(selection, { cache: { namespace: 'a' } });
    expect(fetch).toHaveBeenCalledTimes(3);
  });

  it('does not cache authenticated queries without an explicit scope', async () => {
    const cache = new MemoryCache();
    const fetch = vi.fn(async () => jsonResponse({ data: { Viewer: { id: 1 } } }));
    const client = new AniListClient({ fetch, cache, token: () => 'token' });
    const selection = { Viewer: { id: true } } as const;
    await client.query(selection);
    await client.query(selection);
    await client.query(selection, { cache: { scope: 'user:1' } });
    await client.query(selection, { cache: { scope: 'user:1' } });
    expect(fetch).toHaveBeenCalledTimes(3);
    expect(cache.values).toHaveLength(1);
  });

  it('never caches mutations', async () => {
    const cache = new MemoryCache();
    const fetch = vi.fn(async () => jsonResponse({ data: { ToggleFollow: { id: 2 } } }));
    const client = new AniListClient({ fetch, cache, token: 'token' });
    const selection = { ToggleFollow: { $args: { userId: 2 }, $select: { id: true } } } as const;
    await client.mutate(selection, { cache: { scope: 'user:1' } });
    await client.mutate(selection, { cache: { scope: 'user:1' } });
    expect(fetch).toHaveBeenCalledTimes(2);
    expect(cache.values).toHaveLength(0);
  });
});
