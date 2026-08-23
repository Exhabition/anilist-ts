import type { EntityContext } from '../context.js';
import { AniListAuthenticationError, AniListGraphQLError } from '../errors.js';
import type { CharacterData } from '../generated/schema.js';
import type { RequestOptions } from '../transport.js';
import { Entity } from './base.js';

export class Character extends Entity {
  declare isFavourite?: boolean;
  declare isFavouriteBlocked?: boolean;

  constructor(
    context: EntityContext,
    data: Readonly<Record<string, unknown>>,
    selection: Readonly<Record<string, unknown>>,
    options?: RequestOptions,
  ) {
    super(context, 'Character', data, selection, options);
  }

  async toggleFavourite(options?: RequestOptions): Promise<boolean> {
    if (!this.context.authenticated) throw new AniListAuthenticationError('A token is required to toggle favourites.');
    await this.context.executeMutation(
      { ToggleFavourite: { $args: { characterId: this.id }, $select: { __typename: true } } },
      options,
    );
    const response = await this.context.executeQuery(
      { Character: { $args: { id: this.id }, $select: { id: true, isFavourite: true } } },
      { ...options, cache: false },
    );
    const character = response.Character as Pick<CharacterData, 'id' | 'isFavourite'> | null;
    if (!character) {
      throw new AniListGraphQLError([{ message: `Character ${this.id} was not returned after ToggleFavourite.` }]);
    }
    this.hydrate(character);
    return character.isFavourite;
  }
}
