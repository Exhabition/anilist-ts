export interface PageInfo {
    total: number;
    currentPage: number;
    lastPage: number;
    hasNextPage: number;
    perPage: number;
}

export type AniListFuzzyDate = {
    year: number
    month: number
    day: number
}

export type AniListImage = {
    large: string
    medium: string
};

export type AniListName = {
    first: string
    middle: string
    last: string
    full: string
    native: string
    alternative: string[]
    userPreferred: string
}

export type AniListMediaConnection = {
    edges: AniListMediaEdge[]
    nodes: AniListMedia[]
    pageInfo: PageInfo
}

export type AniListCharacterConnection = {
    edges: AniListCharacterEdge[]
    nodes: AniListCharacter[]
    pageInfo: PageInfo
}

export interface AniListCharacter {
    _type: "characters",
    id: number;
    name: AniListName & {
        alternativeSpoiler: string[]
    };
    image: AniListImage
    description: string
    gender: string
    dateOfBirth: AniListFuzzyDate
    age: string
    bloodType: string
    isFavorite?: boolean
    isFavoriteBlocked?: boolean
    siteUrl: string
    media: AniListMediaConnection
}

export interface AniListCharacterEdge {
    node: AniListCharacter
    id: number
    role: AniListCharacterRole
    name: string
    voiceActors: AniListStaff[]
    voiceActorRoles: AniListStaffType
    media: AniListMedia[]
    favouriteOrder: number
}

export type AniListCharacterRole = "MAIN" | "SUPPORTING" | "BACKGROUND"

export interface AniListMediaEdge {
    node: AniListMedia[]
    id: number
    relationType: AniListMediaRelation
    isMainStudio?: boolean
    character: AniListCharacter[]
    characterRole: AniListCharacterRole
    roleNotes: string
    dubGroup: string
    staffRole: string
    voiceActors: AniListStaff[]
    voiceActorsRoles: AniListStaffType[]
    favouriteOrder: number
}

export interface AniListStaff {
    id?: number
    name: AniListName
    languageV2: string
    image: AniListImage
    description: string
    primaryOccupations: string[]
    gender: string
    dateOfBirth: AniListFuzzyDate
    // TODO check if optional
    dateOfDeath: AniListFuzzyDate
    age: number
    yearsActive: number[]
    homeTown: string
    bloodType: string
    isFavorite?: boolean
    isFavoriteBlocked?: boolean
    siteUrl: string
    staffMedia: AniListMediaConnection
    characters: AniListCharacterConnection
    characterMedia: AniListMediaConnection
    // TODO is anilist tripping?
    staff: AniListStaff
    submitter: AniListUser
    submissionStatus: number
    submissionNotes: string
    favourites: number
    modNotes: string
}

export type AniListStaffType = {
    voiceActor: AniListStaff
    roleNotes: string
    dubGroup: string
}

export type AniListStaffNameLanguage = "ROMAJI_WESTERN" | "ROMAJI" | "NATIVE"

export interface AniListMedia {
    _type: "media",
    id?: number;
    // TODO check if optional
    idMal: number
    title: AniListMediaTitle;
    description?: string
    type: AniListMediaType
    format: AniListMediaFormat
    status: AniListMediaStatus
    startDate: AniListFuzzyDate
    endDate: AniListFuzzyDate
    season: AniListMediaSeason
    seasonYear: number
    seasonInt: number
    episodes: number
    duration: number
    chapters: number
    volumes: number
    countryOfOrigin: AniListCountryCode
    isLicensed: boolean
    source: AniListMediaSource
    hashtag: string
    trailer: AniListMediaTrailer
    updatedAt: number
    coverImage: AniListImage & {
        extraLarge: string
        color: string
    }
    bannerImage: string
    // TODO extra stuff
}

type AniListCountryCode = `${Uppercase<string>}${Uppercase<string>}`;

export type AniListMediaTitle = {
    romaji: string;
    english: string;
    native: string;
    userPreferred: string;
}

export type AniListMediaTrailer = {
    id: string;
    site: string;
    thumbnail: string;
}


export type AniListMediaType = "ANIME" | "MANGA"

export type AniListMediaFormat = "TV" | "TV_SHORT" | "MOVIE" | "SPECIAL" | "OVA" | "ONA" | "MUSIC" | "MANGA" | "NOVEL" | "ONE_SHOT"

export type AniListMediaStatus = "FINISHED" | "RELEASING" | "NOT_YET_RELEASED" | "CANCELLED" | "HIATUS"

export type AniListMediaSeason = "WINTER" | "SPRING" | "SUMMER" | "FALL"

export type AniListMediaSource = "ORIGINAL" | "MANGA" | "LIGHT_NOVEL" | "VISUAL_NOVEL" | "VIDEO_GAME" | "OTHER" | "NOVEL" | "DOUJINSHI" |
"ANIME" | "WEB_NOVEL" | "LIVE_ACTION" | "GAME" | "COMIC" | "MULTIMEDIA_PROJECT" | "PICTURE_BOOK"

export type AniListMediaRelation = "ADAPTATION" | "PREQUEL" | "SEQUEL" | "PARENT" | "SIDE_STORY" | "CHARACTER" | "SUMMARY" |
    "ALTERNATIVE" | "SPIN_OFF" | "OTHER" | "SOURCE" | "COMPILATION" | "CONTAINS"

export interface AniListResponse {
    Page: {
        pageInfo: PageInfo,
        characters?: AniListCharacter[];
        media?: AniListMedia[];
    }
}

export interface AniListUser {
    id?: number
    name?: string
    about: string
    avatar: AniListImage
    bannerImage: string
    isFollowing: boolean
    isFollower: boolean
    isBlocked: boolean
    bans: JSON
    options: AniListUserOptions
}

export type AniListUserOptions = {
    titleLanguage: AniListTitleLanguage
    displayAdultContent: boolean
    airingNotifications: boolean
    profileColor: string
    notificationsOptions: AniListNotificationOption[]
    timezone: string
    activityMergeTime: number
    staffNameLanguage: AniListStaffNameLanguage
    restrictMessagesToFollowing: boolean
    disabledListActivity: AniListListActivityOption[]
}

export interface AniListListActivityOption {
    disabled: boolean
}

export type AniListNotificationOption = {
    type: AniListNotificationType
    enabled: boolean
}

export type AniListMediaListStatus = "CURRENT" | "PLANNING" | "COMPLETED" | "DROPPED" | "PAUSED" | "REPEATING"

export type AniListNotificationType = "ACTIVITY_MESSAGE" | "ACTIVITY_REPLY" | "FOLLOWING" | "ACTIVITY_MENTION" | "THREAD_COMMENT_MENTION" |
    "THREAD_SUBSCRIBED" | "THREAD_COMMENT_REPLY" | "AIRING" | "ACTIVITY_LIKE" | "ACTIVITY_REPLY_LIKE" | "THREAD_LIKE" | "THREAD_COMMENT_LIKE" |
    "ACTIVITY_REPLY_SUBSCRIBED" | "RELATED_MEDIA_ADDITION" | "MEDIA_DATA_CHANGE" | "MEDIA_MERGE" | "MEDIA_DELETION"

export type AniListTitleLanguage = "ROMAJI" | "ENGLISH" | "NATIVE" | "ROMAJI_STYLISHED" | "ENGLISH_STYLISHED" | "NATIVE_STYLISHED" 