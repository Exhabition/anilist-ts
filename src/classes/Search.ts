import { Client } from '..';
import { AllowedQuery, QueryResult, QueryResults } from '../constants/queries';
import { AniListReturnable } from '../types/aniList';
import { Query } from '../util/Query';

export class Search<R extends AniListReturnable> {
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

  async getByQuery<T extends boolean, K extends Extract<keyof R, string>>(
    name: string,
    showPageInfo: T,
    include: Extract<keyof R, string>[],
  ): Promise<QueryResults<T, K, R>> {
    const searchQuery = new Query(this.type);
    searchQuery.setInclude(include);
    searchQuery.setVariables({
      name,
      page: 1,
      perPage: 25,
    });

    const result = await this.client.fetcher.fetch(searchQuery, showPageInfo);
    return result as unknown as QueryResults<T, K, R>;
  }
}
