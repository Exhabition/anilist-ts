import { Client } from '..';
import { AllowedQuery, QueryInclusion, QueryResult, QueryResults } from '../constants/queries';
import { AniListReturnable } from '../types/aniList';
import { Query } from '../util/Query';

export class Search<R extends AniListReturnable> {
  type: AllowedQuery;
  client: Client;

  constructor(client: Client, type: AllowedQuery) {
    this.client = client;
    this.type = type;
  }

  async getById<K extends Extract<keyof R, string>>(id: number, include: QueryInclusion<R>): Promise<QueryResult<K, R>> {
    const query = new Query<R>(this.type);
    query.setInclude(include);
    query.setVariables({
      id,
      page: 1,
      perPage: 25,
    });

    const result = await this.client.fetcher.fetch<R, false>(query, false);
    return result[0] as unknown as QueryResult<K, R>;
  }

  async getByQuery<T extends boolean, K extends Extract<keyof R, string>>(
    name: string,
    showPageInfo: T,
    include: QueryInclusion<R>,
  ): Promise<QueryResults<T, K, R>> {
    const searchQuery = new Query<R>(this.type);
    searchQuery.setInclude(include);
    searchQuery.setVariables({
      name,
      page: 1,
      perPage: 25,
    });

    const result = await this.client.fetcher.fetch<R, T>(searchQuery, showPageInfo);
    return result as unknown as QueryResults<T, K, R>;
  }
}
