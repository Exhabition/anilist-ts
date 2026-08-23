import { describe, expect, it } from 'vitest';
import { AniListClient, Character, Media, User } from '../src/index.js';
import { jsonResponse, queuedFetch, requestBody } from './helpers.js';

const pageInfo = { total: 1, currentPage: 1, lastPage: 1, hasNextPage: false, perPage: 25 };

describe('discovery services', () => {
  it('gets and fully hydrates media while requesting internal identity fields', async () => {
    const fetch = queuedFetch(
      jsonResponse({ data: { Media: { id: 1, type: 'ANIME', title: { romaji: '' }, isAdult: false } } }),
    );
    const client = new AniListClient({ fetch });
    const media = await client.media.get(1, {
      title: { romaji: { $args: {}, $select: true } },
      isAdult: true,
    });

    expect(media).toBeInstanceOf(Media);
    expect(media).toMatchObject({ id: 1, type: 'ANIME', title: { romaji: '' }, isAdult: false });
    expect(requestBody(fetch).query).toContain('{id isAdult title{romaji}type}');
  });

  it('searches media with generated filters and normalized pagination', async () => {
    const fetch = queuedFetch(
      jsonResponse({
        data: { Page: { pageInfo, media: [{ id: 1, type: 'ANIME', title: { romaji: 'Cowboy Bebop' } }] } },
      }),
    );
    const client = new AniListClient({ fetch });
    const result = await client.media.search(
      { search: 'bebop', type: 'ANIME', isAdult: false, page: 1, perPage: 25 },
      { title: { romaji: { $args: {}, $select: true } } },
    );

    expect(result.items[0]).toBeInstanceOf(Media);
    expect(result.items[0]?.title?.romaji).toBe('Cowboy Bebop');
    expect(result.pageInfo.hasNextPage).toBe(false);
    expect(Object.values(requestBody(fetch).variables)).toContain(false);
  });

  it('gets and searches characters', async () => {
    const fetch = queuedFetch(
      jsonResponse({ data: { Character: { id: 1, name: { full: 'Spike Spiegel' } } } }),
      jsonResponse({ data: { Page: { pageInfo, characters: [{ id: 1, name: { full: 'Spike Spiegel' } }] } } }),
    );
    const client = new AniListClient({ fetch });
    const character = await client.characters.get(1, { name: { full: true } });
    const search = await client.characters.search({ search: '', page: 1 }, { name: { full: true } });
    expect(character).toBeInstanceOf(Character);
    expect(character?.name?.full).toBe('Spike Spiegel');
    expect(search.items[0]).toBeInstanceOf(Character);
    expect(Object.values(requestBody(fetch, 1).variables)).toContain('');
  });

  it('gets users by id and name and searches users', async () => {
    const fetch = queuedFetch(
      jsonResponse({ data: { User: { id: 1, name: 'one' } } }),
      jsonResponse({ data: { User: { id: 2, name: 'two' } } }),
      jsonResponse({ data: { Page: { pageInfo, users: [{ id: 2, name: 'two' }] } } }),
    );
    const client = new AniListClient({ fetch });
    const one = await client.users.getById(1, { name: true });
    const two = await client.users.getByName('two', { name: true });
    const search = await client.users.search({ search: 'two' }, { name: true });
    expect(one).toBeInstanceOf(User);
    expect(two?.name).toBe('two');
    expect(search.items[0]).toBeInstanceOf(User);
  });

  it('returns null for missing lookups', async () => {
    const fetch = queuedFetch(
      jsonResponse({ data: { Media: null } }),
      jsonResponse({ data: { Character: null } }),
      jsonResponse({ data: { User: null } }),
    );
    const client = new AniListClient({ fetch });
    await expect(client.media.get(1, { id: true })).resolves.toBeNull();
    await expect(client.characters.get(1, { id: true })).resolves.toBeNull();
    await expect(client.users.getById(1, { id: true })).resolves.toBeNull();
  });

  it('validates pagination locally', async () => {
    const client = new AniListClient({ fetch: queuedFetch(jsonResponse({})) });
    await expect(client.media.search({ page: 0 }, { id: true })).rejects.toThrow('page must be a positive integer');
    await expect(client.media.search({ perPage: 51 }, { id: true })).rejects.toThrow('perPage must be an integer');
  });
});
