import { readFileSync } from 'node:fs';
import path from 'node:path';
import { afterEach, describe, expect, it, vi } from 'vitest';
import { fetchLiveIntrospection, manifestFromIntrospection, normalizeIntrospection } from '../scripts/schema-lib.mjs';

const root = path.resolve(import.meta.dirname, '..');
const introspection = JSON.parse(readFileSync(path.join(root, 'schema', 'introspection.json'), 'utf8'));
const metadata = JSON.parse(readFileSync(path.join(root, 'schema', 'source.json'), 'utf8'));

describe('live schema normalization', () => {
  afterEach(() => vi.unstubAllGlobals());

  it('produces the same manifest regardless of introspection array order', () => {
    const reordered = structuredClone(introspection);
    reordered.__schema.types.reverse();
    for (const type of reordered.__schema.types) {
      type.fields?.reverse();
      type.inputFields?.reverse();
      type.enumValues?.reverse();
      type.possibleTypes?.reverse();
      for (const field of type.fields ?? []) field.args.reverse();
    }

    expect(manifestFromIntrospection(normalizeIntrospection(reordered), metadata)).toEqual(
      manifestFromIntrospection(introspection, metadata),
    );
  });

  it('rejects live scalars without an explicit TypeScript mapping', () => {
    const incomplete = structuredClone(metadata);
    delete incomplete.scalarMappings.Boolean;
    expect(() => manifestFromIntrospection(introspection, incomplete)).toThrow(
      'Missing TypeScript mapping for live scalar: Boolean',
    );
  });

  it('reports HTTP, GraphQL, and malformed introspection responses clearly', async () => {
    vi.stubGlobal('fetch', vi.fn().mockResolvedValueOnce({ ok: false, status: 503 }));
    await expect(fetchLiveIntrospection(metadata.endpoint)).rejects.toThrow('Live introspection returned HTTP 503.');

    vi.stubGlobal(
      'fetch',
      vi.fn().mockResolvedValueOnce({
        ok: true,
        json: async () => ({ errors: [{ message: 'Introspection is unavailable' }] }),
      }),
    );
    await expect(fetchLiveIntrospection(metadata.endpoint)).rejects.toThrow(
      'Live introspection failed: Introspection is unavailable',
    );

    vi.stubGlobal('fetch', vi.fn().mockResolvedValueOnce({ ok: true, json: async () => ({ data: {} }) }));
    await expect(fetchLiveIntrospection(metadata.endpoint)).rejects.toThrow(
      'Live introspection response did not include schema data.',
    );
  });
});
