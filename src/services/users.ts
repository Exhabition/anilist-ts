import type { EntityContext } from '../context.js';
import { User } from '../entities/user.js';
import type { MutationUpdateUserArgs, QuerySelection, UserSelection } from '../generated/schema.js';
import { mergeSelections } from '../selection.js';
import type { RequestOptions } from '../transport.js';
import { pageResponse, pagination } from './helpers.js';
import {
  PAGE_INFO_SELECTION,
  type PageInfo,
  type SearchResult,
  type UserEntity,
  type UserSearchOptions,
} from './types.js';
import { updateUser } from './user-settings.js';

const INTERNAL_SELECTION = { id: true } as const;

export class UserService {
  constructor(private readonly context: EntityContext) {}

  getById<const TSelection extends UserSelection>(
    id: number,
    selection: TSelection,
    options?: RequestOptions,
  ): Promise<UserEntity<TSelection> | null> {
    return this.get({ id }, selection, options);
  }

  getByName<const TSelection extends UserSelection>(
    name: string,
    selection: TSelection,
    options?: RequestOptions,
  ): Promise<UserEntity<TSelection> | null> {
    return this.get({ name }, selection, options);
  }

  updateSettings<const TSelection extends UserSelection>(
    args: MutationUpdateUserArgs,
    selection: TSelection,
    options?: RequestOptions,
  ): ReturnType<typeof updateUser<TSelection>> {
    return updateUser(this.context, args, selection, options);
  }

  private async get<const TSelection extends UserSelection>(
    args: { readonly id?: number; readonly name?: string },
    selection: TSelection,
    options?: RequestOptions,
  ): Promise<UserEntity<TSelection> | null> {
    const hydratedSelection = mergeSelections(selection, INTERNAL_SELECTION);
    const response = await this.context.executeQuery(
      { User: { $args: args, $select: hydratedSelection } } as unknown as QuerySelection,
      options,
    );
    const data = response.User;
    if (!data || typeof data !== 'object' || Array.isArray(data)) return null;
    return new User(
      this.context,
      data as Record<string, unknown>,
      hydratedSelection,
      options,
    ) as UserEntity<TSelection>;
  }

  async search<const TSelection extends UserSelection>(
    searchOptions: UserSearchOptions,
    selection: TSelection,
    options?: RequestOptions,
  ): Promise<SearchResult<UserEntity<TSelection>>> {
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
            users: { $args: filters, $select: hydratedSelection },
          },
        },
      } as unknown as QuerySelection,
      options,
    );
    const result = pageResponse(response);
    const items = Array.isArray(result.page.users) ? result.page.users : [];
    return {
      items: items.map(
        (item) =>
          new User(this.context, item as Record<string, unknown>, hydratedSelection, options) as UserEntity<TSelection>,
      ),
      pageInfo: result.pageInfo as PageInfo,
    };
  }
}
