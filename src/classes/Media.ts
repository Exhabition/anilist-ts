import { Client } from '../index';
import { AniListMedia } from '../types/aniList';

export class Media {
  id?: number;
  private _client: Client;

  constructor(client: Client, aniListResponse: AniListMedia) {
    if (aniListResponse.id) this.id = aniListResponse.id;

    this._client = client;
  }
}
