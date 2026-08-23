import type { EntityContext } from '../context.js';
import { AniListAuthenticationError, AniListConfigurationError, AniListGraphQLError } from '../errors.js';
import type { MediaData, MediaType } from '../generated/schema.js';
import type { RequestOptions } from '../transport.js';
import { Entity } from './base.js';

export class Media extends Entity {
  declare type: MediaType | null;
  declare isFavourite?: boolean;
  declare isFavouriteBlocked?: boolean;

  constructor(
    context: EntityContext,
    data: Readonly<Record<string, unknown>>,
    selection: Readonly<Record<string, unknown>>,
    options?: RequestOptions,
  ) {
    super(context, 'Media', data, selection, options);
  }

  async toggleFavourite(options?: RequestOptions): Promise<boolean> {
    if (!this.context.authenticated) throw new AniListAuthenticationError('A token is required to toggle favourites.');
    if (this.type !== 'ANIME' && this.type !== 'MANGA') {
      throw new AniListConfigurationError(`Media ${this.id} has no anime or manga type.`);
    }
    const argument = this.type === 'MANGA' ? { mangaId: this.id } : { animeId: this.id };
    await this.context.executeMutation(
      { ToggleFavourite: { $args: argument, $select: { __typename: true } } },
      options,
    );
    const response = await this.context.executeQuery(
      { Media: { $args: { id: this.id }, $select: { id: true, isFavourite: true } } },
      { ...options, cache: false },
    );
    const media = response.Media as Pick<MediaData, 'id' | 'isFavourite'> | null;
    if (!media)
      throw new AniListGraphQLError([{ message: `Media ${this.id} was not returned after ToggleFavourite.` }]);
    this.hydrate(media);
    return media.isFavourite;
  }
}
