import { Client } from '..';
import { AniListAnimeStats, AniListMangaStats, AniListStats } from '../types/aniList';

export class Stats implements Omit<AniListStats, '_type'> {
  anime!: AniListAnimeStats;
  manga!: AniListMangaStats;

  private _client: Client;

  constructor(client: Client, aniListResponse: AniListStats) {
    if (aniListResponse.anime) this.anime = aniListResponse.anime;
    if (aniListResponse.manga) this.manga = aniListResponse.manga;

    this._client = client;
  }
}
