import type { EntityContext } from '../context.js';
import { Character } from '../entities/character.js';
import type { CharacterSelection, QuerySelection } from '../generated/schema.js';
import { mergeSelections } from '../selection.js';
import type { RequestOptions } from '../transport.js';
import { pageResponse, pagination } from './helpers.js';
import {
  PAGE_INFO_SELECTION,
  type CharacterEntity,
  type CharacterSearchOptions,
  type PageInfo,
  type SearchResult,
} from './types.js';

const INTERNAL_SELECTION = { id: true } as const;

export class CharacterService {
  constructor(private readonly context: EntityContext) {}

  async get<const TSelection extends CharacterSelection>(
    id: number,
    selection: TSelection,
    options?: RequestOptions,
  ): Promise<CharacterEntity<TSelection> | null> {
    const hydratedSelection = mergeSelections(selection, INTERNAL_SELECTION);
    const response = await this.context.executeQuery(
      { Character: { $args: { id }, $select: hydratedSelection } } as unknown as QuerySelection,
      options,
    );
    const data = response.Character;
    if (!data || typeof data !== 'object' || Array.isArray(data)) return null;
    return new Character(
      this.context,
      data as Record<string, unknown>,
      hydratedSelection,
      options,
    ) as CharacterEntity<TSelection>;
  }

  async search<const TSelection extends CharacterSelection>(
    searchOptions: CharacterSearchOptions,
    selection: TSelection,
    options?: RequestOptions,
  ): Promise<SearchResult<CharacterEntity<TSelection>>> {
    const { page, perPage } = pagination(searchOptions);
    const filters: Record<string, unknown> = { ...searchOptions };
    delete filters.page;
    delete filters.perPage;
    const hydratedSelection = mergeSelections(selection, INTERNAL_SELECTION);
    const response = await this.context.executeQuery(
      {
        Page: {
          $args: { page, perPage },
          $select: {
            pageInfo: PAGE_INFO_SELECTION,
            characters: { $args: filters, $select: hydratedSelection },
          },
        },
      } as unknown as QuerySelection,
      options,
    );
    const result = pageResponse(response);
    const items = Array.isArray(result.page.characters) ? result.page.characters : [];
    return {
      items: items.map(
        (item) =>
          new Character(
            this.context,
            item as Record<string, unknown>,
            hydratedSelection,
            options,
          ) as CharacterEntity<TSelection>,
      ),
      pageInfo: result.pageInfo as PageInfo,
    };
  }
}
