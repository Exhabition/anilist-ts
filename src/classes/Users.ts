import { Client } from '..';
import {
  AniListImage,
  AniListUser,
  AniListUserOptions,
} from '../types/aniList';

export class User implements Omit<AniListUser, '_type'> {
  id!: number;
  name!: string;
  about!: string;
  avatar!: AniListImage;
  bannerImage!: string;
  isFollowing!: boolean;
  isFollower!: boolean;
  isBlocked!: boolean;
  bans!: JSON;
  options!: AniListUserOptions;
  private _client: Client;

  constructor(client: Client, aniListResponse: AniListUser) {
    if (aniListResponse.id) this.id = aniListResponse.id;
    if (aniListResponse.name) this.name = aniListResponse.name;
    if (aniListResponse.about) this.about = aniListResponse.about;
    if (aniListResponse.avatar) this.avatar = aniListResponse.avatar;
    if (aniListResponse.bannerImage) this.bannerImage = aniListResponse.bannerImage;
    if (aniListResponse.isFollowing) this.isFollowing = aniListResponse.isFollowing;
    if (aniListResponse.isFollower) this.isFollower = aniListResponse.isFollower;
    if (aniListResponse.isBlocked) this.isBlocked = aniListResponse.isBlocked;
    if (aniListResponse.bans) this.bans = aniListResponse.bans;
    if (aniListResponse.options) this.options = aniListResponse.options;

    this._client = client;
  }
}
