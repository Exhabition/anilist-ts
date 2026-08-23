/* eslint-disable */
/** Generated runtime schema metadata. */
export const schemaRuntime = {
  "roots": {
    "query": "Query",
    "mutation": "Mutation"
  },
  "types": {
    "ActivityLikeNotification": {
      "kind": "OBJECT",
      "fields": {
        "id": {
          "type": "Int!",
          "args": {}
        },
        "userId": {
          "type": "Int!",
          "args": {}
        },
        "type": {
          "type": "NotificationType",
          "args": {}
        },
        "activityId": {
          "type": "Int!",
          "args": {}
        },
        "context": {
          "type": "String",
          "args": {}
        },
        "createdAt": {
          "type": "Int",
          "args": {}
        },
        "activity": {
          "type": "ActivityUnion",
          "args": {}
        },
        "user": {
          "type": "User",
          "args": {}
        }
      }
    },
    "ActivityMentionNotification": {
      "kind": "OBJECT",
      "fields": {
        "id": {
          "type": "Int!",
          "args": {}
        },
        "userId": {
          "type": "Int!",
          "args": {}
        },
        "type": {
          "type": "NotificationType",
          "args": {}
        },
        "activityId": {
          "type": "Int!",
          "args": {}
        },
        "context": {
          "type": "String",
          "args": {}
        },
        "createdAt": {
          "type": "Int",
          "args": {}
        },
        "activity": {
          "type": "ActivityUnion",
          "args": {}
        },
        "user": {
          "type": "User",
          "args": {}
        }
      }
    },
    "ActivityMessageNotification": {
      "kind": "OBJECT",
      "fields": {
        "id": {
          "type": "Int!",
          "args": {}
        },
        "userId": {
          "type": "Int!",
          "args": {}
        },
        "type": {
          "type": "NotificationType",
          "args": {}
        },
        "activityId": {
          "type": "Int!",
          "args": {}
        },
        "context": {
          "type": "String",
          "args": {}
        },
        "createdAt": {
          "type": "Int",
          "args": {}
        },
        "message": {
          "type": "MessageActivity",
          "args": {}
        },
        "user": {
          "type": "User",
          "args": {}
        }
      }
    },
    "ActivityReply": {
      "kind": "OBJECT",
      "fields": {
        "id": {
          "type": "Int!",
          "args": {}
        },
        "userId": {
          "type": "Int",
          "args": {}
        },
        "activityId": {
          "type": "Int",
          "args": {}
        },
        "text": {
          "type": "String",
          "args": {
            "asHtml": "Boolean"
          }
        },
        "likeCount": {
          "type": "Int!",
          "args": {}
        },
        "isLiked": {
          "type": "Boolean",
          "args": {}
        },
        "createdAt": {
          "type": "Int!",
          "args": {}
        },
        "user": {
          "type": "User",
          "args": {}
        },
        "likes": {
          "type": "[User]",
          "args": {}
        }
      }
    },
    "ActivityReplyLikeNotification": {
      "kind": "OBJECT",
      "fields": {
        "id": {
          "type": "Int!",
          "args": {}
        },
        "userId": {
          "type": "Int!",
          "args": {}
        },
        "type": {
          "type": "NotificationType",
          "args": {}
        },
        "activityId": {
          "type": "Int!",
          "args": {}
        },
        "context": {
          "type": "String",
          "args": {}
        },
        "createdAt": {
          "type": "Int",
          "args": {}
        },
        "activity": {
          "type": "ActivityUnion",
          "args": {}
        },
        "user": {
          "type": "User",
          "args": {}
        }
      }
    },
    "ActivityReplyNotification": {
      "kind": "OBJECT",
      "fields": {
        "id": {
          "type": "Int!",
          "args": {}
        },
        "userId": {
          "type": "Int!",
          "args": {}
        },
        "type": {
          "type": "NotificationType",
          "args": {}
        },
        "activityId": {
          "type": "Int!",
          "args": {}
        },
        "context": {
          "type": "String",
          "args": {}
        },
        "createdAt": {
          "type": "Int",
          "args": {}
        },
        "activity": {
          "type": "ActivityUnion",
          "args": {}
        },
        "user": {
          "type": "User",
          "args": {}
        }
      }
    },
    "ActivityReplySubscribedNotification": {
      "kind": "OBJECT",
      "fields": {
        "id": {
          "type": "Int!",
          "args": {}
        },
        "userId": {
          "type": "Int!",
          "args": {}
        },
        "type": {
          "type": "NotificationType",
          "args": {}
        },
        "activityId": {
          "type": "Int!",
          "args": {}
        },
        "context": {
          "type": "String",
          "args": {}
        },
        "createdAt": {
          "type": "Int",
          "args": {}
        },
        "activity": {
          "type": "ActivityUnion",
          "args": {}
        },
        "user": {
          "type": "User",
          "args": {}
        }
      }
    },
    "AiringNotification": {
      "kind": "OBJECT",
      "fields": {
        "id": {
          "type": "Int!",
          "args": {}
        },
        "type": {
          "type": "NotificationType",
          "args": {}
        },
        "animeId": {
          "type": "Int!",
          "args": {}
        },
        "episode": {
          "type": "Int!",
          "args": {}
        },
        "contexts": {
          "type": "[String]",
          "args": {}
        },
        "createdAt": {
          "type": "Int",
          "args": {}
        },
        "media": {
          "type": "Media",
          "args": {}
        }
      }
    },
    "AiringProgression": {
      "kind": "OBJECT",
      "fields": {
        "episode": {
          "type": "Float",
          "args": {}
        },
        "score": {
          "type": "Float",
          "args": {}
        },
        "watching": {
          "type": "Int",
          "args": {}
        }
      }
    },
    "AiringSchedule": {
      "kind": "OBJECT",
      "fields": {
        "id": {
          "type": "Int!",
          "args": {}
        },
        "airingAt": {
          "type": "Int!",
          "args": {}
        },
        "timeUntilAiring": {
          "type": "Int!",
          "args": {}
        },
        "episode": {
          "type": "Int!",
          "args": {}
        },
        "mediaId": {
          "type": "Int!",
          "args": {}
        },
        "media": {
          "type": "Media",
          "args": {}
        }
      }
    },
    "AiringScheduleConnection": {
      "kind": "OBJECT",
      "fields": {
        "edges": {
          "type": "[AiringScheduleEdge]",
          "args": {}
        },
        "nodes": {
          "type": "[AiringSchedule]",
          "args": {}
        },
        "pageInfo": {
          "type": "PageInfo",
          "args": {}
        }
      }
    },
    "AiringScheduleEdge": {
      "kind": "OBJECT",
      "fields": {
        "node": {
          "type": "AiringSchedule",
          "args": {}
        },
        "id": {
          "type": "Int",
          "args": {}
        }
      }
    },
    "AniChartUser": {
      "kind": "OBJECT",
      "fields": {
        "user": {
          "type": "User",
          "args": {}
        },
        "settings": {
          "type": "Json",
          "args": {}
        },
        "highlights": {
          "type": "Json",
          "args": {}
        }
      }
    },
    "Character": {
      "kind": "OBJECT",
      "fields": {
        "id": {
          "type": "Int!",
          "args": {}
        },
        "name": {
          "type": "CharacterName",
          "args": {}
        },
        "image": {
          "type": "CharacterImage",
          "args": {}
        },
        "description": {
          "type": "String",
          "args": {
            "asHtml": "Boolean"
          }
        },
        "gender": {
          "type": "String",
          "args": {}
        },
        "dateOfBirth": {
          "type": "FuzzyDate",
          "args": {}
        },
        "age": {
          "type": "String",
          "args": {}
        },
        "bloodType": {
          "type": "String",
          "args": {}
        },
        "isFavourite": {
          "type": "Boolean!",
          "args": {}
        },
        "isFavouriteBlocked": {
          "type": "Boolean!",
          "args": {}
        },
        "siteUrl": {
          "type": "String",
          "args": {}
        },
        "media": {
          "type": "MediaConnection",
          "args": {
            "sort": "[MediaSort]",
            "type": "MediaType",
            "onList": "Boolean",
            "page": "Int",
            "perPage": "Int"
          }
        },
        "updatedAt": {
          "type": "Int",
          "args": {}
        },
        "favourites": {
          "type": "Int",
          "args": {}
        },
        "modNotes": {
          "type": "String",
          "args": {}
        }
      }
    },
    "CharacterConnection": {
      "kind": "OBJECT",
      "fields": {
        "edges": {
          "type": "[CharacterEdge]",
          "args": {}
        },
        "nodes": {
          "type": "[Character]",
          "args": {}
        },
        "pageInfo": {
          "type": "PageInfo",
          "args": {}
        }
      }
    },
    "CharacterEdge": {
      "kind": "OBJECT",
      "fields": {
        "node": {
          "type": "Character",
          "args": {}
        },
        "id": {
          "type": "Int",
          "args": {}
        },
        "role": {
          "type": "CharacterRole",
          "args": {}
        },
        "name": {
          "type": "String",
          "args": {}
        },
        "voiceActors": {
          "type": "[Staff]",
          "args": {
            "language": "StaffLanguage",
            "sort": "[StaffSort]"
          }
        },
        "voiceActorRoles": {
          "type": "[StaffRoleType]",
          "args": {
            "language": "StaffLanguage",
            "sort": "[StaffSort]"
          }
        },
        "media": {
          "type": "[Media]",
          "args": {}
        },
        "favouriteOrder": {
          "type": "Int",
          "args": {}
        }
      }
    },
    "CharacterImage": {
      "kind": "OBJECT",
      "fields": {
        "large": {
          "type": "String",
          "args": {}
        },
        "medium": {
          "type": "String",
          "args": {}
        }
      }
    },
    "CharacterName": {
      "kind": "OBJECT",
      "fields": {
        "first": {
          "type": "String",
          "args": {}
        },
        "middle": {
          "type": "String",
          "args": {}
        },
        "last": {
          "type": "String",
          "args": {}
        },
        "full": {
          "type": "String",
          "args": {}
        },
        "native": {
          "type": "String",
          "args": {}
        },
        "alternative": {
          "type": "[String]",
          "args": {}
        },
        "alternativeSpoiler": {
          "type": "[String]",
          "args": {}
        },
        "userPreferred": {
          "type": "String",
          "args": {}
        }
      }
    },
    "CharacterSubmission": {
      "kind": "OBJECT",
      "fields": {
        "id": {
          "type": "Int!",
          "args": {}
        },
        "character": {
          "type": "Character",
          "args": {}
        },
        "submission": {
          "type": "Character",
          "args": {}
        },
        "submitter": {
          "type": "User",
          "args": {}
        },
        "assignee": {
          "type": "User",
          "args": {}
        },
        "status": {
          "type": "SubmissionStatus",
          "args": {}
        },
        "notes": {
          "type": "String",
          "args": {}
        },
        "source": {
          "type": "String",
          "args": {}
        },
        "locked": {
          "type": "Boolean",
          "args": {}
        },
        "createdAt": {
          "type": "Int",
          "args": {}
        }
      }
    },
    "CharacterSubmissionConnection": {
      "kind": "OBJECT",
      "fields": {
        "edges": {
          "type": "[CharacterSubmissionEdge]",
          "args": {}
        },
        "nodes": {
          "type": "[CharacterSubmission]",
          "args": {}
        },
        "pageInfo": {
          "type": "PageInfo",
          "args": {}
        }
      }
    },
    "CharacterSubmissionEdge": {
      "kind": "OBJECT",
      "fields": {
        "node": {
          "type": "CharacterSubmission",
          "args": {}
        },
        "role": {
          "type": "CharacterRole",
          "args": {}
        },
        "voiceActors": {
          "type": "[Staff]",
          "args": {}
        },
        "submittedVoiceActors": {
          "type": "[StaffSubmission]",
          "args": {}
        }
      }
    },
    "CharacterSubmissionUpdateNotification": {
      "kind": "OBJECT",
      "fields": {
        "id": {
          "type": "Int!",
          "args": {}
        },
        "type": {
          "type": "NotificationType",
          "args": {}
        },
        "contexts": {
          "type": "[String]",
          "args": {}
        },
        "status": {
          "type": "String",
          "args": {}
        },
        "notes": {
          "type": "String",
          "args": {}
        },
        "createdAt": {
          "type": "Int",
          "args": {}
        },
        "character": {
          "type": "Character",
          "args": {}
        }
      }
    },
    "Deleted": {
      "kind": "OBJECT",
      "fields": {
        "deleted": {
          "type": "Boolean",
          "args": {}
        }
      }
    },
    "Favourites": {
      "kind": "OBJECT",
      "fields": {
        "anime": {
          "type": "MediaConnection",
          "args": {
            "page": "Int",
            "perPage": "Int"
          }
        },
        "manga": {
          "type": "MediaConnection",
          "args": {
            "page": "Int",
            "perPage": "Int"
          }
        },
        "characters": {
          "type": "CharacterConnection",
          "args": {
            "page": "Int",
            "perPage": "Int"
          }
        },
        "staff": {
          "type": "StaffConnection",
          "args": {
            "page": "Int",
            "perPage": "Int"
          }
        },
        "studios": {
          "type": "StudioConnection",
          "args": {
            "page": "Int",
            "perPage": "Int"
          }
        }
      }
    },
    "FollowingNotification": {
      "kind": "OBJECT",
      "fields": {
        "id": {
          "type": "Int!",
          "args": {}
        },
        "userId": {
          "type": "Int!",
          "args": {}
        },
        "type": {
          "type": "NotificationType",
          "args": {}
        },
        "context": {
          "type": "String",
          "args": {}
        },
        "createdAt": {
          "type": "Int",
          "args": {}
        },
        "user": {
          "type": "User",
          "args": {}
        }
      }
    },
    "FormatStats": {
      "kind": "OBJECT",
      "fields": {
        "format": {
          "type": "MediaFormat",
          "args": {}
        },
        "amount": {
          "type": "Int",
          "args": {}
        }
      }
    },
    "FuzzyDate": {
      "kind": "OBJECT",
      "fields": {
        "year": {
          "type": "Int",
          "args": {}
        },
        "month": {
          "type": "Int",
          "args": {}
        },
        "day": {
          "type": "Int",
          "args": {}
        }
      }
    },
    "GenreStats": {
      "kind": "OBJECT",
      "fields": {
        "genre": {
          "type": "String",
          "args": {}
        },
        "amount": {
          "type": "Int",
          "args": {}
        },
        "meanScore": {
          "type": "Int",
          "args": {}
        },
        "timeWatched": {
          "type": "Int",
          "args": {}
        }
      }
    },
    "InternalPage": {
      "kind": "OBJECT",
      "fields": {
        "mediaSubmissions": {
          "type": "[MediaSubmission]",
          "args": {
            "mediaId": "Int",
            "submissionId": "Int",
            "userId": "Int",
            "assigneeId": "Int",
            "status": "SubmissionStatus",
            "type": "MediaType",
            "sort": "[SubmissionSort]"
          }
        },
        "characterSubmissions": {
          "type": "[CharacterSubmission]",
          "args": {
            "characterId": "Int",
            "userId": "Int",
            "assigneeId": "Int",
            "status": "SubmissionStatus",
            "sort": "[SubmissionSort]"
          }
        },
        "staffSubmissions": {
          "type": "[StaffSubmission]",
          "args": {
            "staffId": "Int",
            "userId": "Int",
            "assigneeId": "Int",
            "status": "SubmissionStatus",
            "sort": "[SubmissionSort]"
          }
        },
        "revisionHistory": {
          "type": "[RevisionHistory]",
          "args": {
            "userId": "Int",
            "mediaId": "Int",
            "characterId": "Int",
            "staffId": "Int",
            "studioId": "Int"
          }
        },
        "reports": {
          "type": "[Report]",
          "args": {
            "reporterId": "Int",
            "reportedId": "Int"
          }
        },
        "modActions": {
          "type": "[ModAction]",
          "args": {
            "userId": "Int",
            "modId": "Int",
            "modId_not": "Int",
            "modId_in": "[Int]",
            "modId_not_in": "[Int]"
          }
        },
        "userBlockSearch": {
          "type": "[User]",
          "args": {
            "search": "String"
          }
        },
        "pageInfo": {
          "type": "PageInfo",
          "args": {}
        },
        "users": {
          "type": "[User]",
          "args": {
            "id": "Int",
            "name": "String",
            "isModerator": "Boolean",
            "search": "String",
            "sort": "[UserSort]"
          }
        },
        "media": {
          "type": "[Media]",
          "args": {
            "id": "Int",
            "idMal": "Int",
            "startDate": "FuzzyDateInt",
            "endDate": "FuzzyDateInt",
            "season": "MediaSeason",
            "seasonYear": "Int",
            "type": "MediaType",
            "format": "MediaFormat",
            "status": "MediaStatus",
            "episodes": "Int",
            "duration": "Int",
            "chapters": "Int",
            "volumes": "Int",
            "isAdult": "Boolean",
            "genre": "String",
            "tag": "String",
            "minimumTagRank": "Int",
            "tagCategory": "String",
            "onList": "Boolean",
            "licensedBy": "String",
            "licensedById": "Int",
            "averageScore": "Int",
            "popularity": "Int",
            "source": "MediaSource",
            "countryOfOrigin": "CountryCode",
            "isLicensed": "Boolean",
            "search": "String",
            "id_not": "Int",
            "id_in": "[Int]",
            "id_not_in": "[Int]",
            "idMal_not": "Int",
            "idMal_in": "[Int]",
            "idMal_not_in": "[Int]",
            "startDate_greater": "FuzzyDateInt",
            "startDate_lesser": "FuzzyDateInt",
            "startDate_like": "String",
            "endDate_greater": "FuzzyDateInt",
            "endDate_lesser": "FuzzyDateInt",
            "endDate_like": "String",
            "format_in": "[MediaFormat]",
            "format_not": "MediaFormat",
            "format_not_in": "[MediaFormat]",
            "status_in": "[MediaStatus]",
            "status_not": "MediaStatus",
            "status_not_in": "[MediaStatus]",
            "episodes_greater": "Int",
            "episodes_lesser": "Int",
            "duration_greater": "Int",
            "duration_lesser": "Int",
            "chapters_greater": "Int",
            "chapters_lesser": "Int",
            "volumes_greater": "Int",
            "volumes_lesser": "Int",
            "genre_in": "[String]",
            "genre_not_in": "[String]",
            "tag_in": "[String]",
            "tag_not_in": "[String]",
            "tagCategory_in": "[String]",
            "tagCategory_not_in": "[String]",
            "licensedBy_in": "[String]",
            "licensedById_in": "[Int]",
            "averageScore_not": "Int",
            "averageScore_greater": "Int",
            "averageScore_lesser": "Int",
            "popularity_not": "Int",
            "popularity_greater": "Int",
            "popularity_lesser": "Int",
            "source_in": "[MediaSource]",
            "countryOfOrigin_in": "[CountryCode]",
            "countryOfOrigin_not_in": "[CountryCode]",
            "sort": "[MediaSort]"
          }
        },
        "characters": {
          "type": "[Character]",
          "args": {
            "id": "Int",
            "isBirthday": "Boolean",
            "search": "String",
            "id_not": "Int",
            "id_in": "[Int]",
            "id_not_in": "[Int]",
            "sort": "[CharacterSort]"
          }
        },
        "staff": {
          "type": "[Staff]",
          "args": {
            "id": "Int",
            "isBirthday": "Boolean",
            "search": "String",
            "id_not": "Int",
            "id_in": "[Int]",
            "id_not_in": "[Int]",
            "sort": "[StaffSort]"
          }
        },
        "studios": {
          "type": "[Studio]",
          "args": {
            "id": "Int",
            "search": "String",
            "id_not": "Int",
            "id_in": "[Int]",
            "id_not_in": "[Int]",
            "sort": "[StudioSort]"
          }
        },
        "mediaList": {
          "type": "[MediaList]",
          "args": {
            "id": "Int",
            "userId": "Int",
            "userName": "String",
            "type": "MediaType",
            "status": "MediaListStatus",
            "mediaId": "Int",
            "isFollowing": "Boolean",
            "notes": "String",
            "startedAt": "FuzzyDateInt",
            "completedAt": "FuzzyDateInt",
            "compareWithAuthList": "Boolean",
            "userId_in": "[Int]",
            "status_in": "[MediaListStatus]",
            "status_not_in": "[MediaListStatus]",
            "status_not": "MediaListStatus",
            "mediaId_in": "[Int]",
            "mediaId_not_in": "[Int]",
            "notes_like": "String",
            "startedAt_greater": "FuzzyDateInt",
            "startedAt_lesser": "FuzzyDateInt",
            "startedAt_like": "String",
            "completedAt_greater": "FuzzyDateInt",
            "completedAt_lesser": "FuzzyDateInt",
            "completedAt_like": "String",
            "sort": "[MediaListSort]"
          }
        },
        "airingSchedules": {
          "type": "[AiringSchedule]",
          "args": {
            "id": "Int",
            "mediaId": "Int",
            "episode": "Int",
            "airingAt": "Int",
            "notYetAired": "Boolean",
            "id_not": "Int",
            "id_in": "[Int]",
            "id_not_in": "[Int]",
            "mediaId_not": "Int",
            "mediaId_in": "[Int]",
            "mediaId_not_in": "[Int]",
            "episode_not": "Int",
            "episode_in": "[Int]",
            "episode_not_in": "[Int]",
            "episode_greater": "Int",
            "episode_lesser": "Int",
            "airingAt_greater": "Int",
            "airingAt_lesser": "Int",
            "sort": "[AiringSort]"
          }
        },
        "mediaTrends": {
          "type": "[MediaTrend]",
          "args": {
            "mediaId": "Int",
            "date": "Int",
            "trending": "Int",
            "averageScore": "Int",
            "popularity": "Int",
            "episode": "Int",
            "releasing": "Boolean",
            "mediaId_not": "Int",
            "mediaId_in": "[Int]",
            "mediaId_not_in": "[Int]",
            "date_greater": "Int",
            "date_lesser": "Int",
            "trending_greater": "Int",
            "trending_lesser": "Int",
            "trending_not": "Int",
            "averageScore_greater": "Int",
            "averageScore_lesser": "Int",
            "averageScore_not": "Int",
            "popularity_greater": "Int",
            "popularity_lesser": "Int",
            "popularity_not": "Int",
            "episode_greater": "Int",
            "episode_lesser": "Int",
            "episode_not": "Int",
            "sort": "[MediaTrendSort]"
          }
        },
        "notifications": {
          "type": "[NotificationUnion]",
          "args": {
            "type": "NotificationType",
            "resetNotificationCount": "Boolean",
            "type_in": "[NotificationType]"
          }
        },
        "followers": {
          "type": "[User]",
          "args": {
            "userId": "Int!",
            "sort": "[UserSort]"
          }
        },
        "following": {
          "type": "[User]",
          "args": {
            "userId": "Int!",
            "sort": "[UserSort]"
          }
        },
        "activities": {
          "type": "[ActivityUnion]",
          "args": {
            "id": "Int",
            "userId": "Int",
            "messengerId": "Int",
            "mediaId": "Int",
            "type": "ActivityType",
            "isFollowing": "Boolean",
            "hasReplies": "Boolean",
            "hasRepliesOrTypeText": "Boolean",
            "createdAt": "Int",
            "id_not": "Int",
            "id_in": "[Int]",
            "id_not_in": "[Int]",
            "userId_not": "Int",
            "userId_in": "[Int]",
            "userId_not_in": "[Int]",
            "messengerId_not": "Int",
            "messengerId_in": "[Int]",
            "messengerId_not_in": "[Int]",
            "mediaId_not": "Int",
            "mediaId_in": "[Int]",
            "mediaId_not_in": "[Int]",
            "type_not": "ActivityType",
            "type_in": "[ActivityType]",
            "type_not_in": "[ActivityType]",
            "createdAt_greater": "Int",
            "createdAt_lesser": "Int",
            "sort": "[ActivitySort]"
          }
        },
        "activityReplies": {
          "type": "[ActivityReply]",
          "args": {
            "id": "Int",
            "activityId": "Int"
          }
        },
        "threads": {
          "type": "[Thread]",
          "args": {
            "id": "Int",
            "userId": "Int",
            "replyUserId": "Int",
            "subscribed": "Boolean",
            "categoryId": "Int",
            "mediaCategoryId": "Int",
            "search": "String",
            "id_in": "[Int]",
            "sort": "[ThreadSort]"
          }
        },
        "threadComments": {
          "type": "[ThreadComment]",
          "args": {
            "id": "Int",
            "threadId": "Int",
            "userId": "Int",
            "sort": "[ThreadCommentSort]"
          }
        },
        "reviews": {
          "type": "[Review]",
          "args": {
            "id": "Int",
            "mediaId": "Int",
            "userId": "Int",
            "mediaType": "MediaType",
            "sort": "[ReviewSort]"
          }
        },
        "recommendations": {
          "type": "[Recommendation]",
          "args": {
            "id": "Int",
            "mediaId": "Int",
            "mediaRecommendationId": "Int",
            "userId": "Int",
            "rating": "Int",
            "onList": "Boolean",
            "rating_greater": "Int",
            "rating_lesser": "Int",
            "sort": "[RecommendationSort]"
          }
        },
        "likes": {
          "type": "[User]",
          "args": {
            "likeableId": "Int",
            "type": "LikeableType"
          }
        }
      }
    },
    "ListActivity": {
      "kind": "OBJECT",
      "fields": {
        "id": {
          "type": "Int!",
          "args": {}
        },
        "userId": {
          "type": "Int",
          "args": {}
        },
        "type": {
          "type": "ActivityType",
          "args": {}
        },
        "replyCount": {
          "type": "Int!",
          "args": {}
        },
        "status": {
          "type": "String",
          "args": {}
        },
        "progress": {
          "type": "String",
          "args": {}
        },
        "isLocked": {
          "type": "Boolean",
          "args": {}
        },
        "isSubscribed": {
          "type": "Boolean",
          "args": {}
        },
        "likeCount": {
          "type": "Int!",
          "args": {}
        },
        "isLiked": {
          "type": "Boolean",
          "args": {}
        },
        "isPinned": {
          "type": "Boolean",
          "args": {}
        },
        "siteUrl": {
          "type": "String",
          "args": {}
        },
        "createdAt": {
          "type": "Int!",
          "args": {}
        },
        "user": {
          "type": "User",
          "args": {}
        },
        "media": {
          "type": "Media",
          "args": {}
        },
        "replies": {
          "type": "[ActivityReply]",
          "args": {}
        },
        "likes": {
          "type": "[User]",
          "args": {}
        }
      }
    },
    "ListActivityOption": {
      "kind": "OBJECT",
      "fields": {
        "disabled": {
          "type": "Boolean",
          "args": {}
        },
        "type": {
          "type": "MediaListStatus",
          "args": {}
        }
      }
    },
    "ListScoreStats": {
      "kind": "OBJECT",
      "fields": {
        "meanScore": {
          "type": "Int",
          "args": {}
        },
        "standardDeviation": {
          "type": "Int",
          "args": {}
        }
      }
    },
    "Media": {
      "kind": "OBJECT",
      "fields": {
        "id": {
          "type": "Int!",
          "args": {}
        },
        "idMal": {
          "type": "Int",
          "args": {}
        },
        "title": {
          "type": "MediaTitle",
          "args": {}
        },
        "type": {
          "type": "MediaType",
          "args": {}
        },
        "format": {
          "type": "MediaFormat",
          "args": {}
        },
        "status": {
          "type": "MediaStatus",
          "args": {
            "version": "Int"
          }
        },
        "description": {
          "type": "String",
          "args": {
            "asHtml": "Boolean"
          }
        },
        "startDate": {
          "type": "FuzzyDate",
          "args": {}
        },
        "endDate": {
          "type": "FuzzyDate",
          "args": {}
        },
        "season": {
          "type": "MediaSeason",
          "args": {}
        },
        "seasonYear": {
          "type": "Int",
          "args": {}
        },
        "seasonInt": {
          "type": "Int",
          "args": {}
        },
        "episodes": {
          "type": "Int",
          "args": {}
        },
        "duration": {
          "type": "Int",
          "args": {}
        },
        "chapters": {
          "type": "Int",
          "args": {}
        },
        "volumes": {
          "type": "Int",
          "args": {}
        },
        "countryOfOrigin": {
          "type": "CountryCode",
          "args": {}
        },
        "isLicensed": {
          "type": "Boolean",
          "args": {}
        },
        "source": {
          "type": "MediaSource",
          "args": {
            "version": "Int"
          }
        },
        "hashtag": {
          "type": "String",
          "args": {}
        },
        "trailer": {
          "type": "MediaTrailer",
          "args": {}
        },
        "updatedAt": {
          "type": "Int",
          "args": {}
        },
        "coverImage": {
          "type": "MediaCoverImage",
          "args": {}
        },
        "bannerImage": {
          "type": "String",
          "args": {}
        },
        "genres": {
          "type": "[String]",
          "args": {}
        },
        "synonyms": {
          "type": "[String]",
          "args": {}
        },
        "averageScore": {
          "type": "Int",
          "args": {}
        },
        "meanScore": {
          "type": "Int",
          "args": {}
        },
        "popularity": {
          "type": "Int",
          "args": {}
        },
        "isLocked": {
          "type": "Boolean",
          "args": {}
        },
        "trending": {
          "type": "Int",
          "args": {}
        },
        "favourites": {
          "type": "Int",
          "args": {}
        },
        "tags": {
          "type": "[MediaTag]",
          "args": {}
        },
        "relations": {
          "type": "MediaConnection",
          "args": {}
        },
        "characters": {
          "type": "CharacterConnection",
          "args": {
            "sort": "[CharacterSort]",
            "role": "CharacterRole",
            "page": "Int",
            "perPage": "Int"
          }
        },
        "staff": {
          "type": "StaffConnection",
          "args": {
            "sort": "[StaffSort]",
            "page": "Int",
            "perPage": "Int"
          }
        },
        "studios": {
          "type": "StudioConnection",
          "args": {
            "sort": "[StudioSort]",
            "isMain": "Boolean"
          }
        },
        "isFavourite": {
          "type": "Boolean!",
          "args": {}
        },
        "isFavouriteBlocked": {
          "type": "Boolean!",
          "args": {}
        },
        "isAdult": {
          "type": "Boolean",
          "args": {}
        },
        "nextAiringEpisode": {
          "type": "AiringSchedule",
          "args": {}
        },
        "airingSchedule": {
          "type": "AiringScheduleConnection",
          "args": {
            "notYetAired": "Boolean",
            "page": "Int",
            "perPage": "Int"
          }
        },
        "trends": {
          "type": "MediaTrendConnection",
          "args": {
            "sort": "[MediaTrendSort]",
            "releasing": "Boolean",
            "page": "Int",
            "perPage": "Int"
          }
        },
        "externalLinks": {
          "type": "[MediaExternalLink]",
          "args": {}
        },
        "streamingEpisodes": {
          "type": "[MediaStreamingEpisode]",
          "args": {}
        },
        "rankings": {
          "type": "[MediaRank]",
          "args": {}
        },
        "mediaListEntry": {
          "type": "MediaList",
          "args": {}
        },
        "reviews": {
          "type": "ReviewConnection",
          "args": {
            "limit": "Int",
            "sort": "[ReviewSort]",
            "page": "Int",
            "perPage": "Int"
          }
        },
        "recommendations": {
          "type": "RecommendationConnection",
          "args": {
            "sort": "[RecommendationSort]",
            "page": "Int",
            "perPage": "Int"
          }
        },
        "stats": {
          "type": "MediaStats",
          "args": {}
        },
        "siteUrl": {
          "type": "String",
          "args": {}
        },
        "autoCreateForumThread": {
          "type": "Boolean",
          "args": {}
        },
        "isRecommendationBlocked": {
          "type": "Boolean",
          "args": {}
        },
        "isReviewBlocked": {
          "type": "Boolean",
          "args": {}
        },
        "modNotes": {
          "type": "String",
          "args": {}
        }
      }
    },
    "MediaCharacter": {
      "kind": "OBJECT",
      "fields": {
        "id": {
          "type": "Int",
          "args": {}
        },
        "role": {
          "type": "CharacterRole",
          "args": {}
        },
        "roleNotes": {
          "type": "String",
          "args": {}
        },
        "dubGroup": {
          "type": "String",
          "args": {}
        },
        "characterName": {
          "type": "String",
          "args": {}
        },
        "character": {
          "type": "Character",
          "args": {}
        },
        "voiceActor": {
          "type": "Staff",
          "args": {}
        }
      }
    },
    "MediaConnection": {
      "kind": "OBJECT",
      "fields": {
        "edges": {
          "type": "[MediaEdge]",
          "args": {}
        },
        "nodes": {
          "type": "[Media]",
          "args": {}
        },
        "pageInfo": {
          "type": "PageInfo",
          "args": {}
        }
      }
    },
    "MediaCoverImage": {
      "kind": "OBJECT",
      "fields": {
        "extraLarge": {
          "type": "String",
          "args": {}
        },
        "large": {
          "type": "String",
          "args": {}
        },
        "medium": {
          "type": "String",
          "args": {}
        },
        "color": {
          "type": "String",
          "args": {}
        }
      }
    },
    "MediaDataChangeNotification": {
      "kind": "OBJECT",
      "fields": {
        "id": {
          "type": "Int!",
          "args": {}
        },
        "type": {
          "type": "NotificationType",
          "args": {}
        },
        "mediaId": {
          "type": "Int!",
          "args": {}
        },
        "context": {
          "type": "String",
          "args": {}
        },
        "reason": {
          "type": "String",
          "args": {}
        },
        "createdAt": {
          "type": "Int",
          "args": {}
        },
        "media": {
          "type": "Media",
          "args": {}
        }
      }
    },
    "MediaDeletionNotification": {
      "kind": "OBJECT",
      "fields": {
        "id": {
          "type": "Int!",
          "args": {}
        },
        "type": {
          "type": "NotificationType",
          "args": {}
        },
        "deletedMediaTitle": {
          "type": "String",
          "args": {}
        },
        "context": {
          "type": "String",
          "args": {}
        },
        "reason": {
          "type": "String",
          "args": {}
        },
        "createdAt": {
          "type": "Int",
          "args": {}
        }
      }
    },
    "MediaEdge": {
      "kind": "OBJECT",
      "fields": {
        "node": {
          "type": "Media",
          "args": {}
        },
        "id": {
          "type": "Int",
          "args": {}
        },
        "relationType": {
          "type": "MediaRelation",
          "args": {
            "version": "Int"
          }
        },
        "isMainStudio": {
          "type": "Boolean!",
          "args": {}
        },
        "characters": {
          "type": "[Character]",
          "args": {}
        },
        "characterRole": {
          "type": "CharacterRole",
          "args": {}
        },
        "characterName": {
          "type": "String",
          "args": {}
        },
        "roleNotes": {
          "type": "String",
          "args": {}
        },
        "dubGroup": {
          "type": "String",
          "args": {}
        },
        "staffRole": {
          "type": "String",
          "args": {}
        },
        "voiceActors": {
          "type": "[Staff]",
          "args": {
            "language": "StaffLanguage",
            "sort": "[StaffSort]"
          }
        },
        "voiceActorRoles": {
          "type": "[StaffRoleType]",
          "args": {
            "language": "StaffLanguage",
            "sort": "[StaffSort]"
          }
        },
        "favouriteOrder": {
          "type": "Int",
          "args": {}
        }
      }
    },
    "MediaExternalLink": {
      "kind": "OBJECT",
      "fields": {
        "id": {
          "type": "Int!",
          "args": {}
        },
        "url": {
          "type": "String",
          "args": {}
        },
        "site": {
          "type": "String!",
          "args": {}
        },
        "siteId": {
          "type": "Int",
          "args": {}
        },
        "type": {
          "type": "ExternalLinkType",
          "args": {}
        },
        "language": {
          "type": "String",
          "args": {}
        },
        "color": {
          "type": "String",
          "args": {}
        },
        "icon": {
          "type": "String",
          "args": {}
        },
        "notes": {
          "type": "String",
          "args": {}
        },
        "isDisabled": {
          "type": "Boolean",
          "args": {}
        }
      }
    },
    "MediaList": {
      "kind": "OBJECT",
      "fields": {
        "id": {
          "type": "Int!",
          "args": {}
        },
        "userId": {
          "type": "Int!",
          "args": {}
        },
        "mediaId": {
          "type": "Int!",
          "args": {}
        },
        "status": {
          "type": "MediaListStatus",
          "args": {}
        },
        "score": {
          "type": "Float",
          "args": {
            "format": "ScoreFormat"
          }
        },
        "progress": {
          "type": "Int",
          "args": {}
        },
        "progressVolumes": {
          "type": "Int",
          "args": {}
        },
        "repeat": {
          "type": "Int",
          "args": {}
        },
        "priority": {
          "type": "Int",
          "args": {}
        },
        "private": {
          "type": "Boolean",
          "args": {}
        },
        "notes": {
          "type": "String",
          "args": {}
        },
        "hiddenFromStatusLists": {
          "type": "Boolean",
          "args": {}
        },
        "customLists": {
          "type": "Json",
          "args": {
            "asArray": "Boolean"
          }
        },
        "advancedScores": {
          "type": "Json",
          "args": {}
        },
        "startedAt": {
          "type": "FuzzyDate",
          "args": {}
        },
        "completedAt": {
          "type": "FuzzyDate",
          "args": {}
        },
        "updatedAt": {
          "type": "Int",
          "args": {}
        },
        "createdAt": {
          "type": "Int",
          "args": {}
        },
        "media": {
          "type": "Media",
          "args": {}
        },
        "user": {
          "type": "User",
          "args": {}
        }
      }
    },
    "MediaListCollection": {
      "kind": "OBJECT",
      "fields": {
        "lists": {
          "type": "[MediaListGroup]",
          "args": {}
        },
        "user": {
          "type": "User",
          "args": {}
        },
        "hasNextChunk": {
          "type": "Boolean",
          "args": {}
        },
        "statusLists": {
          "type": "[[MediaList]]",
          "args": {
            "asArray": "Boolean"
          }
        },
        "customLists": {
          "type": "[[MediaList]]",
          "args": {
            "asArray": "Boolean"
          }
        }
      }
    },
    "MediaListGroup": {
      "kind": "OBJECT",
      "fields": {
        "entries": {
          "type": "[MediaList]",
          "args": {}
        },
        "name": {
          "type": "String",
          "args": {}
        },
        "isCustomList": {
          "type": "Boolean",
          "args": {}
        },
        "isSplitCompletedList": {
          "type": "Boolean",
          "args": {}
        },
        "status": {
          "type": "MediaListStatus",
          "args": {}
        }
      }
    },
    "MediaListOptions": {
      "kind": "OBJECT",
      "fields": {
        "scoreFormat": {
          "type": "ScoreFormat",
          "args": {}
        },
        "rowOrder": {
          "type": "String",
          "args": {}
        },
        "useLegacyLists": {
          "type": "Boolean",
          "args": {}
        },
        "animeList": {
          "type": "MediaListTypeOptions",
          "args": {}
        },
        "mangaList": {
          "type": "MediaListTypeOptions",
          "args": {}
        },
        "sharedTheme": {
          "type": "Json",
          "args": {}
        },
        "sharedThemeEnabled": {
          "type": "Boolean",
          "args": {}
        }
      }
    },
    "MediaListTypeOptions": {
      "kind": "OBJECT",
      "fields": {
        "sectionOrder": {
          "type": "[String]",
          "args": {}
        },
        "splitCompletedSectionByFormat": {
          "type": "Boolean",
          "args": {}
        },
        "theme": {
          "type": "Json",
          "args": {}
        },
        "customLists": {
          "type": "[String]",
          "args": {}
        },
        "advancedScoring": {
          "type": "[String]",
          "args": {}
        },
        "advancedScoringEnabled": {
          "type": "Boolean",
          "args": {}
        }
      }
    },
    "MediaMergeNotification": {
      "kind": "OBJECT",
      "fields": {
        "id": {
          "type": "Int!",
          "args": {}
        },
        "type": {
          "type": "NotificationType",
          "args": {}
        },
        "mediaId": {
          "type": "Int!",
          "args": {}
        },
        "deletedMediaTitles": {
          "type": "[String]",
          "args": {}
        },
        "context": {
          "type": "String",
          "args": {}
        },
        "reason": {
          "type": "String",
          "args": {}
        },
        "createdAt": {
          "type": "Int",
          "args": {}
        },
        "media": {
          "type": "Media",
          "args": {}
        }
      }
    },
    "MediaRank": {
      "kind": "OBJECT",
      "fields": {
        "id": {
          "type": "Int!",
          "args": {}
        },
        "rank": {
          "type": "Int!",
          "args": {}
        },
        "type": {
          "type": "MediaRankType!",
          "args": {}
        },
        "format": {
          "type": "MediaFormat!",
          "args": {}
        },
        "year": {
          "type": "Int",
          "args": {}
        },
        "season": {
          "type": "MediaSeason",
          "args": {}
        },
        "allTime": {
          "type": "Boolean",
          "args": {}
        },
        "context": {
          "type": "String!",
          "args": {}
        }
      }
    },
    "MediaStats": {
      "kind": "OBJECT",
      "fields": {
        "scoreDistribution": {
          "type": "[ScoreDistribution]",
          "args": {}
        },
        "statusDistribution": {
          "type": "[StatusDistribution]",
          "args": {}
        },
        "airingProgression": {
          "type": "[AiringProgression]",
          "args": {}
        }
      }
    },
    "MediaStreamingEpisode": {
      "kind": "OBJECT",
      "fields": {
        "title": {
          "type": "String",
          "args": {}
        },
        "thumbnail": {
          "type": "String",
          "args": {}
        },
        "url": {
          "type": "String",
          "args": {}
        },
        "site": {
          "type": "String",
          "args": {}
        }
      }
    },
    "MediaSubmission": {
      "kind": "OBJECT",
      "fields": {
        "id": {
          "type": "Int!",
          "args": {}
        },
        "submitter": {
          "type": "User",
          "args": {}
        },
        "assignee": {
          "type": "User",
          "args": {}
        },
        "status": {
          "type": "SubmissionStatus",
          "args": {}
        },
        "submitterStats": {
          "type": "Json",
          "args": {}
        },
        "notes": {
          "type": "String",
          "args": {}
        },
        "source": {
          "type": "String",
          "args": {}
        },
        "changes": {
          "type": "[String]",
          "args": {}
        },
        "locked": {
          "type": "Boolean",
          "args": {}
        },
        "media": {
          "type": "Media",
          "args": {}
        },
        "submission": {
          "type": "Media",
          "args": {}
        },
        "characters": {
          "type": "[MediaSubmissionComparison]",
          "args": {}
        },
        "staff": {
          "type": "[MediaSubmissionComparison]",
          "args": {}
        },
        "studios": {
          "type": "[MediaSubmissionComparison]",
          "args": {}
        },
        "relations": {
          "type": "[MediaEdge]",
          "args": {}
        },
        "externalLinks": {
          "type": "[MediaSubmissionComparison]",
          "args": {}
        },
        "createdAt": {
          "type": "Int",
          "args": {}
        }
      }
    },
    "MediaSubmissionComparison": {
      "kind": "OBJECT",
      "fields": {
        "submission": {
          "type": "MediaSubmissionEdge",
          "args": {}
        },
        "character": {
          "type": "MediaCharacter",
          "args": {}
        },
        "staff": {
          "type": "StaffEdge",
          "args": {}
        },
        "studio": {
          "type": "StudioEdge",
          "args": {}
        },
        "externalLink": {
          "type": "MediaExternalLink",
          "args": {}
        }
      }
    },
    "MediaSubmissionEdge": {
      "kind": "OBJECT",
      "fields": {
        "id": {
          "type": "Int",
          "args": {}
        },
        "characterRole": {
          "type": "CharacterRole",
          "args": {}
        },
        "staffRole": {
          "type": "String",
          "args": {}
        },
        "roleNotes": {
          "type": "String",
          "args": {}
        },
        "dubGroup": {
          "type": "String",
          "args": {}
        },
        "characterName": {
          "type": "String",
          "args": {}
        },
        "isMain": {
          "type": "Boolean",
          "args": {}
        },
        "character": {
          "type": "Character",
          "args": {}
        },
        "characterSubmission": {
          "type": "Character",
          "args": {}
        },
        "voiceActor": {
          "type": "Staff",
          "args": {}
        },
        "voiceActorSubmission": {
          "type": "Staff",
          "args": {}
        },
        "staff": {
          "type": "Staff",
          "args": {}
        },
        "staffSubmission": {
          "type": "Staff",
          "args": {}
        },
        "studio": {
          "type": "Studio",
          "args": {}
        },
        "externalLink": {
          "type": "MediaExternalLink",
          "args": {}
        },
        "media": {
          "type": "Media",
          "args": {}
        }
      }
    },
    "MediaSubmissionUpdateNotification": {
      "kind": "OBJECT",
      "fields": {
        "id": {
          "type": "Int!",
          "args": {}
        },
        "type": {
          "type": "NotificationType",
          "args": {}
        },
        "contexts": {
          "type": "[String]",
          "args": {}
        },
        "status": {
          "type": "String",
          "args": {}
        },
        "notes": {
          "type": "String",
          "args": {}
        },
        "createdAt": {
          "type": "Int",
          "args": {}
        },
        "media": {
          "type": "Media",
          "args": {}
        },
        "submittedTitle": {
          "type": "String",
          "args": {}
        }
      }
    },
    "MediaTag": {
      "kind": "OBJECT",
      "fields": {
        "id": {
          "type": "Int!",
          "args": {}
        },
        "name": {
          "type": "String!",
          "args": {}
        },
        "description": {
          "type": "String",
          "args": {}
        },
        "category": {
          "type": "String",
          "args": {}
        },
        "rank": {
          "type": "Int",
          "args": {}
        },
        "isGeneralSpoiler": {
          "type": "Boolean",
          "args": {}
        },
        "isMediaSpoiler": {
          "type": "Boolean",
          "args": {}
        },
        "isAdult": {
          "type": "Boolean",
          "args": {}
        },
        "userId": {
          "type": "Int",
          "args": {}
        }
      }
    },
    "MediaTitle": {
      "kind": "OBJECT",
      "fields": {
        "romaji": {
          "type": "String",
          "args": {
            "stylised": "Boolean"
          }
        },
        "english": {
          "type": "String",
          "args": {
            "stylised": "Boolean"
          }
        },
        "native": {
          "type": "String",
          "args": {
            "stylised": "Boolean"
          }
        },
        "userPreferred": {
          "type": "String",
          "args": {}
        }
      }
    },
    "MediaTrailer": {
      "kind": "OBJECT",
      "fields": {
        "id": {
          "type": "String",
          "args": {}
        },
        "site": {
          "type": "String",
          "args": {}
        },
        "thumbnail": {
          "type": "String",
          "args": {}
        }
      }
    },
    "MediaTrend": {
      "kind": "OBJECT",
      "fields": {
        "mediaId": {
          "type": "Int!",
          "args": {}
        },
        "date": {
          "type": "Int!",
          "args": {}
        },
        "trending": {
          "type": "Int!",
          "args": {}
        },
        "averageScore": {
          "type": "Int",
          "args": {}
        },
        "popularity": {
          "type": "Int",
          "args": {}
        },
        "inProgress": {
          "type": "Int",
          "args": {}
        },
        "releasing": {
          "type": "Boolean!",
          "args": {}
        },
        "episode": {
          "type": "Int",
          "args": {}
        },
        "media": {
          "type": "Media",
          "args": {}
        }
      }
    },
    "MediaTrendConnection": {
      "kind": "OBJECT",
      "fields": {
        "edges": {
          "type": "[MediaTrendEdge]",
          "args": {}
        },
        "nodes": {
          "type": "[MediaTrend]",
          "args": {}
        },
        "pageInfo": {
          "type": "PageInfo",
          "args": {}
        }
      }
    },
    "MediaTrendEdge": {
      "kind": "OBJECT",
      "fields": {
        "node": {
          "type": "MediaTrend",
          "args": {}
        }
      }
    },
    "MessageActivity": {
      "kind": "OBJECT",
      "fields": {
        "id": {
          "type": "Int!",
          "args": {}
        },
        "recipientId": {
          "type": "Int",
          "args": {}
        },
        "messengerId": {
          "type": "Int",
          "args": {}
        },
        "type": {
          "type": "ActivityType",
          "args": {}
        },
        "replyCount": {
          "type": "Int!",
          "args": {}
        },
        "message": {
          "type": "String",
          "args": {
            "asHtml": "Boolean"
          }
        },
        "isLocked": {
          "type": "Boolean",
          "args": {}
        },
        "isSubscribed": {
          "type": "Boolean",
          "args": {}
        },
        "likeCount": {
          "type": "Int!",
          "args": {}
        },
        "isLiked": {
          "type": "Boolean",
          "args": {}
        },
        "isPinned": {
          "type": "Boolean",
          "args": {}
        },
        "isPrivate": {
          "type": "Boolean",
          "args": {}
        },
        "siteUrl": {
          "type": "String",
          "args": {}
        },
        "createdAt": {
          "type": "Int!",
          "args": {}
        },
        "recipient": {
          "type": "User",
          "args": {}
        },
        "messenger": {
          "type": "User",
          "args": {}
        },
        "replies": {
          "type": "[ActivityReply]",
          "args": {}
        },
        "likes": {
          "type": "[User]",
          "args": {}
        }
      }
    },
    "ModAction": {
      "kind": "OBJECT",
      "fields": {
        "id": {
          "type": "Int!",
          "args": {}
        },
        "user": {
          "type": "User",
          "args": {}
        },
        "mod": {
          "type": "User",
          "args": {}
        },
        "type": {
          "type": "ModActionType",
          "args": {}
        },
        "objectId": {
          "type": "Int",
          "args": {}
        },
        "objectType": {
          "type": "String",
          "args": {}
        },
        "data": {
          "type": "String",
          "args": {}
        },
        "createdAt": {
          "type": "Int!",
          "args": {}
        }
      }
    },
    "Mutation": {
      "kind": "OBJECT",
      "fields": {
        "UpdateUser": {
          "type": "User",
          "args": {
            "about": "String",
            "titleLanguage": "UserTitleLanguage",
            "displayAdultContent": "Boolean",
            "airingNotifications": "Boolean",
            "scoreFormat": "ScoreFormat",
            "rowOrder": "String",
            "profileColor": "String",
            "donatorBadge": "String",
            "notificationOptions": "[NotificationOptionInput]",
            "timezone": "String",
            "activityMergeTime": "Int",
            "animeListOptions": "MediaListOptionsInput",
            "mangaListOptions": "MediaListOptionsInput",
            "staffNameLanguage": "UserStaffNameLanguage",
            "restrictMessagesToFollowing": "Boolean",
            "disabledListActivity": "[ListActivityOptionInput]"
          }
        },
        "SaveMediaListEntry": {
          "type": "MediaList",
          "args": {
            "id": "Int",
            "mediaId": "Int",
            "status": "MediaListStatus",
            "score": "Float",
            "scoreRaw": "Int",
            "progress": "Int",
            "progressVolumes": "Int",
            "repeat": "Int",
            "priority": "Int",
            "private": "Boolean",
            "notes": "String",
            "hiddenFromStatusLists": "Boolean",
            "customLists": "[String]",
            "advancedScores": "[Float]",
            "startedAt": "FuzzyDateInput",
            "completedAt": "FuzzyDateInput"
          }
        },
        "UpdateMediaListEntries": {
          "type": "[MediaList]",
          "args": {
            "status": "MediaListStatus",
            "score": "Float",
            "scoreRaw": "Int",
            "progress": "Int",
            "progressVolumes": "Int",
            "repeat": "Int",
            "priority": "Int",
            "private": "Boolean",
            "notes": "String",
            "hiddenFromStatusLists": "Boolean",
            "advancedScores": "[Float]",
            "startedAt": "FuzzyDateInput",
            "completedAt": "FuzzyDateInput",
            "ids": "[Int]"
          }
        },
        "DeleteMediaListEntry": {
          "type": "Deleted",
          "args": {
            "id": "Int"
          }
        },
        "DeleteCustomList": {
          "type": "Deleted",
          "args": {
            "customList": "String",
            "type": "MediaType"
          }
        },
        "SaveTextActivity": {
          "type": "TextActivity",
          "args": {
            "id": "Int",
            "text": "String",
            "locked": "Boolean"
          }
        },
        "SaveMessageActivity": {
          "type": "MessageActivity",
          "args": {
            "id": "Int",
            "message": "String",
            "recipientId": "Int",
            "private": "Boolean",
            "locked": "Boolean",
            "asMod": "Boolean"
          }
        },
        "SaveListActivity": {
          "type": "ListActivity",
          "args": {
            "id": "Int",
            "locked": "Boolean"
          }
        },
        "DeleteActivity": {
          "type": "Deleted",
          "args": {
            "id": "Int"
          }
        },
        "ToggleActivityPin": {
          "type": "ActivityUnion",
          "args": {
            "id": "Int",
            "pinned": "Boolean"
          }
        },
        "ToggleActivitySubscription": {
          "type": "ActivityUnion",
          "args": {
            "activityId": "Int",
            "subscribe": "Boolean"
          }
        },
        "SaveActivityReply": {
          "type": "ActivityReply",
          "args": {
            "id": "Int",
            "activityId": "Int",
            "text": "String",
            "asMod": "Boolean"
          }
        },
        "DeleteActivityReply": {
          "type": "Deleted",
          "args": {
            "id": "Int"
          }
        },
        "ToggleLike": {
          "type": "[User]",
          "args": {
            "id": "Int",
            "type": "LikeableType"
          }
        },
        "ToggleLikeV2": {
          "type": "LikeableUnion",
          "args": {
            "id": "Int",
            "type": "LikeableType"
          }
        },
        "ToggleFollow": {
          "type": "User",
          "args": {
            "userId": "Int"
          }
        },
        "ToggleFavourite": {
          "type": "Favourites",
          "args": {
            "animeId": "Int",
            "mangaId": "Int",
            "characterId": "Int",
            "staffId": "Int",
            "studioId": "Int"
          }
        },
        "UpdateFavouriteOrder": {
          "type": "Favourites",
          "args": {
            "animeIds": "[Int]",
            "mangaIds": "[Int]",
            "characterIds": "[Int]",
            "staffIds": "[Int]",
            "studioIds": "[Int]",
            "animeOrder": "[Int]",
            "mangaOrder": "[Int]",
            "characterOrder": "[Int]",
            "staffOrder": "[Int]",
            "studioOrder": "[Int]"
          }
        },
        "SaveReview": {
          "type": "Review",
          "args": {
            "id": "Int",
            "mediaId": "Int",
            "body": "String",
            "summary": "String",
            "score": "Int",
            "private": "Boolean"
          }
        },
        "DeleteReview": {
          "type": "Deleted",
          "args": {
            "id": "Int"
          }
        },
        "RateReview": {
          "type": "Review",
          "args": {
            "reviewId": "Int",
            "rating": "ReviewRating"
          }
        },
        "SaveRecommendation": {
          "type": "Recommendation",
          "args": {
            "mediaId": "Int",
            "mediaRecommendationId": "Int",
            "rating": "RecommendationRating"
          }
        },
        "SaveThread": {
          "type": "Thread",
          "args": {
            "id": "Int",
            "title": "String",
            "body": "String",
            "categories": "[Int]",
            "mediaCategories": "[Int]",
            "sticky": "Boolean",
            "locked": "Boolean"
          }
        },
        "DeleteThread": {
          "type": "Deleted",
          "args": {
            "id": "Int"
          }
        },
        "ToggleThreadSubscription": {
          "type": "Thread",
          "args": {
            "threadId": "Int",
            "subscribe": "Boolean"
          }
        },
        "SaveThreadComment": {
          "type": "ThreadComment",
          "args": {
            "id": "Int",
            "threadId": "Int",
            "parentCommentId": "Int",
            "comment": "String",
            "locked": "Boolean"
          }
        },
        "DeleteThreadComment": {
          "type": "Deleted",
          "args": {
            "id": "Int"
          }
        },
        "UpdateAniChartSettings": {
          "type": "Json",
          "args": {
            "titleLanguage": "String",
            "outgoingLinkProvider": "String",
            "theme": "String",
            "sort": "String"
          }
        },
        "UpdateAniChartHighlights": {
          "type": "Json",
          "args": {
            "highlights": "[AniChartHighlightInput]"
          }
        }
      }
    },
    "NotificationOption": {
      "kind": "OBJECT",
      "fields": {
        "type": {
          "type": "NotificationType",
          "args": {}
        },
        "enabled": {
          "type": "Boolean",
          "args": {}
        }
      }
    },
    "Page": {
      "kind": "OBJECT",
      "fields": {
        "pageInfo": {
          "type": "PageInfo",
          "args": {}
        },
        "users": {
          "type": "[User]",
          "args": {
            "id": "Int",
            "name": "String",
            "isModerator": "Boolean",
            "search": "String",
            "sort": "[UserSort]"
          }
        },
        "media": {
          "type": "[Media]",
          "args": {
            "id": "Int",
            "idMal": "Int",
            "startDate": "FuzzyDateInt",
            "endDate": "FuzzyDateInt",
            "season": "MediaSeason",
            "seasonYear": "Int",
            "type": "MediaType",
            "format": "MediaFormat",
            "status": "MediaStatus",
            "episodes": "Int",
            "duration": "Int",
            "chapters": "Int",
            "volumes": "Int",
            "isAdult": "Boolean",
            "genre": "String",
            "tag": "String",
            "minimumTagRank": "Int",
            "tagCategory": "String",
            "onList": "Boolean",
            "licensedBy": "String",
            "licensedById": "Int",
            "averageScore": "Int",
            "popularity": "Int",
            "source": "MediaSource",
            "countryOfOrigin": "CountryCode",
            "isLicensed": "Boolean",
            "search": "String",
            "id_not": "Int",
            "id_in": "[Int]",
            "id_not_in": "[Int]",
            "idMal_not": "Int",
            "idMal_in": "[Int]",
            "idMal_not_in": "[Int]",
            "startDate_greater": "FuzzyDateInt",
            "startDate_lesser": "FuzzyDateInt",
            "startDate_like": "String",
            "endDate_greater": "FuzzyDateInt",
            "endDate_lesser": "FuzzyDateInt",
            "endDate_like": "String",
            "format_in": "[MediaFormat]",
            "format_not": "MediaFormat",
            "format_not_in": "[MediaFormat]",
            "status_in": "[MediaStatus]",
            "status_not": "MediaStatus",
            "status_not_in": "[MediaStatus]",
            "episodes_greater": "Int",
            "episodes_lesser": "Int",
            "duration_greater": "Int",
            "duration_lesser": "Int",
            "chapters_greater": "Int",
            "chapters_lesser": "Int",
            "volumes_greater": "Int",
            "volumes_lesser": "Int",
            "genre_in": "[String]",
            "genre_not_in": "[String]",
            "tag_in": "[String]",
            "tag_not_in": "[String]",
            "tagCategory_in": "[String]",
            "tagCategory_not_in": "[String]",
            "licensedBy_in": "[String]",
            "licensedById_in": "[Int]",
            "averageScore_not": "Int",
            "averageScore_greater": "Int",
            "averageScore_lesser": "Int",
            "popularity_not": "Int",
            "popularity_greater": "Int",
            "popularity_lesser": "Int",
            "source_in": "[MediaSource]",
            "countryOfOrigin_in": "[CountryCode]",
            "countryOfOrigin_not_in": "[CountryCode]",
            "sort": "[MediaSort]"
          }
        },
        "characters": {
          "type": "[Character]",
          "args": {
            "id": "Int",
            "isBirthday": "Boolean",
            "search": "String",
            "id_not": "Int",
            "id_in": "[Int]",
            "id_not_in": "[Int]",
            "sort": "[CharacterSort]"
          }
        },
        "staff": {
          "type": "[Staff]",
          "args": {
            "id": "Int",
            "isBirthday": "Boolean",
            "search": "String",
            "id_not": "Int",
            "id_in": "[Int]",
            "id_not_in": "[Int]",
            "sort": "[StaffSort]"
          }
        },
        "studios": {
          "type": "[Studio]",
          "args": {
            "id": "Int",
            "search": "String",
            "id_not": "Int",
            "id_in": "[Int]",
            "id_not_in": "[Int]",
            "sort": "[StudioSort]"
          }
        },
        "mediaList": {
          "type": "[MediaList]",
          "args": {
            "id": "Int",
            "userId": "Int",
            "userName": "String",
            "type": "MediaType",
            "status": "MediaListStatus",
            "mediaId": "Int",
            "isFollowing": "Boolean",
            "notes": "String",
            "startedAt": "FuzzyDateInt",
            "completedAt": "FuzzyDateInt",
            "compareWithAuthList": "Boolean",
            "userId_in": "[Int]",
            "status_in": "[MediaListStatus]",
            "status_not_in": "[MediaListStatus]",
            "status_not": "MediaListStatus",
            "mediaId_in": "[Int]",
            "mediaId_not_in": "[Int]",
            "notes_like": "String",
            "startedAt_greater": "FuzzyDateInt",
            "startedAt_lesser": "FuzzyDateInt",
            "startedAt_like": "String",
            "completedAt_greater": "FuzzyDateInt",
            "completedAt_lesser": "FuzzyDateInt",
            "completedAt_like": "String",
            "sort": "[MediaListSort]"
          }
        },
        "airingSchedules": {
          "type": "[AiringSchedule]",
          "args": {
            "id": "Int",
            "mediaId": "Int",
            "episode": "Int",
            "airingAt": "Int",
            "notYetAired": "Boolean",
            "id_not": "Int",
            "id_in": "[Int]",
            "id_not_in": "[Int]",
            "mediaId_not": "Int",
            "mediaId_in": "[Int]",
            "mediaId_not_in": "[Int]",
            "episode_not": "Int",
            "episode_in": "[Int]",
            "episode_not_in": "[Int]",
            "episode_greater": "Int",
            "episode_lesser": "Int",
            "airingAt_greater": "Int",
            "airingAt_lesser": "Int",
            "sort": "[AiringSort]"
          }
        },
        "mediaTrends": {
          "type": "[MediaTrend]",
          "args": {
            "mediaId": "Int",
            "date": "Int",
            "trending": "Int",
            "averageScore": "Int",
            "popularity": "Int",
            "episode": "Int",
            "releasing": "Boolean",
            "mediaId_not": "Int",
            "mediaId_in": "[Int]",
            "mediaId_not_in": "[Int]",
            "date_greater": "Int",
            "date_lesser": "Int",
            "trending_greater": "Int",
            "trending_lesser": "Int",
            "trending_not": "Int",
            "averageScore_greater": "Int",
            "averageScore_lesser": "Int",
            "averageScore_not": "Int",
            "popularity_greater": "Int",
            "popularity_lesser": "Int",
            "popularity_not": "Int",
            "episode_greater": "Int",
            "episode_lesser": "Int",
            "episode_not": "Int",
            "sort": "[MediaTrendSort]"
          }
        },
        "notifications": {
          "type": "[NotificationUnion]",
          "args": {
            "type": "NotificationType",
            "resetNotificationCount": "Boolean",
            "type_in": "[NotificationType]"
          }
        },
        "followers": {
          "type": "[User]",
          "args": {
            "userId": "Int!",
            "sort": "[UserSort]"
          }
        },
        "following": {
          "type": "[User]",
          "args": {
            "userId": "Int!",
            "sort": "[UserSort]"
          }
        },
        "activities": {
          "type": "[ActivityUnion]",
          "args": {
            "id": "Int",
            "userId": "Int",
            "messengerId": "Int",
            "mediaId": "Int",
            "type": "ActivityType",
            "isFollowing": "Boolean",
            "hasReplies": "Boolean",
            "hasRepliesOrTypeText": "Boolean",
            "createdAt": "Int",
            "id_not": "Int",
            "id_in": "[Int]",
            "id_not_in": "[Int]",
            "userId_not": "Int",
            "userId_in": "[Int]",
            "userId_not_in": "[Int]",
            "messengerId_not": "Int",
            "messengerId_in": "[Int]",
            "messengerId_not_in": "[Int]",
            "mediaId_not": "Int",
            "mediaId_in": "[Int]",
            "mediaId_not_in": "[Int]",
            "type_not": "ActivityType",
            "type_in": "[ActivityType]",
            "type_not_in": "[ActivityType]",
            "createdAt_greater": "Int",
            "createdAt_lesser": "Int",
            "sort": "[ActivitySort]"
          }
        },
        "activityReplies": {
          "type": "[ActivityReply]",
          "args": {
            "id": "Int",
            "activityId": "Int"
          }
        },
        "threads": {
          "type": "[Thread]",
          "args": {
            "id": "Int",
            "userId": "Int",
            "replyUserId": "Int",
            "subscribed": "Boolean",
            "categoryId": "Int",
            "mediaCategoryId": "Int",
            "search": "String",
            "id_in": "[Int]",
            "sort": "[ThreadSort]"
          }
        },
        "threadComments": {
          "type": "[ThreadComment]",
          "args": {
            "id": "Int",
            "threadId": "Int",
            "userId": "Int",
            "sort": "[ThreadCommentSort]"
          }
        },
        "reviews": {
          "type": "[Review]",
          "args": {
            "id": "Int",
            "mediaId": "Int",
            "userId": "Int",
            "mediaType": "MediaType",
            "sort": "[ReviewSort]"
          }
        },
        "recommendations": {
          "type": "[Recommendation]",
          "args": {
            "id": "Int",
            "mediaId": "Int",
            "mediaRecommendationId": "Int",
            "userId": "Int",
            "rating": "Int",
            "onList": "Boolean",
            "rating_greater": "Int",
            "rating_lesser": "Int",
            "sort": "[RecommendationSort]"
          }
        },
        "likes": {
          "type": "[User]",
          "args": {
            "likeableId": "Int",
            "type": "LikeableType"
          }
        }
      }
    },
    "PageInfo": {
      "kind": "OBJECT",
      "fields": {
        "total": {
          "type": "Int",
          "args": {}
        },
        "perPage": {
          "type": "Int",
          "args": {}
        },
        "currentPage": {
          "type": "Int",
          "args": {}
        },
        "lastPage": {
          "type": "Int",
          "args": {}
        },
        "hasNextPage": {
          "type": "Boolean",
          "args": {}
        }
      }
    },
    "ParsedMarkdown": {
      "kind": "OBJECT",
      "fields": {
        "html": {
          "type": "String",
          "args": {}
        }
      }
    },
    "Query": {
      "kind": "OBJECT",
      "fields": {
        "Page": {
          "type": "Page",
          "args": {
            "page": "Int",
            "perPage": "Int"
          }
        },
        "Media": {
          "type": "Media",
          "args": {
            "id": "Int",
            "idMal": "Int",
            "startDate": "FuzzyDateInt",
            "endDate": "FuzzyDateInt",
            "season": "MediaSeason",
            "seasonYear": "Int",
            "type": "MediaType",
            "format": "MediaFormat",
            "status": "MediaStatus",
            "episodes": "Int",
            "duration": "Int",
            "chapters": "Int",
            "volumes": "Int",
            "isAdult": "Boolean",
            "genre": "String",
            "tag": "String",
            "minimumTagRank": "Int",
            "tagCategory": "String",
            "onList": "Boolean",
            "licensedBy": "String",
            "licensedById": "Int",
            "averageScore": "Int",
            "popularity": "Int",
            "source": "MediaSource",
            "countryOfOrigin": "CountryCode",
            "isLicensed": "Boolean",
            "search": "String",
            "id_not": "Int",
            "id_in": "[Int]",
            "id_not_in": "[Int]",
            "idMal_not": "Int",
            "idMal_in": "[Int]",
            "idMal_not_in": "[Int]",
            "startDate_greater": "FuzzyDateInt",
            "startDate_lesser": "FuzzyDateInt",
            "startDate_like": "String",
            "endDate_greater": "FuzzyDateInt",
            "endDate_lesser": "FuzzyDateInt",
            "endDate_like": "String",
            "format_in": "[MediaFormat]",
            "format_not": "MediaFormat",
            "format_not_in": "[MediaFormat]",
            "status_in": "[MediaStatus]",
            "status_not": "MediaStatus",
            "status_not_in": "[MediaStatus]",
            "episodes_greater": "Int",
            "episodes_lesser": "Int",
            "duration_greater": "Int",
            "duration_lesser": "Int",
            "chapters_greater": "Int",
            "chapters_lesser": "Int",
            "volumes_greater": "Int",
            "volumes_lesser": "Int",
            "genre_in": "[String]",
            "genre_not_in": "[String]",
            "tag_in": "[String]",
            "tag_not_in": "[String]",
            "tagCategory_in": "[String]",
            "tagCategory_not_in": "[String]",
            "licensedBy_in": "[String]",
            "licensedById_in": "[Int]",
            "averageScore_not": "Int",
            "averageScore_greater": "Int",
            "averageScore_lesser": "Int",
            "popularity_not": "Int",
            "popularity_greater": "Int",
            "popularity_lesser": "Int",
            "source_in": "[MediaSource]",
            "countryOfOrigin_in": "[CountryCode]",
            "countryOfOrigin_not_in": "[CountryCode]",
            "sort": "[MediaSort]"
          }
        },
        "MediaTrend": {
          "type": "MediaTrend",
          "args": {
            "mediaId": "Int",
            "date": "Int",
            "trending": "Int",
            "averageScore": "Int",
            "popularity": "Int",
            "episode": "Int",
            "releasing": "Boolean",
            "mediaId_not": "Int",
            "mediaId_in": "[Int]",
            "mediaId_not_in": "[Int]",
            "date_greater": "Int",
            "date_lesser": "Int",
            "trending_greater": "Int",
            "trending_lesser": "Int",
            "trending_not": "Int",
            "averageScore_greater": "Int",
            "averageScore_lesser": "Int",
            "averageScore_not": "Int",
            "popularity_greater": "Int",
            "popularity_lesser": "Int",
            "popularity_not": "Int",
            "episode_greater": "Int",
            "episode_lesser": "Int",
            "episode_not": "Int",
            "sort": "[MediaTrendSort]"
          }
        },
        "AiringSchedule": {
          "type": "AiringSchedule",
          "args": {
            "id": "Int",
            "mediaId": "Int",
            "episode": "Int",
            "airingAt": "Int",
            "notYetAired": "Boolean",
            "id_not": "Int",
            "id_in": "[Int]",
            "id_not_in": "[Int]",
            "mediaId_not": "Int",
            "mediaId_in": "[Int]",
            "mediaId_not_in": "[Int]",
            "episode_not": "Int",
            "episode_in": "[Int]",
            "episode_not_in": "[Int]",
            "episode_greater": "Int",
            "episode_lesser": "Int",
            "airingAt_greater": "Int",
            "airingAt_lesser": "Int",
            "sort": "[AiringSort]"
          }
        },
        "Character": {
          "type": "Character",
          "args": {
            "id": "Int",
            "isBirthday": "Boolean",
            "search": "String",
            "id_not": "Int",
            "id_in": "[Int]",
            "id_not_in": "[Int]",
            "sort": "[CharacterSort]"
          }
        },
        "Staff": {
          "type": "Staff",
          "args": {
            "id": "Int",
            "isBirthday": "Boolean",
            "search": "String",
            "id_not": "Int",
            "id_in": "[Int]",
            "id_not_in": "[Int]",
            "sort": "[StaffSort]"
          }
        },
        "MediaList": {
          "type": "MediaList",
          "args": {
            "id": "Int",
            "userId": "Int",
            "userName": "String",
            "type": "MediaType",
            "status": "MediaListStatus",
            "mediaId": "Int",
            "isFollowing": "Boolean",
            "notes": "String",
            "startedAt": "FuzzyDateInt",
            "completedAt": "FuzzyDateInt",
            "compareWithAuthList": "Boolean",
            "userId_in": "[Int]",
            "status_in": "[MediaListStatus]",
            "status_not_in": "[MediaListStatus]",
            "status_not": "MediaListStatus",
            "mediaId_in": "[Int]",
            "mediaId_not_in": "[Int]",
            "notes_like": "String",
            "startedAt_greater": "FuzzyDateInt",
            "startedAt_lesser": "FuzzyDateInt",
            "startedAt_like": "String",
            "completedAt_greater": "FuzzyDateInt",
            "completedAt_lesser": "FuzzyDateInt",
            "completedAt_like": "String",
            "sort": "[MediaListSort]"
          }
        },
        "MediaListCollection": {
          "type": "MediaListCollection",
          "args": {
            "userId": "Int",
            "userName": "String",
            "type": "MediaType",
            "status": "MediaListStatus",
            "notes": "String",
            "startedAt": "FuzzyDateInt",
            "completedAt": "FuzzyDateInt",
            "forceSingleCompletedList": "Boolean",
            "chunk": "Int",
            "perChunk": "Int",
            "status_in": "[MediaListStatus]",
            "status_not_in": "[MediaListStatus]",
            "status_not": "MediaListStatus",
            "notes_like": "String",
            "startedAt_greater": "FuzzyDateInt",
            "startedAt_lesser": "FuzzyDateInt",
            "startedAt_like": "String",
            "completedAt_greater": "FuzzyDateInt",
            "completedAt_lesser": "FuzzyDateInt",
            "completedAt_like": "String",
            "sort": "[MediaListSort]"
          }
        },
        "GenreCollection": {
          "type": "[String]",
          "args": {}
        },
        "MediaTagCollection": {
          "type": "[MediaTag]",
          "args": {
            "status": "Int"
          }
        },
        "User": {
          "type": "User",
          "args": {
            "id": "Int",
            "name": "String",
            "isModerator": "Boolean",
            "search": "String",
            "sort": "[UserSort]"
          }
        },
        "Viewer": {
          "type": "User",
          "args": {}
        },
        "Notification": {
          "type": "NotificationUnion",
          "args": {
            "type": "NotificationType",
            "resetNotificationCount": "Boolean",
            "type_in": "[NotificationType]"
          }
        },
        "Studio": {
          "type": "Studio",
          "args": {
            "id": "Int",
            "search": "String",
            "id_not": "Int",
            "id_in": "[Int]",
            "id_not_in": "[Int]",
            "sort": "[StudioSort]"
          }
        },
        "Review": {
          "type": "Review",
          "args": {
            "id": "Int",
            "mediaId": "Int",
            "userId": "Int",
            "mediaType": "MediaType",
            "sort": "[ReviewSort]"
          }
        },
        "Activity": {
          "type": "ActivityUnion",
          "args": {
            "id": "Int",
            "userId": "Int",
            "messengerId": "Int",
            "mediaId": "Int",
            "type": "ActivityType",
            "isFollowing": "Boolean",
            "hasReplies": "Boolean",
            "hasRepliesOrTypeText": "Boolean",
            "createdAt": "Int",
            "id_not": "Int",
            "id_in": "[Int]",
            "id_not_in": "[Int]",
            "userId_not": "Int",
            "userId_in": "[Int]",
            "userId_not_in": "[Int]",
            "messengerId_not": "Int",
            "messengerId_in": "[Int]",
            "messengerId_not_in": "[Int]",
            "mediaId_not": "Int",
            "mediaId_in": "[Int]",
            "mediaId_not_in": "[Int]",
            "type_not": "ActivityType",
            "type_in": "[ActivityType]",
            "type_not_in": "[ActivityType]",
            "createdAt_greater": "Int",
            "createdAt_lesser": "Int",
            "sort": "[ActivitySort]"
          }
        },
        "ActivityReply": {
          "type": "ActivityReply",
          "args": {
            "id": "Int",
            "activityId": "Int"
          }
        },
        "Following": {
          "type": "User",
          "args": {
            "userId": "Int!",
            "sort": "[UserSort]"
          }
        },
        "Follower": {
          "type": "User",
          "args": {
            "userId": "Int!",
            "sort": "[UserSort]"
          }
        },
        "Thread": {
          "type": "Thread",
          "args": {
            "id": "Int",
            "userId": "Int",
            "replyUserId": "Int",
            "subscribed": "Boolean",
            "categoryId": "Int",
            "mediaCategoryId": "Int",
            "search": "String",
            "id_in": "[Int]",
            "sort": "[ThreadSort]"
          }
        },
        "ThreadComment": {
          "type": "[ThreadComment]",
          "args": {
            "id": "Int",
            "threadId": "Int",
            "userId": "Int",
            "sort": "[ThreadCommentSort]"
          }
        },
        "Recommendation": {
          "type": "Recommendation",
          "args": {
            "id": "Int",
            "mediaId": "Int",
            "mediaRecommendationId": "Int",
            "userId": "Int",
            "rating": "Int",
            "onList": "Boolean",
            "rating_greater": "Int",
            "rating_lesser": "Int",
            "sort": "[RecommendationSort]"
          }
        },
        "Like": {
          "type": "User",
          "args": {
            "likeableId": "Int",
            "type": "LikeableType"
          }
        },
        "Markdown": {
          "type": "ParsedMarkdown",
          "args": {
            "markdown": "String!"
          }
        },
        "AniChartUser": {
          "type": "AniChartUser",
          "args": {}
        },
        "SiteStatistics": {
          "type": "SiteStatistics",
          "args": {}
        },
        "ExternalLinkSourceCollection": {
          "type": "[MediaExternalLink]",
          "args": {
            "id": "Int",
            "type": "ExternalLinkType",
            "mediaType": "ExternalLinkMediaType"
          }
        }
      }
    },
    "Recommendation": {
      "kind": "OBJECT",
      "fields": {
        "id": {
          "type": "Int!",
          "args": {}
        },
        "rating": {
          "type": "Int",
          "args": {}
        },
        "userRating": {
          "type": "RecommendationRating",
          "args": {}
        },
        "media": {
          "type": "Media",
          "args": {}
        },
        "mediaRecommendation": {
          "type": "Media",
          "args": {}
        },
        "user": {
          "type": "User",
          "args": {}
        }
      }
    },
    "RecommendationConnection": {
      "kind": "OBJECT",
      "fields": {
        "edges": {
          "type": "[RecommendationEdge]",
          "args": {}
        },
        "nodes": {
          "type": "[Recommendation]",
          "args": {}
        },
        "pageInfo": {
          "type": "PageInfo",
          "args": {}
        }
      }
    },
    "RecommendationEdge": {
      "kind": "OBJECT",
      "fields": {
        "node": {
          "type": "Recommendation",
          "args": {}
        }
      }
    },
    "RelatedMediaAdditionNotification": {
      "kind": "OBJECT",
      "fields": {
        "id": {
          "type": "Int!",
          "args": {}
        },
        "type": {
          "type": "NotificationType",
          "args": {}
        },
        "mediaId": {
          "type": "Int!",
          "args": {}
        },
        "context": {
          "type": "String",
          "args": {}
        },
        "createdAt": {
          "type": "Int",
          "args": {}
        },
        "media": {
          "type": "Media",
          "args": {}
        }
      }
    },
    "Report": {
      "kind": "OBJECT",
      "fields": {
        "id": {
          "type": "Int!",
          "args": {}
        },
        "reporter": {
          "type": "User",
          "args": {}
        },
        "reported": {
          "type": "User",
          "args": {}
        },
        "reason": {
          "type": "String",
          "args": {}
        },
        "createdAt": {
          "type": "Int",
          "args": {}
        },
        "cleared": {
          "type": "Boolean",
          "args": {}
        }
      }
    },
    "Review": {
      "kind": "OBJECT",
      "fields": {
        "id": {
          "type": "Int!",
          "args": {}
        },
        "userId": {
          "type": "Int!",
          "args": {}
        },
        "mediaId": {
          "type": "Int!",
          "args": {}
        },
        "mediaType": {
          "type": "MediaType",
          "args": {}
        },
        "summary": {
          "type": "String",
          "args": {}
        },
        "body": {
          "type": "String",
          "args": {
            "asHtml": "Boolean"
          }
        },
        "rating": {
          "type": "Int",
          "args": {}
        },
        "ratingAmount": {
          "type": "Int",
          "args": {}
        },
        "userRating": {
          "type": "ReviewRating",
          "args": {}
        },
        "score": {
          "type": "Int",
          "args": {}
        },
        "private": {
          "type": "Boolean",
          "args": {}
        },
        "siteUrl": {
          "type": "String",
          "args": {}
        },
        "createdAt": {
          "type": "Int!",
          "args": {}
        },
        "updatedAt": {
          "type": "Int!",
          "args": {}
        },
        "user": {
          "type": "User",
          "args": {}
        },
        "media": {
          "type": "Media",
          "args": {}
        }
      }
    },
    "ReviewConnection": {
      "kind": "OBJECT",
      "fields": {
        "edges": {
          "type": "[ReviewEdge]",
          "args": {}
        },
        "nodes": {
          "type": "[Review]",
          "args": {}
        },
        "pageInfo": {
          "type": "PageInfo",
          "args": {}
        }
      }
    },
    "ReviewEdge": {
      "kind": "OBJECT",
      "fields": {
        "node": {
          "type": "Review",
          "args": {}
        }
      }
    },
    "RevisionHistory": {
      "kind": "OBJECT",
      "fields": {
        "id": {
          "type": "Int!",
          "args": {}
        },
        "action": {
          "type": "RevisionHistoryAction",
          "args": {}
        },
        "changes": {
          "type": "Json",
          "args": {}
        },
        "user": {
          "type": "User",
          "args": {}
        },
        "media": {
          "type": "Media",
          "args": {}
        },
        "character": {
          "type": "Character",
          "args": {}
        },
        "staff": {
          "type": "Staff",
          "args": {}
        },
        "studio": {
          "type": "Studio",
          "args": {}
        },
        "externalLink": {
          "type": "MediaExternalLink",
          "args": {}
        },
        "createdAt": {
          "type": "Int",
          "args": {}
        }
      }
    },
    "ScoreDistribution": {
      "kind": "OBJECT",
      "fields": {
        "score": {
          "type": "Int",
          "args": {}
        },
        "amount": {
          "type": "Int",
          "args": {}
        }
      }
    },
    "SiteStatistics": {
      "kind": "OBJECT",
      "fields": {
        "users": {
          "type": "SiteTrendConnection",
          "args": {
            "sort": "[SiteTrendSort]",
            "page": "Int",
            "perPage": "Int"
          }
        },
        "anime": {
          "type": "SiteTrendConnection",
          "args": {
            "sort": "[SiteTrendSort]",
            "page": "Int",
            "perPage": "Int"
          }
        },
        "manga": {
          "type": "SiteTrendConnection",
          "args": {
            "sort": "[SiteTrendSort]",
            "page": "Int",
            "perPage": "Int"
          }
        },
        "characters": {
          "type": "SiteTrendConnection",
          "args": {
            "sort": "[SiteTrendSort]",
            "page": "Int",
            "perPage": "Int"
          }
        },
        "staff": {
          "type": "SiteTrendConnection",
          "args": {
            "sort": "[SiteTrendSort]",
            "page": "Int",
            "perPage": "Int"
          }
        },
        "studios": {
          "type": "SiteTrendConnection",
          "args": {
            "sort": "[SiteTrendSort]",
            "page": "Int",
            "perPage": "Int"
          }
        },
        "reviews": {
          "type": "SiteTrendConnection",
          "args": {
            "sort": "[SiteTrendSort]",
            "page": "Int",
            "perPage": "Int"
          }
        }
      }
    },
    "SiteTrend": {
      "kind": "OBJECT",
      "fields": {
        "date": {
          "type": "Int!",
          "args": {}
        },
        "count": {
          "type": "Int!",
          "args": {}
        },
        "change": {
          "type": "Int!",
          "args": {}
        }
      }
    },
    "SiteTrendConnection": {
      "kind": "OBJECT",
      "fields": {
        "edges": {
          "type": "[SiteTrendEdge]",
          "args": {}
        },
        "nodes": {
          "type": "[SiteTrend]",
          "args": {}
        },
        "pageInfo": {
          "type": "PageInfo",
          "args": {}
        }
      }
    },
    "SiteTrendEdge": {
      "kind": "OBJECT",
      "fields": {
        "node": {
          "type": "SiteTrend",
          "args": {}
        }
      }
    },
    "Staff": {
      "kind": "OBJECT",
      "fields": {
        "id": {
          "type": "Int!",
          "args": {}
        },
        "name": {
          "type": "StaffName",
          "args": {}
        },
        "language": {
          "type": "StaffLanguage",
          "args": {}
        },
        "languageV2": {
          "type": "String",
          "args": {}
        },
        "image": {
          "type": "StaffImage",
          "args": {}
        },
        "description": {
          "type": "String",
          "args": {
            "asHtml": "Boolean"
          }
        },
        "primaryOccupations": {
          "type": "[String]",
          "args": {}
        },
        "gender": {
          "type": "String",
          "args": {}
        },
        "dateOfBirth": {
          "type": "FuzzyDate",
          "args": {}
        },
        "dateOfDeath": {
          "type": "FuzzyDate",
          "args": {}
        },
        "age": {
          "type": "Int",
          "args": {}
        },
        "yearsActive": {
          "type": "[Int]",
          "args": {}
        },
        "homeTown": {
          "type": "String",
          "args": {}
        },
        "bloodType": {
          "type": "String",
          "args": {}
        },
        "isFavourite": {
          "type": "Boolean!",
          "args": {}
        },
        "isFavouriteBlocked": {
          "type": "Boolean!",
          "args": {}
        },
        "siteUrl": {
          "type": "String",
          "args": {}
        },
        "staffMedia": {
          "type": "MediaConnection",
          "args": {
            "sort": "[MediaSort]",
            "type": "MediaType",
            "onList": "Boolean",
            "page": "Int",
            "perPage": "Int"
          }
        },
        "characters": {
          "type": "CharacterConnection",
          "args": {
            "sort": "[CharacterSort]",
            "page": "Int",
            "perPage": "Int"
          }
        },
        "characterMedia": {
          "type": "MediaConnection",
          "args": {
            "sort": "[MediaSort]",
            "onList": "Boolean",
            "page": "Int",
            "perPage": "Int"
          }
        },
        "updatedAt": {
          "type": "Int",
          "args": {}
        },
        "staff": {
          "type": "Staff",
          "args": {}
        },
        "submitter": {
          "type": "User",
          "args": {}
        },
        "submissionStatus": {
          "type": "Int",
          "args": {}
        },
        "submissionNotes": {
          "type": "String",
          "args": {}
        },
        "favourites": {
          "type": "Int",
          "args": {}
        },
        "modNotes": {
          "type": "String",
          "args": {}
        }
      }
    },
    "StaffConnection": {
      "kind": "OBJECT",
      "fields": {
        "edges": {
          "type": "[StaffEdge]",
          "args": {}
        },
        "nodes": {
          "type": "[Staff]",
          "args": {}
        },
        "pageInfo": {
          "type": "PageInfo",
          "args": {}
        }
      }
    },
    "StaffEdge": {
      "kind": "OBJECT",
      "fields": {
        "node": {
          "type": "Staff",
          "args": {}
        },
        "id": {
          "type": "Int",
          "args": {}
        },
        "role": {
          "type": "String",
          "args": {}
        },
        "favouriteOrder": {
          "type": "Int",
          "args": {}
        }
      }
    },
    "StaffImage": {
      "kind": "OBJECT",
      "fields": {
        "large": {
          "type": "String",
          "args": {}
        },
        "medium": {
          "type": "String",
          "args": {}
        }
      }
    },
    "StaffName": {
      "kind": "OBJECT",
      "fields": {
        "first": {
          "type": "String",
          "args": {}
        },
        "middle": {
          "type": "String",
          "args": {}
        },
        "last": {
          "type": "String",
          "args": {}
        },
        "full": {
          "type": "String",
          "args": {}
        },
        "native": {
          "type": "String",
          "args": {}
        },
        "alternative": {
          "type": "[String]",
          "args": {}
        },
        "userPreferred": {
          "type": "String",
          "args": {}
        }
      }
    },
    "StaffRoleType": {
      "kind": "OBJECT",
      "fields": {
        "voiceActor": {
          "type": "Staff",
          "args": {}
        },
        "roleNotes": {
          "type": "String",
          "args": {}
        },
        "dubGroup": {
          "type": "String",
          "args": {}
        }
      }
    },
    "StaffStats": {
      "kind": "OBJECT",
      "fields": {
        "staff": {
          "type": "Staff",
          "args": {}
        },
        "amount": {
          "type": "Int",
          "args": {}
        },
        "meanScore": {
          "type": "Int",
          "args": {}
        },
        "timeWatched": {
          "type": "Int",
          "args": {}
        }
      }
    },
    "StaffSubmission": {
      "kind": "OBJECT",
      "fields": {
        "id": {
          "type": "Int!",
          "args": {}
        },
        "staff": {
          "type": "Staff",
          "args": {}
        },
        "submission": {
          "type": "Staff",
          "args": {}
        },
        "submitter": {
          "type": "User",
          "args": {}
        },
        "assignee": {
          "type": "User",
          "args": {}
        },
        "status": {
          "type": "SubmissionStatus",
          "args": {}
        },
        "notes": {
          "type": "String",
          "args": {}
        },
        "source": {
          "type": "String",
          "args": {}
        },
        "locked": {
          "type": "Boolean",
          "args": {}
        },
        "createdAt": {
          "type": "Int",
          "args": {}
        }
      }
    },
    "StaffSubmissionUpdateNotification": {
      "kind": "OBJECT",
      "fields": {
        "id": {
          "type": "Int!",
          "args": {}
        },
        "type": {
          "type": "NotificationType",
          "args": {}
        },
        "contexts": {
          "type": "[String]",
          "args": {}
        },
        "status": {
          "type": "String",
          "args": {}
        },
        "notes": {
          "type": "String",
          "args": {}
        },
        "createdAt": {
          "type": "Int",
          "args": {}
        },
        "staff": {
          "type": "Staff",
          "args": {}
        }
      }
    },
    "StatusDistribution": {
      "kind": "OBJECT",
      "fields": {
        "status": {
          "type": "MediaListStatus",
          "args": {}
        },
        "amount": {
          "type": "Int",
          "args": {}
        }
      }
    },
    "Studio": {
      "kind": "OBJECT",
      "fields": {
        "id": {
          "type": "Int!",
          "args": {}
        },
        "name": {
          "type": "String!",
          "args": {}
        },
        "isAnimationStudio": {
          "type": "Boolean!",
          "args": {}
        },
        "media": {
          "type": "MediaConnection",
          "args": {
            "sort": "[MediaSort]",
            "isMain": "Boolean",
            "onList": "Boolean",
            "page": "Int",
            "perPage": "Int"
          }
        },
        "siteUrl": {
          "type": "String",
          "args": {}
        },
        "isFavourite": {
          "type": "Boolean!",
          "args": {}
        },
        "favourites": {
          "type": "Int",
          "args": {}
        }
      }
    },
    "StudioConnection": {
      "kind": "OBJECT",
      "fields": {
        "edges": {
          "type": "[StudioEdge]",
          "args": {}
        },
        "nodes": {
          "type": "[Studio]",
          "args": {}
        },
        "pageInfo": {
          "type": "PageInfo",
          "args": {}
        }
      }
    },
    "StudioEdge": {
      "kind": "OBJECT",
      "fields": {
        "node": {
          "type": "Studio",
          "args": {}
        },
        "id": {
          "type": "Int",
          "args": {}
        },
        "isMain": {
          "type": "Boolean!",
          "args": {}
        },
        "favouriteOrder": {
          "type": "Int",
          "args": {}
        }
      }
    },
    "StudioStats": {
      "kind": "OBJECT",
      "fields": {
        "studio": {
          "type": "Studio",
          "args": {}
        },
        "amount": {
          "type": "Int",
          "args": {}
        },
        "meanScore": {
          "type": "Int",
          "args": {}
        },
        "timeWatched": {
          "type": "Int",
          "args": {}
        }
      }
    },
    "TagStats": {
      "kind": "OBJECT",
      "fields": {
        "tag": {
          "type": "MediaTag",
          "args": {}
        },
        "amount": {
          "type": "Int",
          "args": {}
        },
        "meanScore": {
          "type": "Int",
          "args": {}
        },
        "timeWatched": {
          "type": "Int",
          "args": {}
        }
      }
    },
    "TextActivity": {
      "kind": "OBJECT",
      "fields": {
        "id": {
          "type": "Int!",
          "args": {}
        },
        "userId": {
          "type": "Int",
          "args": {}
        },
        "type": {
          "type": "ActivityType",
          "args": {}
        },
        "replyCount": {
          "type": "Int!",
          "args": {}
        },
        "text": {
          "type": "String",
          "args": {
            "asHtml": "Boolean"
          }
        },
        "siteUrl": {
          "type": "String",
          "args": {}
        },
        "isLocked": {
          "type": "Boolean",
          "args": {}
        },
        "isSubscribed": {
          "type": "Boolean",
          "args": {}
        },
        "likeCount": {
          "type": "Int!",
          "args": {}
        },
        "isLiked": {
          "type": "Boolean",
          "args": {}
        },
        "isPinned": {
          "type": "Boolean",
          "args": {}
        },
        "createdAt": {
          "type": "Int!",
          "args": {}
        },
        "user": {
          "type": "User",
          "args": {}
        },
        "replies": {
          "type": "[ActivityReply]",
          "args": {}
        },
        "likes": {
          "type": "[User]",
          "args": {}
        }
      }
    },
    "Thread": {
      "kind": "OBJECT",
      "fields": {
        "id": {
          "type": "Int!",
          "args": {}
        },
        "title": {
          "type": "String",
          "args": {}
        },
        "body": {
          "type": "String",
          "args": {
            "asHtml": "Boolean"
          }
        },
        "userId": {
          "type": "Int!",
          "args": {}
        },
        "replyUserId": {
          "type": "Int",
          "args": {}
        },
        "replyCommentId": {
          "type": "Int",
          "args": {}
        },
        "replyCount": {
          "type": "Int",
          "args": {}
        },
        "viewCount": {
          "type": "Int",
          "args": {}
        },
        "isLocked": {
          "type": "Boolean",
          "args": {}
        },
        "isSticky": {
          "type": "Boolean",
          "args": {}
        },
        "isSubscribed": {
          "type": "Boolean",
          "args": {}
        },
        "likeCount": {
          "type": "Int!",
          "args": {}
        },
        "isLiked": {
          "type": "Boolean",
          "args": {}
        },
        "repliedAt": {
          "type": "Int",
          "args": {}
        },
        "createdAt": {
          "type": "Int!",
          "args": {}
        },
        "updatedAt": {
          "type": "Int!",
          "args": {}
        },
        "user": {
          "type": "User",
          "args": {}
        },
        "replyUser": {
          "type": "User",
          "args": {}
        },
        "likes": {
          "type": "[User]",
          "args": {}
        },
        "siteUrl": {
          "type": "String",
          "args": {}
        },
        "categories": {
          "type": "[ThreadCategory]",
          "args": {}
        },
        "mediaCategories": {
          "type": "[Media]",
          "args": {}
        }
      }
    },
    "ThreadCategory": {
      "kind": "OBJECT",
      "fields": {
        "id": {
          "type": "Int!",
          "args": {}
        },
        "name": {
          "type": "String!",
          "args": {}
        }
      }
    },
    "ThreadComment": {
      "kind": "OBJECT",
      "fields": {
        "id": {
          "type": "Int!",
          "args": {}
        },
        "userId": {
          "type": "Int",
          "args": {}
        },
        "threadId": {
          "type": "Int",
          "args": {}
        },
        "comment": {
          "type": "String",
          "args": {
            "asHtml": "Boolean"
          }
        },
        "likeCount": {
          "type": "Int!",
          "args": {}
        },
        "isLiked": {
          "type": "Boolean",
          "args": {}
        },
        "siteUrl": {
          "type": "String",
          "args": {}
        },
        "createdAt": {
          "type": "Int!",
          "args": {}
        },
        "updatedAt": {
          "type": "Int!",
          "args": {}
        },
        "thread": {
          "type": "Thread",
          "args": {}
        },
        "user": {
          "type": "User",
          "args": {}
        },
        "likes": {
          "type": "[User]",
          "args": {}
        },
        "childComments": {
          "type": "Json",
          "args": {}
        },
        "isLocked": {
          "type": "Boolean",
          "args": {}
        }
      }
    },
    "ThreadCommentLikeNotification": {
      "kind": "OBJECT",
      "fields": {
        "id": {
          "type": "Int!",
          "args": {}
        },
        "userId": {
          "type": "Int!",
          "args": {}
        },
        "type": {
          "type": "NotificationType",
          "args": {}
        },
        "commentId": {
          "type": "Int!",
          "args": {}
        },
        "context": {
          "type": "String",
          "args": {}
        },
        "createdAt": {
          "type": "Int",
          "args": {}
        },
        "thread": {
          "type": "Thread",
          "args": {}
        },
        "comment": {
          "type": "ThreadComment",
          "args": {}
        },
        "user": {
          "type": "User",
          "args": {}
        }
      }
    },
    "ThreadCommentMentionNotification": {
      "kind": "OBJECT",
      "fields": {
        "id": {
          "type": "Int!",
          "args": {}
        },
        "userId": {
          "type": "Int!",
          "args": {}
        },
        "type": {
          "type": "NotificationType",
          "args": {}
        },
        "commentId": {
          "type": "Int!",
          "args": {}
        },
        "context": {
          "type": "String",
          "args": {}
        },
        "createdAt": {
          "type": "Int",
          "args": {}
        },
        "thread": {
          "type": "Thread",
          "args": {}
        },
        "comment": {
          "type": "ThreadComment",
          "args": {}
        },
        "user": {
          "type": "User",
          "args": {}
        }
      }
    },
    "ThreadCommentReplyNotification": {
      "kind": "OBJECT",
      "fields": {
        "id": {
          "type": "Int!",
          "args": {}
        },
        "userId": {
          "type": "Int!",
          "args": {}
        },
        "type": {
          "type": "NotificationType",
          "args": {}
        },
        "commentId": {
          "type": "Int!",
          "args": {}
        },
        "context": {
          "type": "String",
          "args": {}
        },
        "createdAt": {
          "type": "Int",
          "args": {}
        },
        "thread": {
          "type": "Thread",
          "args": {}
        },
        "comment": {
          "type": "ThreadComment",
          "args": {}
        },
        "user": {
          "type": "User",
          "args": {}
        }
      }
    },
    "ThreadCommentSubscribedNotification": {
      "kind": "OBJECT",
      "fields": {
        "id": {
          "type": "Int!",
          "args": {}
        },
        "userId": {
          "type": "Int!",
          "args": {}
        },
        "type": {
          "type": "NotificationType",
          "args": {}
        },
        "commentId": {
          "type": "Int!",
          "args": {}
        },
        "context": {
          "type": "String",
          "args": {}
        },
        "createdAt": {
          "type": "Int",
          "args": {}
        },
        "thread": {
          "type": "Thread",
          "args": {}
        },
        "comment": {
          "type": "ThreadComment",
          "args": {}
        },
        "user": {
          "type": "User",
          "args": {}
        }
      }
    },
    "ThreadLikeNotification": {
      "kind": "OBJECT",
      "fields": {
        "id": {
          "type": "Int!",
          "args": {}
        },
        "userId": {
          "type": "Int!",
          "args": {}
        },
        "type": {
          "type": "NotificationType",
          "args": {}
        },
        "threadId": {
          "type": "Int!",
          "args": {}
        },
        "context": {
          "type": "String",
          "args": {}
        },
        "createdAt": {
          "type": "Int",
          "args": {}
        },
        "thread": {
          "type": "Thread",
          "args": {}
        },
        "comment": {
          "type": "ThreadComment",
          "args": {}
        },
        "user": {
          "type": "User",
          "args": {}
        }
      }
    },
    "User": {
      "kind": "OBJECT",
      "fields": {
        "id": {
          "type": "Int!",
          "args": {}
        },
        "name": {
          "type": "String!",
          "args": {}
        },
        "about": {
          "type": "String",
          "args": {
            "asHtml": "Boolean"
          }
        },
        "avatar": {
          "type": "UserAvatar",
          "args": {}
        },
        "bannerImage": {
          "type": "String",
          "args": {}
        },
        "isFollowing": {
          "type": "Boolean",
          "args": {}
        },
        "isFollower": {
          "type": "Boolean",
          "args": {}
        },
        "isBlocked": {
          "type": "Boolean",
          "args": {}
        },
        "bans": {
          "type": "Json",
          "args": {}
        },
        "options": {
          "type": "UserOptions",
          "args": {}
        },
        "mediaListOptions": {
          "type": "MediaListOptions",
          "args": {}
        },
        "favourites": {
          "type": "Favourites",
          "args": {
            "page": "Int"
          }
        },
        "statistics": {
          "type": "UserStatisticTypes",
          "args": {}
        },
        "unreadNotificationCount": {
          "type": "Int",
          "args": {}
        },
        "siteUrl": {
          "type": "String",
          "args": {}
        },
        "donatorTier": {
          "type": "Int",
          "args": {}
        },
        "donatorBadge": {
          "type": "String",
          "args": {}
        },
        "moderatorRoles": {
          "type": "[ModRole]",
          "args": {}
        },
        "createdAt": {
          "type": "Int",
          "args": {}
        },
        "updatedAt": {
          "type": "Int",
          "args": {}
        },
        "stats": {
          "type": "UserStats",
          "args": {}
        },
        "moderatorStatus": {
          "type": "String",
          "args": {}
        },
        "previousNames": {
          "type": "[UserPreviousName]",
          "args": {}
        }
      }
    },
    "UserActivityHistory": {
      "kind": "OBJECT",
      "fields": {
        "date": {
          "type": "Int",
          "args": {}
        },
        "amount": {
          "type": "Int",
          "args": {}
        },
        "level": {
          "type": "Int",
          "args": {}
        }
      }
    },
    "UserAvatar": {
      "kind": "OBJECT",
      "fields": {
        "large": {
          "type": "String",
          "args": {}
        },
        "medium": {
          "type": "String",
          "args": {}
        }
      }
    },
    "UserCountryStatistic": {
      "kind": "OBJECT",
      "fields": {
        "count": {
          "type": "Int!",
          "args": {}
        },
        "meanScore": {
          "type": "Float!",
          "args": {}
        },
        "minutesWatched": {
          "type": "Int!",
          "args": {}
        },
        "chaptersRead": {
          "type": "Int!",
          "args": {}
        },
        "mediaIds": {
          "type": "[Int]!",
          "args": {}
        },
        "country": {
          "type": "CountryCode",
          "args": {}
        }
      }
    },
    "UserFormatStatistic": {
      "kind": "OBJECT",
      "fields": {
        "count": {
          "type": "Int!",
          "args": {}
        },
        "meanScore": {
          "type": "Float!",
          "args": {}
        },
        "minutesWatched": {
          "type": "Int!",
          "args": {}
        },
        "chaptersRead": {
          "type": "Int!",
          "args": {}
        },
        "mediaIds": {
          "type": "[Int]!",
          "args": {}
        },
        "format": {
          "type": "MediaFormat",
          "args": {}
        }
      }
    },
    "UserGenreStatistic": {
      "kind": "OBJECT",
      "fields": {
        "count": {
          "type": "Int!",
          "args": {}
        },
        "meanScore": {
          "type": "Float!",
          "args": {}
        },
        "minutesWatched": {
          "type": "Int!",
          "args": {}
        },
        "chaptersRead": {
          "type": "Int!",
          "args": {}
        },
        "mediaIds": {
          "type": "[Int]!",
          "args": {}
        },
        "genre": {
          "type": "String",
          "args": {}
        }
      }
    },
    "UserLengthStatistic": {
      "kind": "OBJECT",
      "fields": {
        "count": {
          "type": "Int!",
          "args": {}
        },
        "meanScore": {
          "type": "Float!",
          "args": {}
        },
        "minutesWatched": {
          "type": "Int!",
          "args": {}
        },
        "chaptersRead": {
          "type": "Int!",
          "args": {}
        },
        "mediaIds": {
          "type": "[Int]!",
          "args": {}
        },
        "length": {
          "type": "String",
          "args": {}
        }
      }
    },
    "UserModData": {
      "kind": "OBJECT",
      "fields": {
        "alts": {
          "type": "[User]",
          "args": {}
        },
        "bans": {
          "type": "Json",
          "args": {}
        },
        "ip": {
          "type": "Json",
          "args": {}
        },
        "counts": {
          "type": "Json",
          "args": {}
        },
        "privacy": {
          "type": "Int",
          "args": {}
        },
        "email": {
          "type": "String",
          "args": {}
        }
      }
    },
    "UserOptions": {
      "kind": "OBJECT",
      "fields": {
        "titleLanguage": {
          "type": "UserTitleLanguage",
          "args": {}
        },
        "displayAdultContent": {
          "type": "Boolean",
          "args": {}
        },
        "airingNotifications": {
          "type": "Boolean",
          "args": {}
        },
        "profileColor": {
          "type": "String",
          "args": {}
        },
        "notificationOptions": {
          "type": "[NotificationOption]",
          "args": {}
        },
        "timezone": {
          "type": "String",
          "args": {}
        },
        "activityMergeTime": {
          "type": "Int",
          "args": {}
        },
        "staffNameLanguage": {
          "type": "UserStaffNameLanguage",
          "args": {}
        },
        "restrictMessagesToFollowing": {
          "type": "Boolean",
          "args": {}
        },
        "disabledListActivity": {
          "type": "[ListActivityOption]",
          "args": {}
        }
      }
    },
    "UserPreviousName": {
      "kind": "OBJECT",
      "fields": {
        "name": {
          "type": "String",
          "args": {}
        },
        "createdAt": {
          "type": "Int",
          "args": {}
        },
        "updatedAt": {
          "type": "Int",
          "args": {}
        }
      }
    },
    "UserReleaseYearStatistic": {
      "kind": "OBJECT",
      "fields": {
        "count": {
          "type": "Int!",
          "args": {}
        },
        "meanScore": {
          "type": "Float!",
          "args": {}
        },
        "minutesWatched": {
          "type": "Int!",
          "args": {}
        },
        "chaptersRead": {
          "type": "Int!",
          "args": {}
        },
        "mediaIds": {
          "type": "[Int]!",
          "args": {}
        },
        "releaseYear": {
          "type": "Int",
          "args": {}
        }
      }
    },
    "UserScoreStatistic": {
      "kind": "OBJECT",
      "fields": {
        "count": {
          "type": "Int!",
          "args": {}
        },
        "meanScore": {
          "type": "Float!",
          "args": {}
        },
        "minutesWatched": {
          "type": "Int!",
          "args": {}
        },
        "chaptersRead": {
          "type": "Int!",
          "args": {}
        },
        "mediaIds": {
          "type": "[Int]!",
          "args": {}
        },
        "score": {
          "type": "Int",
          "args": {}
        }
      }
    },
    "UserStaffStatistic": {
      "kind": "OBJECT",
      "fields": {
        "count": {
          "type": "Int!",
          "args": {}
        },
        "meanScore": {
          "type": "Float!",
          "args": {}
        },
        "minutesWatched": {
          "type": "Int!",
          "args": {}
        },
        "chaptersRead": {
          "type": "Int!",
          "args": {}
        },
        "mediaIds": {
          "type": "[Int]!",
          "args": {}
        },
        "staff": {
          "type": "Staff",
          "args": {}
        }
      }
    },
    "UserStartYearStatistic": {
      "kind": "OBJECT",
      "fields": {
        "count": {
          "type": "Int!",
          "args": {}
        },
        "meanScore": {
          "type": "Float!",
          "args": {}
        },
        "minutesWatched": {
          "type": "Int!",
          "args": {}
        },
        "chaptersRead": {
          "type": "Int!",
          "args": {}
        },
        "mediaIds": {
          "type": "[Int]!",
          "args": {}
        },
        "startYear": {
          "type": "Int",
          "args": {}
        }
      }
    },
    "UserStatistics": {
      "kind": "OBJECT",
      "fields": {
        "count": {
          "type": "Int!",
          "args": {}
        },
        "meanScore": {
          "type": "Float!",
          "args": {}
        },
        "standardDeviation": {
          "type": "Float!",
          "args": {}
        },
        "minutesWatched": {
          "type": "Int!",
          "args": {}
        },
        "episodesWatched": {
          "type": "Int!",
          "args": {}
        },
        "chaptersRead": {
          "type": "Int!",
          "args": {}
        },
        "volumesRead": {
          "type": "Int!",
          "args": {}
        },
        "formats": {
          "type": "[UserFormatStatistic]",
          "args": {
            "limit": "Int",
            "sort": "[UserStatisticsSort]"
          }
        },
        "statuses": {
          "type": "[UserStatusStatistic]",
          "args": {
            "limit": "Int",
            "sort": "[UserStatisticsSort]"
          }
        },
        "scores": {
          "type": "[UserScoreStatistic]",
          "args": {
            "limit": "Int",
            "sort": "[UserStatisticsSort]"
          }
        },
        "lengths": {
          "type": "[UserLengthStatistic]",
          "args": {
            "limit": "Int",
            "sort": "[UserStatisticsSort]"
          }
        },
        "releaseYears": {
          "type": "[UserReleaseYearStatistic]",
          "args": {
            "limit": "Int",
            "sort": "[UserStatisticsSort]"
          }
        },
        "startYears": {
          "type": "[UserStartYearStatistic]",
          "args": {
            "limit": "Int",
            "sort": "[UserStatisticsSort]"
          }
        },
        "genres": {
          "type": "[UserGenreStatistic]",
          "args": {
            "limit": "Int",
            "sort": "[UserStatisticsSort]"
          }
        },
        "tags": {
          "type": "[UserTagStatistic]",
          "args": {
            "limit": "Int",
            "sort": "[UserStatisticsSort]"
          }
        },
        "countries": {
          "type": "[UserCountryStatistic]",
          "args": {
            "limit": "Int",
            "sort": "[UserStatisticsSort]"
          }
        },
        "voiceActors": {
          "type": "[UserVoiceActorStatistic]",
          "args": {
            "limit": "Int",
            "sort": "[UserStatisticsSort]"
          }
        },
        "staff": {
          "type": "[UserStaffStatistic]",
          "args": {
            "limit": "Int",
            "sort": "[UserStatisticsSort]"
          }
        },
        "studios": {
          "type": "[UserStudioStatistic]",
          "args": {
            "limit": "Int",
            "sort": "[UserStatisticsSort]"
          }
        }
      }
    },
    "UserStatisticTypes": {
      "kind": "OBJECT",
      "fields": {
        "anime": {
          "type": "UserStatistics",
          "args": {}
        },
        "manga": {
          "type": "UserStatistics",
          "args": {}
        }
      }
    },
    "UserStats": {
      "kind": "OBJECT",
      "fields": {
        "watchedTime": {
          "type": "Int",
          "args": {}
        },
        "chaptersRead": {
          "type": "Int",
          "args": {}
        },
        "activityHistory": {
          "type": "[UserActivityHistory]",
          "args": {}
        },
        "animeStatusDistribution": {
          "type": "[StatusDistribution]",
          "args": {}
        },
        "mangaStatusDistribution": {
          "type": "[StatusDistribution]",
          "args": {}
        },
        "animeScoreDistribution": {
          "type": "[ScoreDistribution]",
          "args": {}
        },
        "mangaScoreDistribution": {
          "type": "[ScoreDistribution]",
          "args": {}
        },
        "animeListScores": {
          "type": "ListScoreStats",
          "args": {}
        },
        "mangaListScores": {
          "type": "ListScoreStats",
          "args": {}
        },
        "favouredGenresOverview": {
          "type": "[GenreStats]",
          "args": {}
        },
        "favouredGenres": {
          "type": "[GenreStats]",
          "args": {}
        },
        "favouredTags": {
          "type": "[TagStats]",
          "args": {}
        },
        "favouredActors": {
          "type": "[StaffStats]",
          "args": {}
        },
        "favouredStaff": {
          "type": "[StaffStats]",
          "args": {}
        },
        "favouredStudios": {
          "type": "[StudioStats]",
          "args": {}
        },
        "favouredYears": {
          "type": "[YearStats]",
          "args": {}
        },
        "favouredFormats": {
          "type": "[FormatStats]",
          "args": {}
        }
      }
    },
    "UserStatusStatistic": {
      "kind": "OBJECT",
      "fields": {
        "count": {
          "type": "Int!",
          "args": {}
        },
        "meanScore": {
          "type": "Float!",
          "args": {}
        },
        "minutesWatched": {
          "type": "Int!",
          "args": {}
        },
        "chaptersRead": {
          "type": "Int!",
          "args": {}
        },
        "mediaIds": {
          "type": "[Int]!",
          "args": {}
        },
        "status": {
          "type": "MediaListStatus",
          "args": {}
        }
      }
    },
    "UserStudioStatistic": {
      "kind": "OBJECT",
      "fields": {
        "count": {
          "type": "Int!",
          "args": {}
        },
        "meanScore": {
          "type": "Float!",
          "args": {}
        },
        "minutesWatched": {
          "type": "Int!",
          "args": {}
        },
        "chaptersRead": {
          "type": "Int!",
          "args": {}
        },
        "mediaIds": {
          "type": "[Int]!",
          "args": {}
        },
        "studio": {
          "type": "Studio",
          "args": {}
        }
      }
    },
    "UserTagStatistic": {
      "kind": "OBJECT",
      "fields": {
        "count": {
          "type": "Int!",
          "args": {}
        },
        "meanScore": {
          "type": "Float!",
          "args": {}
        },
        "minutesWatched": {
          "type": "Int!",
          "args": {}
        },
        "chaptersRead": {
          "type": "Int!",
          "args": {}
        },
        "mediaIds": {
          "type": "[Int]!",
          "args": {}
        },
        "tag": {
          "type": "MediaTag",
          "args": {}
        }
      }
    },
    "UserVoiceActorStatistic": {
      "kind": "OBJECT",
      "fields": {
        "count": {
          "type": "Int!",
          "args": {}
        },
        "meanScore": {
          "type": "Float!",
          "args": {}
        },
        "minutesWatched": {
          "type": "Int!",
          "args": {}
        },
        "chaptersRead": {
          "type": "Int!",
          "args": {}
        },
        "mediaIds": {
          "type": "[Int]!",
          "args": {}
        },
        "voiceActor": {
          "type": "Staff",
          "args": {}
        },
        "characterIds": {
          "type": "[Int]!",
          "args": {}
        }
      }
    },
    "YearStats": {
      "kind": "OBJECT",
      "fields": {
        "year": {
          "type": "Int",
          "args": {}
        },
        "amount": {
          "type": "Int",
          "args": {}
        },
        "meanScore": {
          "type": "Int",
          "args": {}
        }
      }
    },
    "ActivityUnion": {
      "kind": "UNION",
      "members": [
        "TextActivity",
        "ListActivity",
        "MessageActivity"
      ]
    },
    "LikeableUnion": {
      "kind": "UNION",
      "members": [
        "ListActivity",
        "TextActivity",
        "MessageActivity",
        "ActivityReply",
        "Thread",
        "ThreadComment"
      ]
    },
    "NotificationUnion": {
      "kind": "UNION",
      "members": [
        "AiringNotification",
        "FollowingNotification",
        "ActivityMessageNotification",
        "ActivityMentionNotification",
        "ActivityReplyNotification",
        "ActivityReplySubscribedNotification",
        "ActivityLikeNotification",
        "ActivityReplyLikeNotification",
        "ThreadCommentMentionNotification",
        "ThreadCommentReplyNotification",
        "ThreadCommentSubscribedNotification",
        "ThreadCommentLikeNotification",
        "ThreadLikeNotification",
        "RelatedMediaAdditionNotification",
        "MediaDataChangeNotification",
        "MediaMergeNotification",
        "MediaDeletionNotification",
        "MediaSubmissionUpdateNotification",
        "StaffSubmissionUpdateNotification",
        "CharacterSubmissionUpdateNotification"
      ]
    }
  }
} as const;
