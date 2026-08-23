import { expectTypeOf } from 'vitest';
import { AniListClient, type Media, type MediaType } from '../../src/index.js';

declare const client: AniListClient;

const projected = client.query({
  Media: {
    $args: { id: 1, type: 'ANIME' },
    $select: {
      title: { romaji: { $args: {}, $select: true } },
      isAdult: true,
      characters: {
        $args: { page: 1, perPage: 5 },
        $select: { nodes: { id: true, name: { full: true } } },
      },
    },
  },
});

type Projected = Awaited<typeof projected>;
expectTypeOf<Projected['Media']>().toEqualTypeOf<{
  readonly title: { readonly romaji: string | null } | null;
  readonly isAdult: boolean | null;
  readonly characters: {
    readonly nodes: ReadonlyArray<{
      readonly id: number;
      readonly name: { readonly full: string | null } | null;
    } | null> | null;
  } | null;
} | null>();

const activity = client.query({
  Activity: {
    $args: { id: 1 },
    $select: {
      __typename: true,
      $on: {
        TextActivity: { text: { $args: {}, $select: true } },
        ListActivity: { progress: true },
      },
    },
  },
});
expectTypeOf<Awaited<typeof activity>['Activity']>().toMatchTypeOf<
  | { readonly __typename: 'TextActivity'; readonly text: string | null }
  | { readonly __typename: 'ListActivity'; readonly progress: string | null }
  | { readonly __typename: 'MessageActivity' }
  | null
>();

const entity = await client.media.get(1, {
  title: { english: { $args: {}, $select: true } },
  type: true,
});
if (entity) {
  expectTypeOf(entity).toMatchTypeOf<Media>();
  expectTypeOf(entity.title?.english).toEqualTypeOf<string | null | undefined>();
  expectTypeOf(entity.type).toEqualTypeOf<MediaType | null>();
  // @ts-expect-error unselected fields are not exposed by the entity result
  entity.description;
}

const raw = client.request<{ Viewer: { id: number } }, { includePrivate: boolean }>(
  'query Viewer($includePrivate: Boolean!) { Viewer { id } }',
  { includePrivate: false },
);
expectTypeOf(raw).toEqualTypeOf<Promise<{ Viewer: { id: number } }>>();

// @ts-expect-error invalid field
client.query({ Media: { $args: { id: 1 }, $select: { notAField: true } } });
// @ts-expect-error invalid enum value
client.query({ Media: { $args: { type: 'MOVIE' }, $select: { id: true } } });
// @ts-expect-error fields with arguments require {$args, $select}
client.query({ Media: { $args: { id: 1 }, $select: { description: true } } });
client.query({
  Media: {
    $args: { id: 1 },
    $select: {
      characters: {
        // @ts-expect-error invalid nested argument
        $args: { nope: 1 },
        $select: { nodes: { id: true } },
      },
    },
  },
});
// @ts-expect-error invalid union member
client.query({ Activity: { $args: { id: 1 }, $select: { $on: { Media: { id: true } } } } });
