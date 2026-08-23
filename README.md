# AniList-TS

AniList-TS is a projection-based TypeScript SDK for the AniList GraphQL API. It provides complete generated schema types, inferred response shapes, native-fetch transport, high-level Media/Character/User services, entity network methods, scoped caching, and a raw GraphQL escape hatch.

It supports Node.js 22 and 24, modern browsers with `fetch` and Web Crypto, ESM, and CommonJS. The package has no required runtime dependencies.

## Install

```sh
npm install anilist-ts
```

## Quick start

Scalar fields use `true`, objects use nested selections, and fields accepting arguments use `{ $args, $select }`. The result contains only the selected fields (plus the internal identity fields on entity instances).

```ts compile
import { AniListClient } from 'anilist-ts';

const client = new AniListClient();
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

console.log(media?.title?.romaji); // string | null | undefined
```

Every argument becomes a GraphQL variable. Values are never interpolated, and `false`, `0`, `''`, and `null` are preserved.

## Discovery services

Single lookups return an entity or `null`. Searches combine the generated AniList filter arguments with `page` and `perPage`, and return `{ items, pageInfo }`.

```ts compile
import { AniListClient } from 'anilist-ts';

const client = new AniListClient();

const media = await client.media.get(1, { title: { userPreferred: true } });
const character = await client.characters.get(1, { name: { full: true } });
const byId = await client.users.getById(1, { name: true });
const byName = await client.users.getByName('Josh', { name: true });

const page = await client.media.search(
  {
    search: 'Cowboy Bebop',
    type: 'ANIME',
    sort: ['POPULARITY_DESC'],
    isAdult: false,
    page: 1,
    perPage: 10,
  },
  { title: { userPreferred: true }, coverImage: { large: true } },
);

console.log(media, character, byId, byName, page.items, page.pageInfo.hasNextPage);
```

The corresponding methods are:

- `client.media.get(id, selection, requestOptions?)`
- `client.media.search(filtersAndPagination, selection, requestOptions?)`
- `client.characters.get(id, selection, requestOptions?)`
- `client.characters.search(filtersAndPagination, selection, requestOptions?)`
- `client.users.getById(id, selection, requestOptions?)`
- `client.users.getByName(name, selection, requestOptions?)`
- `client.users.search(filtersAndPagination, selection, requestOptions?)`

## Full-schema operations

`query` and `mutate` accept projections for the complete docs-derived schema and return plain typed data. Unions use `$on` inline fragments.

```ts compile
import { AniListClient } from 'anilist-ts';

const client = new AniListClient();

const data = await client.query({
  Activity: {
    $args: { id: 1 },
    $select: {
      __typename: true,
      $on: {
        TextActivity: { text: { $args: {}, $select: true } },
        ListActivity: { progress: true, media: { title: { userPreferred: true } } },
      },
    },
  },
});

const followed = await client.mutate({
  ToggleFollow: {
    $args: { userId: 2 },
    $select: { id: true, isFollowing: true },
  },
});

console.log(data.Activity, followed.ToggleFollow);
```

For handwritten documents, use the raw escape hatch:

```ts compile
import { AniListClient } from 'anilist-ts';

const client = new AniListClient();
const viewer = await client.request<{ Viewer: { id: number; name: string } }, Record<string, never>>(
  'query Viewer { Viewer { id name } }',
  {},
);

console.log(viewer.Viewer.name);
```

## Authentication and entities

Pass a token or an async token provider. A provider is useful when credentials rotate or live in application state.

```ts compile
import { AniListClient } from 'anilist-ts';

const client = new AniListClient({ token: () => process.env.ANILIST_TOKEN });
const media = await client.media.get(1, { isFavourite: true });

if (media) {
  await media.refresh();
  const isFavourite = await media.toggleFavourite();
  console.log(isFavourite);
}
```

`Media` and `Character` expose `refresh()` and `toggleFavourite()`; `User` exposes `refresh()` and `toggleFollow()`. The SDK always requests the minimum identity fields these methods require. Favourite mutations perform an uncached state read after the mutation because AniList's `ToggleFavourite` payload does not identify the toggled item reliably. Network methods throw `AniListAuthenticationError` when no token is configured.

## Caching

Implement the async adapter interface for any cache:

```ts compile
import { AniListClient, type CacheAdapter } from 'anilist-ts';

const values = new Map<string, string>();
const cache: CacheAdapter = {
  async get(key) {
    return values.get(key) ?? null;
  },
  async set(key, value) {
    values.set(key, value);
  },
};

const client = new AniListClient({ cache, cacheNamespace: 'my-app', cacheTtlMs: 60_000 });
const result = await client.query({ Media: { $args: { id: 1 }, $select: { id: true } } });
console.log(result.Media?.id);
```

Cache keys include the canonical document, variables, endpoint, client/request namespaces, and authenticated scope. Mutations are never cached. Anonymous queries may be cached automatically; authenticated queries require an explicit stable per-user scope:

```ts compile
import { AniListClient, type CacheAdapter } from 'anilist-ts';

declare const cache: CacheAdapter;
const client = new AniListClient({ cache, token: 'token' });
const viewer = await client.query({ Viewer: { id: true } }, { cache: { scope: 'user:123', ttlMs: 30_000 } });
console.log(viewer.Viewer?.id);
```

Redis is an optional peer and the application owns connection setup and shutdown:

```ts compile
import { createClient } from 'redis';
import { AniListClient } from 'anilist-ts';
import { RedisCacheAdapter } from 'anilist-ts/redis';

const redis = createClient({ url: 'redis://localhost:6379' });
await redis.connect();

const client = new AniListClient({ cache: new RedisCacheAdapter(redis), cacheNamespace: 'production' });
console.log(client.media);

await redis.quit();
```

Install it separately with `npm install redis`.

## Retries, rate limits, cancellation, and errors

Network failures and HTTP 429, 502, 503, and 504 responses are retried twice by default. Backoff honors `Retry-After`. Override retries globally or per request, and pass an `AbortSignal` when cancellation matters.

```ts compile
import { AniListClient, AniListGraphQLError, AniListRateLimitError } from 'anilist-ts';

const client = new AniListClient({ retry: { retries: 2, baseDelayMs: 250, maxDelayMs: 30_000 } });
const controller = new AbortController();

try {
  const result = await client.query(
    { Media: { $args: { id: 1 }, $select: { id: true } } },
    { signal: controller.signal, retry: { retries: 1 } },
  );
  console.log(result.Media?.id);
} catch (error) {
  if (error instanceof AniListRateLimitError) console.error(error.retryAfterMs);
  if (error instanceof AniListGraphQLError) console.error(error.errors, error.data);
}
```

Typed failures include `AniListHttpError`, `AniListGraphQLError`, `AniListRateLimitError`, `AniListAuthenticationError`, and `AniListConfigurationError`. Aborts preserve the platform's `AbortError`.

## Runtime formats

ESM:

```js
import { AniListClient } from 'anilist-ts';
```

CommonJS:

```js
const { AniListClient } = require('anilist-ts');
```

Browsers use the same ESM export. The bundle contains no Node built-ins and relies on standards-based `fetch`, `AbortController`, `TextEncoder`, and `crypto.subtle` (the latter only when caching).

## Schema provenance

Generated types and runtime field maps come from the committed reference tables in the official [`AniList/docs`](https://github.com/AniList/docs) repository, pinned at commit `03281c0a4bbf0c7f2097e0c935cddaed1096aa65` and generated on 2026-08-23. This snapshot is explicitly docs-derived and may lag the live service.

Normal installs, builds, and tests never contact AniList or GitHub. `schema:sync` parses the vendored tables, `schema:generate` emits committed artifacts, and `schema:check` detects drift. A scheduled/manual workflow compares the snapshot with live introspection—including types, fields, arguments, enums, inputs, and unions—when AniList exposes it successfully.

## Development and release

Use npm and Node 22 or 24:

```sh
npm ci
npm run verify
npm run docs
```

`verify` checks generated-code drift, formatting, ESLint, runtime and type-level compilation (including these README examples), coverage, import cycles/unresolved imports, dual builds, ESM/CommonJS/browser smoke imports, and packed contents. Tests use fixtures and mocked fetch; the AniList endpoint is not a CI dependency.

Generated files are `schema/manifest.json`, `src/generated/schema.ts`, and `src/generated/runtime.ts`. Update them with:

```sh
npm run schema:sync
npm run schema:generate
npm run schema:check
```

Release Please manages version changes, changelog generation, tags, GitHub releases, and npm publication. The package is currently at v1.0.0. Changes merged to `main` should use Conventional Commits so Release Please can prepare the next release automatically. Use the `Release-As: <version>` footer only when deliberately forcing a specific release version.
