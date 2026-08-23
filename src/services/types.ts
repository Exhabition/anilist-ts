import type {
  CharacterData,
  CharacterSelection,
  MediaData,
  MediaSelection,
  PageCharactersArgs,
  PageInfoData,
  PageInfoSelection,
  PageMediaArgs,
  PageUsersArgs,
  SelectionResult,
  UserData,
  UserSelection,
} from '../generated/schema.js';
import type { Character } from '../entities/character.js';
import type { Media } from '../entities/media.js';
import type { User } from '../entities/user.js';

export interface PaginationOptions {
  readonly page?: number;
  readonly perPage?: number;
}

export type MediaSearchOptions = PageMediaArgs & PaginationOptions;
export type CharacterSearchOptions = PageCharactersArgs & PaginationOptions;
export type UserSearchOptions = PageUsersArgs & PaginationOptions;

export const PAGE_INFO_SELECTION = {
  total: true,
  currentPage: true,
  lastPage: true,
  hasNextPage: true,
  perPage: true,
} as const satisfies PageInfoSelection;

export type PageInfo = SelectionResult<PageInfoData, typeof PAGE_INFO_SELECTION>;
export type MediaEntity<TSelection extends MediaSelection> = Media & SelectionResult<MediaData, TSelection>;
export type CharacterEntity<TSelection extends CharacterSelection> = Character &
  SelectionResult<CharacterData, TSelection>;
export type UserEntity<TSelection extends UserSelection> = User & SelectionResult<UserData, TSelection>;

export interface SearchResult<TItem> {
  readonly items: readonly TItem[];
  readonly pageInfo: PageInfo;
}
