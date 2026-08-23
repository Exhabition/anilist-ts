import type { EntityContext } from '../context.js';
import { Media } from '../entities/media.js';
import type { MediaSelection, QuerySelection } from '../generated/schema.js';
import { mergeSelections } from '../selection.js';
import type { RequestOptions } from '../transport.js';
import { pageResponse, pagination } from './helpers.js';
import {
  PAGE_INFO_SELECTION,
  type MediaEntity,
  type MediaSearchOptions,
  type PageInfo,
  type SearchResult,
} from './types.js';

const INTERNAL_SELECTION = { id: true, type: true } as const;

export class MediaService {
  constructor(private readonly context: EntityContext) {}

  async get<const TSelection extends MediaSelection>(
    id: number,
    selection: TSelection,
    options?: RequestOptions,
  ): Promise<MediaEntity<TSelection> | null> {
    const hydratedSelection = mergeSelections(selection, INTERNAL_SELECTION);
    const response = await this.context.executeQuery(
      { Media: { $args: { id }, $select: hydratedSelection } } as unknown as QuerySelection,
      options,
    );
    const data = response.Media;
    if (!data || typeof data !== 'object' || Array.isArray(data)) return null;
    return new Media(
      this.context,
      data as Record<string, unknown>,
      hydratedSelection,
      options,
    ) as MediaEntity<TSelection>;
  }

  async search<const TSelection extends MediaSelection>(
    searchOptions: MediaSearchOptions,
    selection: TSelection,
    options?: RequestOptions,
  ): Promise<SearchResult<MediaEntity<TSelection>>> {
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
            media: { $args: filters, $select: hydratedSelection },
          },
        },
      } as unknown as QuerySelection,
      options,
    );
    const result = pageResponse(response);
    const items = Array.isArray(result.page.media) ? result.page.media : [];
    return {
      items: items.map(
        (item) =>
          new Media(
            this.context,
            item as Record<string, unknown>,
            hydratedSelection,
            options,
          ) as MediaEntity<TSelection>,
      ),
      pageInfo: result.pageInfo as PageInfo,
    };
  }
}
