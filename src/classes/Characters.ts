import { Client } from '..';
import {
  AniListCharacter,
  AniListFuzzyDate,
  AniListImage,
  AniListMediaConnection,
  AniListName,
} from '../types/aniList';
import { Mutation } from '../util/Mutation';

export class Character implements Omit<AniListCharacter, '_type'> {
  id: number;
  name: AniListName & {
    alternativeSpoiler: string[];
  };
  image: AniListImage;
  description: string;
  gender: string;
  dateOfBirth: AniListFuzzyDate;
  age: string;
  bloodType: string;
  isFavorite?: boolean;
  isFavoriteBlocked?: boolean;
  siteUrl: string;
  media: AniListMediaConnection;
  private _client: Client;

  constructor(client: Client, aniListResponse: AniListCharacter) {
    this.id = aniListResponse.id;
    this.name = aniListResponse.name;
    this.image = aniListResponse.image;
    this.description = aniListResponse.description;
    this.gender = aniListResponse.gender;
    this.dateOfBirth = aniListResponse.dateOfBirth;
    this.age = aniListResponse.age;
    this.bloodType = aniListResponse.bloodType;
    this.isFavorite = aniListResponse.isFavorite;
    this.isFavoriteBlocked = aniListResponse.isFavoriteBlocked;
    this.siteUrl = aniListResponse.siteUrl;
    this.media = aniListResponse.media;

    this._client = client;
  }

  async toggleFavourite(): Promise<boolean | Error> {
    if (!this.id || this._client._apiKey) {
      throw new Error("Character doesn't have ID or authorization");
    }

    const favouriteQuery = new Mutation('favourite', 'character');
    favouriteQuery.setVariables({
      characterId: this.id,
    });

    this._client.fetcher.graphQLClient.request(favouriteQuery.document, favouriteQuery.variables);
    // TODO update here

    return this.isFavorite || false;
  }
}
