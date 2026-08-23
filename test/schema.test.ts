import { readFileSync } from 'node:fs';
import path from 'node:path';
import { describe, expect, it } from 'vitest';

const root = path.resolve(import.meta.dirname, '..');
const manifest = JSON.parse(readFileSync(path.join(root, 'schema', 'manifest.json'), 'utf8'));

describe('docs-derived schema snapshot', () => {
  it('has pinned provenance and committed generated output', () => {
    expect(manifest.metadata).toMatchObject({
      docsDerived: true,
      commit: '03281c0a4bbf0c7f2097e0c935cddaed1096aa65',
      generatedAt: '2026-08-23',
    });
    expect(readFileSync(path.join(root, 'src', 'generated', 'schema.ts'), 'utf8')).toContain(
      'Generated from the pinned AniList documentation snapshot.',
    );
  });

  it('parses roots, objects, inputs, enums, lists, nullability, arguments, and deprecations', () => {
    const object = (name: string) => manifest.objects.find((item: { name: string }) => item.name === name);
    const input = (name: string) => manifest.inputs.find((item: { name: string }) => item.name === name);
    const enumeration = (name: string) => manifest.enums.find((item: { name: string }) => item.name === name);

    expect(manifest.roots).toEqual({ query: 'Query', mutation: 'Mutation' });
    expect(object('Query').fields.find((field: { name: string }) => field.name === 'Media').args).toContainEqual(
      expect.objectContaining({ name: 'isAdult', type: 'Boolean' }),
    );
    expect(object('Media').fields.find((field: { name: string }) => field.name === 'id').type).toBe('Int!');
    expect(object('Media').fields.find((field: { name: string }) => field.name === 'genres').type).toBe('[String]');
    expect(input('FuzzyDateInput').fields.map((field: { name: string }) => field.name)).toEqual([
      'year',
      'month',
      'day',
    ]);
    expect(enumeration('MediaType').values.map((value: { name: string }) => value.name)).toEqual(['ANIME', 'MANGA']);
    expect(object('User').fields.some((field: { deprecated: boolean }) => field.deprecated)).toBe(true);
  });

  it('parses every documented union member', () => {
    expect(manifest.unions).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          name: 'ActivityUnion',
          members: ['TextActivity', 'ListActivity', 'MessageActivity'],
        }),
        expect.objectContaining({ name: 'LikeableUnion' }),
        expect.objectContaining({ name: 'NotificationUnion' }),
      ]),
    );
  });
});
