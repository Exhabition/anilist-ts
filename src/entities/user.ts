import type { EntityContext } from '../context.js';
import { AniListAuthenticationError, AniListGraphQLError } from '../errors.js';
import type { UserData } from '../generated/schema.js';
import type { RequestOptions } from '../transport.js';
import { Entity } from './base.js';

export class User extends Entity {
  declare isFollowing?: boolean | null;

  constructor(
    context: EntityContext,
    data: Readonly<Record<string, unknown>>,
    selection: Readonly<Record<string, unknown>>,
    options?: RequestOptions,
  ) {
    super(context, 'User', data, selection, options);
  }

  async toggleFollow(options?: RequestOptions): Promise<boolean> {
    if (!this.context.authenticated) throw new AniListAuthenticationError('A token is required to toggle follows.');
    const response = await this.context.executeMutation(
      { ToggleFollow: { $args: { userId: this.id }, $select: { id: true, isFollowing: true } } },
      options,
    );
    const user = response.ToggleFollow as Pick<UserData, 'id' | 'isFollowing'> | null;
    if (!user) throw new AniListGraphQLError([{ message: 'ToggleFollow returned no user.' }], response);
    this.hydrate(user);
    return user.isFollowing ?? false;
  }
}
