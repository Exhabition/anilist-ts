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
  id!: number;
  name!: AniListName & {
    alternativeSpoiler: string[];
  };
  image!: AniListImage;
  description!: string;
  gender!: string;
  dateOfBirth!: AniListFuzzyDate;
  age!: string;
  bloodType!: string;
  isFavorite?: boolean;
  isFavoriteBlocked?: boolean;
  siteUrl!: string;
  media!: AniListMediaConnection;
  private _client: Client;

  constructor(client: Client, aniListResponse: AniListCharacter) {
    if (aniListResponse.id) this.id = aniListResponse.id;
    if (aniListResponse.name) this.name = aniListResponse.name;
    if (aniListResponse.image) this.image = aniListResponse.image;
    if (aniListResponse.description) this.description = aniListResponse.description;
    if (aniListResponse.gender) this.gender = aniListResponse.gender;
    if (aniListResponse.dateOfBirth) this.dateOfBirth = aniListResponse.dateOfBirth;
    if (aniListResponse.age) this.age = aniListResponse.age;
    if (aniListResponse.bloodType) this.bloodType = aniListResponse.bloodType;
    if (aniListResponse.isFavorite) this.isFavorite = aniListResponse.isFavorite;
    if (aniListResponse.isFavoriteBlocked) this.isFavoriteBlocked = aniListResponse.isFavoriteBlocked;
    if (aniListResponse.siteUrl) this.siteUrl = aniListResponse.siteUrl;
    if (aniListResponse.media) this.media = aniListResponse.media;

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
