import { afterAll, beforeAll, describe, expect, it, vi } from 'vitest';
import { createClient } from 'redis';
import { RedisCacheAdapter, type RedisCacheClient } from '../src/redis.js';

describe('RedisCacheAdapter', () => {
  it('delegates storage without owning the connection', async () => {
    const client: RedisCacheClient = {
      get: vi.fn(async () => 'value'),
      set: vi.fn(async () => 'OK'),
      del: vi.fn(async () => 1),
    };
    const adapter = new RedisCacheAdapter(client);
    await expect(adapter.get('key')).resolves.toBe('value');
    await adapter.set('key', 'value', { ttlMs: 1_000 });
    await adapter.set('persistent', 'value');
    await adapter.delete('key');
    expect(client.set).toHaveBeenNthCalledWith(1, 'key', 'value', { PX: 1_000 });
    expect(client.set).toHaveBeenNthCalledWith(2, 'persistent', 'value', undefined);
    expect(client.del).toHaveBeenCalledWith('key');
  });
});

describe.runIf(Boolean(process.env.REDIS_URL))('RedisCacheAdapter integration contract', () => {
  const client = createClient({ url: process.env.REDIS_URL });
  const adapter = new RedisCacheAdapter(client as unknown as RedisCacheClient);
  const key = `anilist-ts:test:${process.pid}`;

  beforeAll(async () => client.connect());
  afterAll(async () => {
    await adapter.delete(key);
    await client.quit();
  });

  it('round-trips expiring values through a real Redis service', async () => {
    await adapter.set(key, 'contract', { ttlMs: 30_000 });
    await expect(adapter.get(key)).resolves.toBe('contract');
  });
});
