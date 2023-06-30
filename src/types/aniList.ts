import { Character } from "../classes/Characters";
import { Media } from "../classes/Media";
import { Stats } from "../classes/Stats";
import { User } from "../classes/Users";

export interface PageInfo {
  total: number;
  currentPage: number;
  lastPage: number;
  hasNextPage: number;
  perPage: number;
}

export type AniListRequestable = AniListCharacter | AniListMedia | AniListUser | AniListStats;

export type AniListReturnable = Character | Media | User | Stats;

// TODO probably a better way to do this
export type AniListReturnableTypes = typeof Character | typeof Media | typeof User | typeof Stats;

export const allowedQueries = ['characters', 'media', 'users', 'stats'] as const;

export interface AniListResponse {
  Page: {
    pageInfo: PageInfo;
    characters?: AniListCharacter[];
    media?: AniListMedia[];
    users?: AniListUser[];
    stats?: AniListStats[];
  };
}

export type AniListFuzzyDate = {
  year: number;
  month: number;
  day: number;
};

export type AniListImage = {
  large: string;
  medium: string;
};

export type AniListName = {
  first: string;
  middle: string;
  last: string;
  full: string;
  native: string;
  alternative: string[];
  userPreferred: string;
};

export type AniListMediaConnection = {
  edges: AniListMediaEdge[];
  nodes: AniListMedia[];
  pageInfo: PageInfo;
};

export type AniListCharacterConnection = {
  edges: AniListCharacterEdge[];
  nodes: AniListCharacter[];
  pageInfo: PageInfo;
};

export interface AniListCharacter {
  _type: 'characters';
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
  isFavourite?: boolean;
  isFavouriteBlocked?: boolean;
  siteUrl: string;
  media: AniListMediaConnection;
}

export interface AniListCharacterEdge {
  node: AniListCharacter;
  id: number;
  role: AniListCharacterRole;
  name: string;
  voiceActors: AniListStaff[];
  voiceActorRoles: AniListStaffType;
  media: AniListMedia[];
  favouriteOrder: number;
}

export type AniListCharacterRole = 'MAIN' | 'SUPPORTING' | 'BACKGROUND';

export interface AniListMediaEdge {
  node: AniListMedia[];
  id: number;
  relationType: AniListMediaRelation;
  isMainStudio?: boolean;
  character: AniListCharacter[];
  characterRole: AniListCharacterRole;
  roleNotes: string;
  dubGroup: string;
  staffRole: string;
  voiceActors: AniListStaff[];
  voiceActorsRoles: AniListStaffType[];
  favouriteOrder: number;
}

export interface AniListStudio {
  id: number;
  name: string;
  isAnimationStudio: boolean;
  media: AniListMediaConnection;
  siteUrl: string;
  isFavourite: boolean;
  favourites: number;
}

export interface AniListStaff {
  id?: number;
  name: AniListName;
  languageV2: string;
  image: AniListImage;
  description: string;
  primaryOccupations: string[];
  gender: string;
  dateOfBirth: AniListFuzzyDate;
  // TODO check if optional
  dateOfDeath: AniListFuzzyDate;
  age: number;
  yearsActive: number[];
  homeTown: string;
  bloodType: string;
  isFavourite?: boolean;
  isFavouriteBlocked?: boolean;
  siteUrl: string;
  staffMedia: AniListMediaConnection;
  characters: AniListCharacterConnection;
  characterMedia: AniListMediaConnection;
  // TODO is anilist tripping?
  staff: AniListStaff;
  submitter: AniListUser;
  submissionStatus: number;
  submissionNotes: string;
  favourites: number;
  modNotes: string;
}

export type AniListStaffType = {
  voiceActor: AniListStaff;
  roleNotes: string;
  dubGroup: string;
};

export type AniListStaffNameLanguage = 'ROMAJI_WESTERN' | 'ROMAJI' | 'NATIVE';

export interface AniListMedia {
  _type: 'media';
  id?: number;
  // TODO check if optional
  idMal: number;
  title: AniListMediaTitle;
  description?: string;
  type: AniListMediaType;
  format: AniListMediaFormat;
  status: AniListMediaStatus;
  startDate: AniListFuzzyDate;
  endDate: AniListFuzzyDate;
  season: AniListMediaSeason;
  seasonYear: number;
  seasonInt: number;
  episodes: number;
  duration: number;
  chapters: number;
  volumes: number;
  countryOfOrigin: AniListCountryCode;
  isLicensed: boolean;
  source: AniListMediaSource;
  hashtag: string;
  trailer: AniListMediaTrailer;
  updatedAt: number;
  coverImage: AniListImage & {
    extraLarge: string;
    color: string;
  };
  bannerImage: string;
  // TODO extra stuff
}

type AniListCountryCode = `${Uppercase<string>}${Uppercase<string>}`;

export type AniListMediaTitle = {
  romaji: string;
  english: string;
  native: string;
  userPreferred: string;
};

export type AniListMediaTrailer = {
  id: string;
  site: string;
  thumbnail: string;
};

export interface AniListMediaTag {
  id: number;
  name: string;
  description: string;
  category: string;
  rank: number;
  isGeneralSpoiler: boolean;
  isMediaSpoiler: boolean;
  isAdult: boolean;
  userId: number;
}

export type AniListMediaType = 'ANIME' | 'MANGA';

export type AniListMediaFormat =
  | 'TV'
  | 'TV_SHORT'
  | 'MOVIE'
  | 'SPECIAL'
  | 'OVA'
  | 'ONA'
  | 'MUSIC'
  | 'MANGA'
  | 'NOVEL'
  | 'ONE_SHOT';

export type AniListMediaStatus = 'FINISHED' | 'RELEASING' | 'NOT_YET_RELEASED' | 'CANCELLED' | 'HIATUS';

export type AniListMediaSeason = 'WINTER' | 'SPRING' | 'SUMMER' | 'FALL';

export type AniListMediaSource =
  | 'ORIGINAL'
  | 'MANGA'
  | 'LIGHT_NOVEL'
  | 'VISUAL_NOVEL'
  | 'VIDEO_GAME'
  | 'OTHER'
  | 'NOVEL'
  | 'DOUJINSHI'
  | 'ANIME'
  | 'WEB_NOVEL'
  | 'LIVE_ACTION'
  | 'GAME'
  | 'COMIC'
  | 'MULTIMEDIA_PROJECT'
  | 'PICTURE_BOOK';

export type AniListMediaRelation =
  | 'ADAPTATION'
  | 'PREQUEL'
  | 'SEQUEL'
  | 'PARENT'
  | 'SIDE_STORY'
  | 'CHARACTER'
  | 'SUMMARY'
  | 'ALTERNATIVE'
  | 'SPIN_OFF'
  | 'OTHER'
  | 'SOURCE'
  | 'COMPILATION'
  | 'CONTAINS';

export interface AniListStatsShared {
  count: number;
  meanScore: number;
  standardDeviation: number;
  formats: AniListFormatStats[];
  statuses: AniListStatusStats[];
  scores: AniListScoreStats[];
  lengths: AniListLengthStats[];
  releaseYears: AniListReleaseYearStats[];
  startYears: AniListStartYearStats[];
  genres: AniListGenreStats[];
  tags: AniListTagStats[];
  countries: AniListCountryStats[];
  staff: AniListStaffStats[];
  studios: AniListStudioStats[];
}

export interface AniListStats {
  _type: "stats";
  anime: AniListAnimeStats;
  manga: AniListMangaStats;
}

export type AniListAnimeStats = {
  minutesWatched: number;
  episodesWatched: number;
  voiceActors: AniListVoiceActorStats[];
} & AniListStatsShared;

export type AniListMangaStats = {
  chaptersRead: number;
  volumesRead: number;
} & AniListStatsShared;

export interface AniListStatsBase {
  count?: number;
  meanScore?: number;
  minutesWatched?: number;
  chaptersRead?: number;
  mediaIds?: number[];
}

export type AniListFormatStats = {
  format: AniListMediaFormat;
} & AniListStatsBase;

export type AniListStatusStats = {
  status: AniListMediaListStatus;
} & AniListStatsBase;

export type AniListScoreStats = {
  score: number;
} & AniListStatsBase;

export type AniListLengthStats = {
  length: string;
} & AniListStatsBase;

export type AniListReleaseYearStats = {
  releaseYear: number;
} & AniListStatsBase;

export type AniListStartYearStats = {
  startYear: number;
} & AniListStatsBase;

export type AniListGenreStats = {
  genre: string;
} & AniListStatsBase;

export type AniListTagStats = {
  tag: AniListMediaTag;
} & AniListStatsBase;

export type AniListCountryStats = {
  country: AniListCountryCode;
} & AniListStatsBase;

export type AniListVoiceActorStats = {
  voiceActor: AniListStaff;
  characterIds?: number[];
} & AniListStatsBase;

export type AniListStaffStats = {
  staff: AniListStaff;
} & AniListStatsBase;

export type AniListStudioStats = {
  studio: AniListStudio
} & AniListStatsBase;

export interface AniListUserActivity {
  date: number;
  amount: number;
  level: number;
}

export interface AniListUser {
  _type: "users";
  id?: number;
  name?: string;
  about: string;
  avatar: AniListImage;
  bannerImage: string;
  isFollowing: boolean;
  isFollower: boolean;
  isBlocked: boolean;
  bans: JSON;
  options: AniListUserOptions;
}

export type AniListUserOptions = {
  titleLanguage: AniListTitleLanguage;
  displayAdultContent: boolean;
  airingNotifications: boolean;
  profileColor: string;
  notificationsOptions: AniListNotificationOption[];
  timezone: string;
  activityMergeTime: number;
  staffNameLanguage: AniListStaffNameLanguage;
  restrictMessagesToFollowing: boolean;
  disabledListActivity: AniListListActivityOption[];
};

export interface AniListListActivityOption {
  disabled: boolean;
}

export type AniListNotificationOption = {
  type: AniListNotificationType;
  enabled: boolean;
};

export type AniListMediaListStatus = 'CURRENT' | 'PLANNING' | 'COMPLETED' | 'DROPPED' | 'PAUSED' | 'REPEATING';

export type AniListNotificationType =
  | 'ACTIVITY_MESSAGE'
  | 'ACTIVITY_REPLY'
  | 'FOLLOWING'
  | 'ACTIVITY_MENTION'
  | 'THREAD_COMMENT_MENTION'
  | 'THREAD_SUBSCRIBED'
  | 'THREAD_COMMENT_REPLY'
  | 'AIRING'
  | 'ACTIVITY_LIKE'
  | 'ACTIVITY_REPLY_LIKE'
  | 'THREAD_LIKE'
  | 'THREAD_COMMENT_LIKE'
  | 'ACTIVITY_REPLY_SUBSCRIBED'
  | 'RELATED_MEDIA_ADDITION'
  | 'MEDIA_DATA_CHANGE'
  | 'MEDIA_MERGE'
  | 'MEDIA_DELETION';

export type AniListTitleLanguage =
  | 'ROMAJI'
  | 'ENGLISH'
  | 'NATIVE'
  | 'ROMAJI_STYLISHED'
  | 'ENGLISH_STYLISHED'
  | 'NATIVE_STYLISHED';
