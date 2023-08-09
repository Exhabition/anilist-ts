import { Character } from '../classes/Characters';
import { Media } from '../classes/Media';
import { User } from '../classes/Users';
import { AniListReturnableTypes, PageInfo, allowedQueries } from '../types/aniList';

export type AllowedQuery = (typeof allowedQueries)[number];

type ExcludeFunctions<T> = {
  [K in keyof T]: T[K] extends (...args: any[]) => any ? never : K;
}[keyof T];

type ArrayKeys<T> = T extends any[] ? keyof T[number] : never;
type ObjectKeys<T> = T extends any[] ? ArrayKeys<T> : T extends object ? ExcludeFunctions<T> : never;

type QueryInclusionValue<R> = {
  [key in ObjectKeys<R>]?: R[key] extends object ? QueryInclusionValue<R[key]> : boolean;
} | ArrayKeys<R>[]

export type QueryInclusion<R> = {
  [key in ObjectKeys<R>]?: (R[key]extends (...args: any[]) => any ? never : (keyof R[key])[])
  | (R[key] extends object ? QueryInclusionValue<R[key]> : boolean);
};

interface QueryInfo {
  document: string;
  normalize: AniListReturnableTypes;
}

interface Queries {
  [key: string]: QueryInfo;
}

export type QueryResult<T extends string, K extends Record<T, unknown>> = Pick<
  K,
  T | { [P in keyof K]: K[P] extends () => void ? P : never }[keyof K]
>;
export type QueryResults<T extends boolean, K extends string, V extends Record<K, unknown>> = T extends true
  ? { pageInfo: PageInfo; characters: QueryResult<K, V>[] }
  : QueryResult<K, V>[];

export const QUERIES: Queries = {
  characters: {
    document: `query ($page: Int, $perPage: Int, $id: Int) {        
            Page (page: $page, perPage: $perPage) { 
                pageInfo { total currentPage lastPage hasNextPage perPage } 
                characters (id: $id) { INCLUDE }
            }
        }`,
    normalize: Character,
  },
  media: {
    document: `query ($page: Int, $perPage: Int, $id: Int) {        
            Page (page: $page, perPage: $perPage) { 
                pageInfo { total currentPage lastPage hasNextPage perPage } 
                media (id: $id) { INCLUDE }
            }
        }`,
    normalize: Media,
  },
  users: {
    document: `query ($page: Int, $perPage: Int, $id: Int) {        
        Page (page: $page, perPage: $perPage) { 
          pageInfo { total currentPage lastPage hasNextPage perPage } 
          users (id: $id) { INCLUDE }
        }
    }`,
    normalize: User,
  }
};
