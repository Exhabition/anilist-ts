import { Client } from "..";
import { AllowedQuery, QueryResult, QueryResults } from "../constants/queries";
import { Query } from "../util/Query";
import { Character } from "./Characters";
import { Media } from "./Media";

export class Search<R extends Character | Media> {
    type: AllowedQuery;
    client: Client;

    constructor(client: Client, type: AllowedQuery) {
        this.client = client;
        this.type = type;
    }

    async getById<K extends Extract<keyof R, string>>(id: number, include: K[]): Promise<QueryResult<K, R>> {
        const query = new Query(this.type);
        query.setInclude(include);
        query.setVariables({
            id,
            page: 1,
            perPage: 25,
        });

        const result = await this.client.fetcher.fetch(query, false);
        return result[0] as unknown as QueryResult<K, R>;
    }

    async getByQuery<T extends boolean, K extends Extract<keyof R, string>>(name: string, showPageInfo: T, include: Array<Extract<keyof R, string>>):
        Promise<QueryResults<T, K, R>> {
        const characterQuery = new Query(this.type);
        characterQuery.setInclude(include);
        characterQuery.setVariables({
            name,
            page: 1,
            perPage: 25,
        });

        const result = await this.client.fetcher.fetch(characterQuery, showPageInfo);
        return result as unknown as QueryResults<T, K, R>;
    }
}