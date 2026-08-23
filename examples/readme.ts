import { AniListClient, AniListGraphQLError, AniListRateLimitError } from '../src/index.js';

const client = new AniListClient({
  token: () => process.env.ANILIST_TOKEN,
  retry: { retries: 2 },
});

const media = await client.media.get(1, {
  title: {
    romaji: { $args: {}, $select: true },
    english: { $args: {}, $select: true },
  },
  description: { $args: { asHtml: false }, $select: true },
  characters: {
    $args: { page: 1, perPage: 5 },
    $select: { nodes: { id: true, name: { full: true } } },
  },
});

if (media) {
  console.log(media.title?.romaji);
  await media.refresh();
}

const search = await client.media.search(
  { search: 'Cowboy Bebop', type: 'ANIME', sort: ['POPULARITY_DESC'], page: 1, perPage: 10 },
  { title: { romaji: { $args: {}, $select: true } }, coverImage: { large: true } },
);
console.log(search.items, search.pageInfo.hasNextPage);

const data = await client.query({
  Page: {
    $args: { page: 1, perPage: 10 },
    $select: {
      airingSchedules: {
        $args: { notYetAired: true, sort: ['TIME'] },
        $select: { id: true, airingAt: true, episode: true },
      },
    },
  },
});
console.log(data.Page?.airingSchedules);

const controller = new AbortController();
try {
  await client.query({ Viewer: { id: true, name: true } }, { signal: controller.signal });
} catch (error) {
  if (error instanceof AniListRateLimitError) console.error(error.retryAfterMs);
  if (error instanceof AniListGraphQLError) console.error(error.errors);
}
