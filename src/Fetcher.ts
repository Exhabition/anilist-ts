import { Client } from ".";

import { GraphQLClient } from 'graphql-request'
import { Query } from "./util/Query";

import { AniListResponse, PageInfo } from "./types/aniList";
import { Character } from "./Characters";
import { Media } from "./Media";

const BASE_URL = "https://graphql.anilist.co/";

export class Fetcher {
    client: Client;
    graphQLClient: GraphQLClient;

    constructor(client: Client) {
        this.client = client;
        this.graphQLClient = new GraphQLClient(BASE_URL);
    }

    async fetch<T extends boolean>(query: Query, showPageInfo: T): Promise<T extends true ? {
        [x: string]: PageInfo | (Character | Media)[];
        pageInfo: PageInfo;
    } : (Character | Media)[]> {
        console.log("Querying " + query.uuid);
        let response: AniListResponse | null = null;
        if (this.client.redis) {
            const cachedEntry = await this.client.redis.get(query.uuid);
            if (cachedEntry) {
                response = JSON.parse(cachedEntry);
            }
        }

        if (!response) {
            const request: AniListResponse | null = await this.graphQLClient.request(query.document, query.variables);
            if (!request) {
                throw new Error("No response from AniList")
            } else {
                response = request;

                if (this.client.redis) {
                    this.client.redis.set(query.uuid, JSON.stringify(response))
                }
            }
        }
        const loopOver = query.type;

        const results = [];
        const pageInfo = response.Page.pageInfo;
        const pageDetails = response.Page[loopOver]
        if (pageInfo && pageDetails) {
            for (const info of pageDetails) {
                info._type = query.type;
                const normalDetails = query.normalize(info);
                results.push(normalDetails);
            }
        }

        const result = showPageInfo ? { pageInfo, [loopOver]: results } : results;
        return result as T extends true ? {
            [x: string]: PageInfo | (Character | Media)[];
            pageInfo: PageInfo;
        } : (Character | Media)[];
    }
}