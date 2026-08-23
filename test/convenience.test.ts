import { describe, expect, it } from 'vitest';
import { AniListClient } from '../src/index.js';
import { jsonResponse, queuedFetch } from './helpers.js';

describe('convenience mutation services', () => {
  it('exposes media-list helpers with typed mutation payloads', async () => {
    const fetch = queuedFetch(
      jsonResponse({ data: { SaveMediaListEntry: { id: 8, status: 'CURRENT' } } }),
      jsonResponse({ data: { DeleteMediaListEntry: { __typename: 'Deleted', deleted: true } } }),
    );
    const client = new AniListClient({ fetch });
    await expect(
      client.mediaLists.saveEntry({ mediaId: 1, status: 'CURRENT' }, { id: true, status: true }),
    ).resolves.toEqual({ id: 8, status: 'CURRENT' });
    await expect(client.mediaLists.deleteEntry({ id: 8 }, { deleted: true })).resolves.toEqual({
      __typename: 'Deleted',
      deleted: true,
    });
    expect(fetch.mock.calls[0]?.[1]?.body).toContain('SaveMediaListEntry');
    expect(fetch.mock.calls[1]?.[1]?.body).toContain('DeleteMediaListEntry');
  });

  it('exposes activity helpers and preserves selected response data', async () => {
    const fetch = queuedFetch(
      jsonResponse({ data: { SaveTextActivity: { id: 4, text: 'hello' } } }),
      jsonResponse({ data: { ToggleLike: [{ id: 9 }] } }),
    );
    const client = new AniListClient({ fetch });
    await expect(
      client.activities.createText({ text: 'hello' }, { id: true, text: { $args: {}, $select: true } }),
    ).resolves.toEqual({ id: 4, text: 'hello' });
    await expect(client.activities.toggleLike({ id: 4, type: 'ACTIVITY' }, { id: true })).resolves.toEqual([{ id: 9 }]);
  });

  it('exposes review, recommendation, thread, and user-setting helpers', async () => {
    const fetch = queuedFetch(
      jsonResponse({ data: { SaveReview: { id: 1, summary: 'ok' } } }),
      jsonResponse({ data: { SaveRecommendation: { id: 2 } } }),
      jsonResponse({ data: { SaveThread: { id: 3, title: 'topic' } } }),
      jsonResponse({ data: { UpdateUser: { id: 4, name: 'Ada' } } }),
    );
    const client = new AniListClient({ fetch });
    await expect(client.reviews.save({ mediaId: 1, summary: 'ok' }, { id: true, summary: true })).resolves.toEqual({
      id: 1,
      summary: 'ok',
    });
    await expect(client.recommendations.save({ mediaId: 1, mediaRecommendationId: 2 }, { id: true })).resolves.toEqual({
      id: 2,
    });
    await expect(client.threads.save({ title: 'topic' }, { id: true, title: true })).resolves.toEqual({
      id: 3,
      title: 'topic',
    });
    await expect(client.users.updateSettings({ about: 'hello' }, { id: true, name: true })).resolves.toEqual({
      id: 4,
      name: 'Ada',
    });
  });
});
