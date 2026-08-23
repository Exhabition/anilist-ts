import { describe, expect, it } from 'vitest';
import { compileOperation } from '../src/compiler.js';
import { AniListConfigurationError } from '../src/errors.js';

describe('compileOperation', () => {
  it('compiles every argument as a variable and preserves falsy and null values', () => {
    const operation = compileOperation('query', {
      Media: {
        $args: { search: '', isAdult: false, minimumTagRank: 0, status: null },
        $select: {
          id: true,
          description: { $args: { asHtml: false }, $select: true },
          characters: {
            $args: { page: 0, perPage: 1 },
            $select: { nodes: { id: true } },
          },
        },
      },
    });

    expect(operation.document).not.toContain('""');
    expect(operation.document).toContain('description(asHtml: $');
    expect(Object.values(operation.variables)).toEqual([false, 0, '', null, 0, 1, false]);
    expect(operation.document).toMatch(/^query AniListQuery\(.+\) \{ Media\(.+\) \{/);
  });

  it('emits deterministic documents regardless of property insertion order', () => {
    const first = compileOperation('query', {
      Media: {
        $args: { search: 'bebop', type: 'ANIME' },
        $select: {
          title: {
            native: { $args: {}, $select: true },
            romaji: { $args: {}, $select: true },
          },
          id: true,
        },
      },
    });
    const second = compileOperation('query', {
      Media: {
        $args: { type: 'ANIME', search: 'bebop' },
        $select: {
          id: true,
          title: {
            romaji: { $args: {}, $select: true },
            native: { $args: {}, $select: true },
          },
        },
      },
    });
    expect(first).toEqual(second);
  });

  it('compiles typed union inline fragments', () => {
    const operation = compileOperation('query', {
      Activity: {
        $args: { id: 1 },
        $select: {
          __typename: true,
          $on: {
            TextActivity: { id: true, text: { $args: {}, $select: true } },
            ListActivity: { id: true, progress: true },
          },
        },
      },
    });
    expect(operation.document).toContain('... on ListActivity { id progress }');
    expect(operation.document).toContain('... on TextActivity { id text }');
  });

  it('supports mutations and custom operation names', () => {
    const operation = compileOperation(
      'mutation',
      { ToggleFollow: { $args: { userId: 7 }, $select: { id: true, isFollowing: true } } },
      { operationName: 'FollowUser' },
    );
    expect(operation.document).toMatch(/^mutation FollowUser/);
    expect(Object.values(operation.variables)).toEqual([7]);
  });

  it.each([
    [{ Missing: true }, 'Unknown field Query.Missing'],
    [{ Media: { $args: { nope: 1 }, $select: { id: true } } }, 'Unknown argument Query.Media(nope:)'],
    [{ Media: { $select: { id: true } } }, 'must use { $args, $select }'],
    [{ Media: { $args: {}, $select: { id: {} } } }, 'Scalar field Media.id must be selected with true'],
    [{ Activity: { $args: {}, $select: { $on: { Media: { id: true } } } } }, 'is not a member of ActivityUnion'],
  ])('rejects malformed runtime selections', (selection, message) => {
    expect(() => compileOperation('query', selection)).toThrowError(message);
  });

  it('rejects invalid operation names', () => {
    expect(() => compileOperation('query', { Viewer: { id: true } }, { operationName: 'not valid' })).toThrow(
      AniListConfigurationError,
    );
  });

  it('validates empty selections, typename, unions, and required arguments', () => {
    expect(() => compileOperation('query', {})).toThrow('Selection for Query cannot be empty');
    expect(() => compileOperation('query', { Media: null })).toThrow(
      'Argument selection for Query.Media must be an object',
    );
    expect(() => compileOperation('query', { Viewer: { __typename: false } })).toThrow(
      '__typename must be selected with true',
    );
    expect(() => compileOperation('query', { Activity: { $args: {}, $select: {} } })).toThrow(
      'Selection for ActivityUnion cannot be empty',
    );
    expect(() => compileOperation('query', { Activity: { $args: {}, $select: { unexpected: true } } })).toThrow(
      'Unknown selection key ActivityUnion.unexpected',
    );
    expect(() => compileOperation('query', { Markdown: { $args: {}, $select: { markdown: true } } })).toThrow(
      'Missing required argument Query.Markdown(markdown:)',
    );
    expect(() =>
      compileOperation('query', { Markdown: { $args: { markdown: null }, $select: { markdown: true } } }),
    ).toThrow('Query.Markdown(markdown:) cannot be null');
  });
});
