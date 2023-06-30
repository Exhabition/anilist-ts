import { Client, LoggingLevel } from '.';

import { GraphQLClient } from 'graphql-request';
import { Query } from './util/Query';

import { AniListResponse, AniListReturnable, PageInfo } from './types/aniList';
import { Mutation } from './util/Mutation';

const BASE_URL = 'https://graphql.anilist.co/';

export class Fetcher {
  client: Client;
  graphQLClient: GraphQLClient;

  constructor(client: Client) {
    this.client = client;
    this.graphQLClient = new GraphQLClient(BASE_URL);

    if (client._apiKey) {
      this.graphQLClient.setHeader("Authorization", `Bearer ${client._apiKey}`);
    }
  }

  async fetch<T extends boolean>(
    query: Query,
    showPageInfo: T,
  ): Promise<
    T extends true
      ? {
          [x: string]: PageInfo | AniListReturnable[];
          pageInfo: PageInfo;
        }
      : AniListReturnable[]
  > {
    // if (this.client.settings.logging === LoggingLevel.ALL) console.info("Querying " + query.uuid);

    let response: AniListResponse | null = null;
    if (this.client.redis) {
      const cachedEntry = await this.client.redis.get(query.uuid);
      if (cachedEntry) {
        // if (this.client.settings.logging === LoggingLevel.ALL) console.info("Returning cache hit " + query.uuid);
        response = JSON.parse(cachedEntry);
      }
    }

    if (!response) {
      const request: AniListResponse | null = await this.graphQLClient.request(query.document, query.variables);
      if (!request) {
        throw new Error('No response from AniList');
      } else {
        response = request;

        if (this.client.redis) {
          this.client.redis.set(query.uuid, JSON.stringify(response));
          this.client.redis.expire(query.uuid, this.client.settings.redis?.expire?.[query.type] || 60 * 5);
        }
      }
    }
    const loopOver = query.type;

    const results = [];
    const pageInfo = response.Page.pageInfo;
    const pageDetails = response.Page[loopOver];
    if (pageInfo && pageDetails) {
      for (const info of pageDetails) {
        info._type = query.type;
        const normalDetails = query.normalize(this.client, info);
        results.push(normalDetails);
      }
    }

    const result = showPageInfo ? { pageInfo, [loopOver]: results } : results;
    return result as T extends true
      ? {
          [x: string]: PageInfo | AniListReturnable[];
          pageInfo: PageInfo;
        }
      : AniListReturnable[];
  }

  async mutate(mutation: Mutation) {
    return this.graphQLClient.request(mutation.document, mutation.variables);
  }
}
