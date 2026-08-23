import { describe, expect, it } from 'vitest';
import { AniListAuthenticationError, AniListClient } from '../src/index.js';
import { jsonResponse, queuedFetch, requestBody } from './helpers.js';

describe('entity network methods', () => {
  it('refreshes the original projection and preserves falsy values', async () => {
    const fetch = queuedFetch(
      jsonResponse({ data: { Media: { id: 1, type: 'ANIME', isAdult: true } } }),
      jsonResponse({ data: { Media: { id: 1, type: 'ANIME', isAdult: false } } }),
    );
    const media = await new AniListClient({ fetch }).media.get(1, { isAdult: true });
    await media?.refresh({ cache: false });
    expect(media?.isAdult).toBe(false);
  });

  it('toggles anime and manga favourites and reads the refreshed nested result', async () => {
    const animeFetch = queuedFetch(
      jsonResponse({ data: { Media: { id: 1, type: 'ANIME' } } }),
      jsonResponse({ data: { ToggleFavourite: { __typename: 'Favourites' } } }),
      jsonResponse({ data: { Media: { id: 1, isFavourite: false } } }),
    );
    const anime = await new AniListClient({ fetch: animeFetch, token: 'token' }).media.get(1, { id: true });
    await expect(anime?.toggleFavourite()).resolves.toBe(false);
    expect(Object.keys(requestBody(animeFetch, 1).variables).some((key) => key.includes('animeId'))).toBe(true);
    expect(anime?.isFavourite).toBe(false);

    const mangaFetch = queuedFetch(
      jsonResponse({ data: { Media: { id: 2, type: 'MANGA' } } }),
      jsonResponse({ data: { ToggleFavourite: { __typename: 'Favourites' } } }),
      jsonResponse({ data: { Media: { id: 2, isFavourite: true } } }),
    );
    const manga = await new AniListClient({ fetch: mangaFetch, token: () => 'token' }).media.get(2, { id: true });
    await expect(manga?.toggleFavourite()).resolves.toBe(true);
    expect(Object.keys(requestBody(mangaFetch, 1).variables).some((key) => key.includes('mangaId'))).toBe(true);
  });

  it('toggles character favourites', async () => {
    const fetch = queuedFetch(
      jsonResponse({ data: { Character: { id: 1 } } }),
      jsonResponse({ data: { ToggleFavourite: { __typename: 'Favourites' } } }),
      jsonResponse({ data: { Character: { id: 1, isFavourite: true } } }),
    );
    const character = await new AniListClient({ fetch, token: 'token' }).characters.get(1, { id: true });
    await expect(character?.toggleFavourite()).resolves.toBe(true);
    expect(character?.isFavourite).toBe(true);
  });

  it('parses ToggleFollow.User and hydrates false instead of discarding it', async () => {
    const fetch = queuedFetch(
      jsonResponse({ data: { User: { id: 2, name: 'two' } } }),
      jsonResponse({ data: { ToggleFollow: { id: 2, isFollowing: false } } }),
    );
    const user = await new AniListClient({ fetch, token: 'token' }).users.getById(2, { name: true });
    await expect(user?.toggleFollow()).resolves.toBe(false);
    expect(user?.isFollowing).toBe(false);
  });

  it('rejects authenticated methods before making a request when no token is configured', async () => {
    const fetch = queuedFetch(jsonResponse({ data: { Character: { id: 1 } } }));
    const character = await new AniListClient({ fetch }).characters.get(1, { id: true });
    await expect(character?.toggleFavourite()).rejects.toBeInstanceOf(AniListAuthenticationError);
    expect(fetch).toHaveBeenCalledOnce();
  });

  it('throws typed errors when refreshed entity and mutation follow-up objects are missing', async () => {
    const refreshFetch = queuedFetch(
      jsonResponse({ data: { Media: { id: 1, type: 'ANIME' } } }),
      jsonResponse({ data: { Media: null } }),
    );
    const media = await new AniListClient({ fetch: refreshFetch }).media.get(1, { id: true });
    await expect(media?.refresh({ cache: false })).rejects.toThrow('Media 1 no longer exists');

    const characterFetch = queuedFetch(
      jsonResponse({ data: { Character: { id: 1 } } }),
      jsonResponse({ data: { ToggleFavourite: { __typename: 'Favourites' } } }),
      jsonResponse({ data: { Character: null } }),
    );
    const character = await new AniListClient({ fetch: characterFetch, token: 'token' }).characters.get(1, {
      id: true,
    });
    await expect(character?.toggleFavourite()).rejects.toThrow('was not returned after ToggleFavourite');

    const userFetch = queuedFetch(
      jsonResponse({ data: { User: { id: 1 } } }),
      jsonResponse({ data: { ToggleFollow: null } }),
    );
    const user = await new AniListClient({ fetch: userFetch, token: 'token' }).users.getById(1, { id: true });
    await expect(user?.toggleFollow()).rejects.toThrow('ToggleFollow returned no user');
  });

  it('refuses to guess a favourite argument when media type is missing', async () => {
    const fetch = queuedFetch(jsonResponse({ data: { Media: { id: 1, type: null } } }));
    const media = await new AniListClient({ fetch, token: 'token' }).media.get(1, { id: true });
    await expect(media?.toggleFavourite()).rejects.toThrow('has no anime or manga type');
    expect(fetch).toHaveBeenCalledOnce();
  });
});
