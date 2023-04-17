import { Character } from "../Characters";
import { Media } from "../Media";
import { PageInfo } from "../types/aniList";

export const allowedQueries = ["characters", "media"] as const;
export type AllowedQuery = typeof allowedQueries[number];

interface QueryInfo {
    document: string;
    normalize: typeof Character | typeof Media;
}

interface Queries {
    [key: string]: QueryInfo;
}

export type QueryResult<T extends string, K extends Record<T, unknown>> = Pick<K, T>
export type QueryResults<T extends boolean, K extends string, V extends Record<K, unknown>> = 
  T extends true ? { pageInfo: PageInfo, characters: QueryResult<K, V>[] } : QueryResult<K, V>[];

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
    }
}