import { Client } from ".";
import { Query } from "./util/Query";
import { QueryResult, QueryResults } from "./constants/queries";
import { AniListCharacter } from "./types/aniList";

export class CharactersSearch {
    client: Client;

    constructor(client: Client) {
        this.client = client;
    }

    async getById<T extends keyof AniListCharacter>(id: number, include: T[]): Promise<QueryResult<T, AniListCharacter>> {
        const characterQuery = new Query("characters");
        characterQuery.setInclude(include);
        characterQuery.setVariables({
            id,
            page: 1,
            perPage: 25,
        });

        const results = await this.client.fetcher.fetch(characterQuery, false);

        return results[0] as QueryResult<T, AniListCharacter>;
    }

    async getByQuery<T extends boolean, K extends keyof AniListCharacter>(name: string, showPageInfo: T, include: K[]):
        Promise<QueryResults<T, K, AniListCharacter>> {
        const characterQuery = new Query("characters");
        characterQuery.setInclude(include);
        characterQuery.setVariables({
            name,
            page: 1,
            perPage: 25,
        });

        const result = await this.client.fetcher.fetch(characterQuery, showPageInfo);
        return result as QueryResults<T, K, AniListCharacter>;
    }
}

export class Character {
    id?: number;
    description?: string;

    constructor(aniListResponse: AniListCharacter) {
        if (aniListResponse.id) this.id = aniListResponse.id;
        if (aniListResponse.description) this.description = aniListResponse.description;
    }
}