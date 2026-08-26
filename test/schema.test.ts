import { readFileSync } from 'node:fs';
import path from 'node:path';
import { describe, expect, it } from 'vitest';

const root = path.resolve(import.meta.dirname, '..');
const manifest = JSON.parse(readFileSync(path.join(root, 'schema', 'manifest.json'), 'utf8'));
const object = (name: string) => manifest.objects.find((item: { name: string }) => item.name === name);
const input = (name: string) => manifest.inputs.find((item: { name: string }) => item.name === name);
const enumeration = (name: string) => manifest.enums.find((item: { name: string }) => item.name === name);

describe('live AniList schema snapshot', () => {
  it('has live provenance and committed generated output', () => {
    expect(manifest.metadata).toMatchObject({
      liveDerived: true,
      endpoint: 'https://graphql.anilist.co',
    });
    expect(manifest.metadata.fetchedAt).toMatch(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/);
    expect(readFileSync(path.join(root, 'src', 'generated', 'schema.ts'), 'utf8')).toContain(
      'Generated from the pinned live AniList introspection snapshot.',
    );
  });

  it('parses roots, objects, inputs, enums, lists, nullability, arguments, and deprecations', () => {
    expect(manifest.roots).toEqual({ query: 'Query', mutation: 'Mutation' });
    expect(object('Query').fields.find((field: { name: string }) => field.name === 'Media').args).toContainEqual(
      expect.objectContaining({ name: 'isAdult', type: 'Boolean' }),
    );
    expect(object('Media').fields.find((field: { name: string }) => field.name === 'id').type).toBe('Int!');
    expect(object('Media').fields.find((field: { name: string }) => field.name === 'genres').type).toBe('[String]');
    expect(input('FuzzyDateInput').fields.map((field: { name: string }) => field.name)).toEqual([
      'day',
      'month',
      'year',
    ]);
    expect(enumeration('MediaType').values.map((value: { name: string }) => value.name)).toEqual(['ANIME', 'MANGA']);
    expect(object('User').fields.some((field: { deprecated: boolean }) => field.deprecated)).toBe(true);
  });

  it('captures every live union member', () => {
    expect(manifest.unions).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          name: 'ActivityUnion',
          members: ['ListActivity', 'MessageActivity', 'TextActivity'],
        }),
        expect.objectContaining({ name: 'LikeableUnion' }),
        expect.objectContaining({ name: 'NotificationUnion' }),
      ]),
    );
  });

  it('captures the complete live type inventory', () => {
    expect(manifest.objects).toHaveLength(127);
    expect(manifest.inputs).toHaveLength(10);
    expect(manifest.enums).toHaveLength(40);
    expect(manifest.unions).toHaveLength(3);
    expect(manifest.scalars).toHaveLength(8);
    expect(object('Query').fields).toHaveLength(27);
    expect(object('Mutation').fields).toHaveLength(29);
  });
});
