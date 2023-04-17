import { Client } from ".";
import { Query } from "./util/Query";
import { QueryResult, QueryResults } from "./constants/queries";
import { AniListMedia } from "./types/aniList";

export class MediaSearch {
    client: Client;

    constructor(client: Client) {
        this.client = client;
    }

    async getById<T extends keyof AniListMedia>(id: number, include: T[]): Promise<QueryResult<T, AniListMedia>> {
        const characterQuery = new Query("media");
        characterQuery.setInclude(include);
        characterQuery.setVariables({
            id,
            page: 1,
            perPage: 25,
        });

        const result = await this.client.fetcher.fetch(characterQuery, false);
        return result[0] as QueryResult<T, AniListMedia>;
    }

    async getByQuery<T extends boolean, K extends keyof AniListMedia>(name: string, showPageInfo: T, include: K[]):
        Promise<QueryResults<T, K, AniListMedia>> {
        const characterQuery = new Query("media");
        characterQuery.setInclude(include);
        characterQuery.setVariables({
            name,
            page: 1,
            perPage: 25,
        });

        const result = await this.client.fetcher.fetch(characterQuery, showPageInfo);
        return result as QueryResults<T, K, AniListMedia>;
    }
}

export class Media {
    id?: number;

    constructor(aniListResponse: AniListMedia) {
        if (aniListResponse.id) this.id = aniListResponse.id;
    }
}