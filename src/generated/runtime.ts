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
        "activity": {
          "type": "ActivityUnion",
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
        "id": {
          "type": "Int!",
          "args": {}
        },
        "type": {
          "type": "NotificationType",
          "args": {}
        },
        "user": {
          "type": "User",
          "args": {}
        },
        "userId": {
          "type": "Int!",
          "args": {}
        }
      }
    },
    "ActivityMentionNotification": {
      "kind": "OBJECT",
      "fields": {
        "activity": {
          "type": "ActivityUnion",
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
        "id": {
          "type": "Int!",
          "args": {}
        },
        "type": {
          "type": "NotificationType",
          "args": {}
        },
        "user": {
          "type": "User",
          "args": {}
        },
        "userId": {
          "type": "Int!",
          "args": {}
        }
      }
    },
    "ActivityMessageNotification": {
      "kind": "OBJECT",
      "fields": {
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
        "id": {
          "type": "Int!",
          "args": {}
        },
        "message": {
          "type": "MessageActivity",
          "args": {}
        },
        "type": {
          "type": "NotificationType",
          "args": {}
        },
        "user": {
          "type": "User",
          "args": {}
        },
        "userId": {
          "type": "Int!",
          "args": {}
        }
      }
    },
    "ActivityReply": {
      "kind": "OBJECT",
      "fields": {
        "activityId": {
          "type": "Int",
          "args": {}
        },
        "createdAt": {
          "type": "Int!",
          "args": {}
        },
        "id": {
          "type": "Int!",
          "args": {}
        },
        "isLiked": {
          "type": "Boolean",
          "args": {}
        },
        "likeCount": {
          "type": "Int!",
          "args": {}
        },
        "likes": {
          "type": "[User]",
          "args": {}
        },
        "text": {
          "type": "String",
          "args": {
            "asHtml": "Boolean"
          }
        },
        "user": {
          "type": "User",
          "args": {}
        },
        "userId": {
          "type": "Int",
          "args": {}
        }
      }
    },
    "ActivityReplyLikeNotification": {
      "kind": "OBJECT",
      "fields": {
        "activity": {
          "type": "ActivityUnion",
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
        "id": {
          "type": "Int!",
          "args": {}
        },
        "type": {
          "type": "NotificationType",
          "args": {}
        },
        "user": {
          "type": "User",
          "args": {}
        },
        "userId": {
          "type": "Int!",
          "args": {}
        }
      }
    },
    "ActivityReplyNotification": {
      "kind": "OBJECT",
      "fields": {
        "activity": {
          "type": "ActivityUnion",
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
        "id": {
          "type": "Int!",
          "args": {}
        },
        "type": {
          "type": "NotificationType",
          "args": {}
        },
        "user": {
          "type": "User",
          "args": {}
        },
        "userId": {
          "type": "Int!",
          "args": {}
        }
      }
    },
    "ActivityReplySubscribedNotification": {
      "kind": "OBJECT",
      "fields": {
        "activity": {
          "type": "ActivityUnion",
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
        "id": {
          "type": "Int!",
          "args": {}
        },
        "type": {
          "type": "NotificationType",
          "args": {}
        },
        "user": {
          "type": "User",
          "args": {}
        },
        "userId": {
          "type": "Int!",
          "args": {}
        }
      }
    },
    "AiringNotification": {
      "kind": "OBJECT",
      "fields": {
        "animeId": {
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
        "episode": {
          "type": "Int!",
          "args": {}
        },
        "id": {
          "type": "Int!",
          "args": {}
        },
        "media": {
          "type": "Media",
          "args": {}
        },
        "type": {
          "type": "NotificationType",
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
        "airingAt": {
          "type": "Int!",
          "args": {}
        },
        "episode": {
          "type": "Int!",
          "args": {}
        },
        "id": {
          "type": "Int!",
          "args": {}
        },
        "media": {
          "type": "Media",
          "args": {}
        },
        "mediaId": {
          "type": "Int!",
          "args": {}
        },
        "timeUntilAiring": {
          "type": "Int!",
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
        "id": {
          "type": "Int",
          "args": {}
        },
        "node": {
          "type": "AiringSchedule",
          "args": {}
        }
      }
    },
    "AniChartUser": {
      "kind": "OBJECT",
      "fields": {
        "highlights": {
          "type": "Json",
          "args": {}
        },
        "settings": {
          "type": "Json",
          "args": {}
        },
        "user": {
          "type": "User",
          "args": {}
        }
      }
    },
    "Character": {
      "kind": "OBJECT",
      "fields": {
        "age": {
          "type": "String",
          "args": {}
        },
        "bloodType": {
          "type": "String",
          "args": {}
        },
        "dateOfBirth": {
          "type": "FuzzyDate",
          "args": {}
        },
        "description": {
          "type": "String",
          "args": {
            "asHtml": "Boolean"
          }
        },
        "favourites": {
          "type": "Int",
          "args": {}
        },
        "gender": {
          "type": "String",
          "args": {}
        },
        "id": {
          "type": "Int!",
          "args": {}
        },
        "image": {
          "type": "CharacterImage",
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
        "media": {
          "type": "MediaConnection",
          "args": {
            "onList": "Boolean",
            "page": "Int",
            "perPage": "Int",
            "sort": "[MediaSort]",
            "type": "MediaType"
          }
        },
        "modNotes": {
          "type": "String",
          "args": {}
        },
        "name": {
          "type": "CharacterName",
          "args": {}
        },
        "siteUrl": {
          "type": "String",
          "args": {}
        },
        "updatedAt": {
          "type": "Int",
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
        "favouriteOrder": {
          "type": "Int",
          "args": {}
        },
        "id": {
          "type": "Int",
          "args": {}
        },
        "media": {
          "type": "[Media]",
          "args": {}
        },
        "name": {
          "type": "String",
          "args": {}
        },
        "node": {
          "type": "Character",
          "args": {}
        },
        "role": {
          "type": "CharacterRole",
          "args": {}
        },
        "voiceActorRoles": {
          "type": "[StaffRoleType]",
          "args": {
            "language": "StaffLanguage",
            "sort": "[StaffSort]"
          }
        },
        "voiceActors": {
          "type": "[Staff]",
          "args": {
            "language": "StaffLanguage",
            "sort": "[StaffSort]"
          }
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
        "alternative": {
          "type": "[String]",
          "args": {}
        },
        "alternativeSpoiler": {
          "type": "[String]",
          "args": {}
        },
        "first": {
          "type": "String",
          "args": {}
        },
        "full": {
          "type": "String",
          "args": {}
        },
        "last": {
          "type": "String",
          "args": {}
        },
        "middle": {
          "type": "String",
          "args": {}
        },
        "native": {
          "type": "String",
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
        "assignee": {
          "type": "User",
          "args": {}
        },
        "character": {
          "type": "Character",
          "args": {}
        },
        "createdAt": {
          "type": "Int",
          "args": {}
        },
        "id": {
          "type": "Int!",
          "args": {}
        },
        "locked": {
          "type": "Boolean",
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
        "status": {
          "type": "SubmissionStatus",
          "args": {}
        },
        "submission": {
          "type": "Character",
          "args": {}
        },
        "submitter": {
          "type": "User",
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
        "submittedVoiceActors": {
          "type": "[StaffSubmission]",
          "args": {}
        },
        "voiceActors": {
          "type": "[Staff]",
          "args": {}
        }
      }
    },
    "CharacterSubmissionUpdateNotification": {
      "kind": "OBJECT",
      "fields": {
        "character": {
          "type": "Character",
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
        "id": {
          "type": "Int!",
          "args": {}
        },
        "notes": {
          "type": "String",
          "args": {}
        },
        "status": {
          "type": "String",
          "args": {}
        },
        "type": {
          "type": "NotificationType",
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
        "characters": {
          "type": "CharacterConnection",
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
        "context": {
          "type": "String",
          "args": {}
        },
        "createdAt": {
          "type": "Int",
          "args": {}
        },
        "id": {
          "type": "Int!",
          "args": {}
        },
        "type": {
          "type": "NotificationType",
          "args": {}
        },
        "user": {
          "type": "User",
          "args": {}
        },
        "userId": {
          "type": "Int!",
          "args": {}
        }
      }
    },
    "FormatStats": {
      "kind": "OBJECT",
      "fields": {
        "amount": {
          "type": "Int",
          "args": {}
        },
        "format": {
          "type": "MediaFormat",
          "args": {}
        }
      }
    },
    "FuzzyDate": {
      "kind": "OBJECT",
      "fields": {
        "day": {
          "type": "Int",
          "args": {}
        },
        "month": {
          "type": "Int",
          "args": {}
        },
        "year": {
          "type": "Int",
          "args": {}
        }
      }
    },
    "GenreStats": {
      "kind": "OBJECT",
      "fields": {
        "amount": {
          "type": "Int",
          "args": {}
        },
        "genre": {
          "type": "String",
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
        "activities": {
          "type": "[ActivityUnion]",
          "args": {
            "createdAt": "Int",
            "createdAt_greater": "Int",
            "createdAt_lesser": "Int",
            "hasReplies": "Boolean",
            "hasRepliesOrTypeText": "Boolean",
            "id": "Int",
            "id_in": "[Int]",
            "id_not": "Int",
            "id_not_in": "[Int]",
            "isFollowing": "Boolean",
            "mediaId": "Int",
            "mediaId_in": "[Int]",
            "mediaId_not": "Int",
            "mediaId_not_in": "[Int]",
            "messengerId": "Int",
            "messengerId_in": "[Int]",
            "messengerId_not": "Int",
            "messengerId_not_in": "[Int]",
            "sort": "[ActivitySort]",
            "type": "ActivityType",
            "type_in": "[ActivityType]",
            "type_not": "ActivityType",
            "type_not_in": "[ActivityType]",
            "userId": "Int",
            "userId_in": "[Int]",
            "userId_not": "Int",
            "userId_not_in": "[Int]"
          }
        },
        "activityReplies": {
          "type": "[ActivityReply]",
          "args": {
            "activityId": "Int",
            "id": "Int"
          }
        },
        "airingSchedules": {
          "type": "[AiringSchedule]",
          "args": {
            "airingAt": "Int",
            "airingAt_greater": "Int",
            "airingAt_lesser": "Int",
            "episode": "Int",
            "episode_greater": "Int",
            "episode_in": "[Int]",
            "episode_lesser": "Int",
            "episode_not": "Int",
            "episode_not_in": "[Int]",
            "id": "Int",
            "id_in": "[Int]",
            "id_not": "Int",
            "id_not_in": "[Int]",
            "mediaId": "Int",
            "mediaId_in": "[Int]",
            "mediaId_not": "Int",
            "mediaId_not_in": "[Int]",
            "notYetAired": "Boolean",
            "sort": "[AiringSort]"
          }
        },
        "characters": {
          "type": "[Character]",
          "args": {
            "id": "Int",
            "id_in": "[Int]",
            "id_not": "Int",
            "id_not_in": "[Int]",
            "isBirthday": "Boolean",
            "search": "String",
            "sort": "[CharacterSort]"
          }
        },
        "characterSubmissions": {
          "type": "[CharacterSubmission]",
          "args": {
            "assigneeId": "Int",
            "characterId": "Int",
            "sort": "[SubmissionSort]",
            "status": "SubmissionStatus",
            "userId": "Int"
          }
        },
        "followers": {
          "type": "[User]",
          "args": {
            "sort": "[UserSort]",
            "userId": "Int!"
          }
        },
        "following": {
          "type": "[User]",
          "args": {
            "sort": "[UserSort]",
            "userId": "Int!"
          }
        },
        "likes": {
          "type": "[User]",
          "args": {
            "likeableId": "Int",
            "type": "LikeableType"
          }
        },
        "media": {
          "type": "[Media]",
          "args": {
            "averageScore": "Int",
            "averageScore_greater": "Int",
            "averageScore_lesser": "Int",
            "averageScore_not": "Int",
            "chapters": "Int",
            "chapters_greater": "Int",
            "chapters_lesser": "Int",
            "countryOfOrigin": "CountryCode",
            "countryOfOrigin_in": "[CountryCode]",
            "countryOfOrigin_not_in": "[CountryCode]",
            "duration": "Int",
            "duration_greater": "Int",
            "duration_lesser": "Int",
            "endDate": "FuzzyDateInt",
            "endDate_greater": "FuzzyDateInt",
            "endDate_lesser": "FuzzyDateInt",
            "endDate_like": "String",
            "episodes": "Int",
            "episodes_greater": "Int",
            "episodes_lesser": "Int",
            "format": "MediaFormat",
            "format_in": "[MediaFormat]",
            "format_not": "MediaFormat",
            "format_not_in": "[MediaFormat]",
            "genre": "String",
            "genre_in": "[String]",
            "genre_not_in": "[String]",
            "id": "Int",
            "id_in": "[Int]",
            "id_not": "Int",
            "id_not_in": "[Int]",
            "idMal": "Int",
            "idMal_in": "[Int]",
            "idMal_not": "Int",
            "idMal_not_in": "[Int]",
            "isAdult": "Boolean",
            "isLicensed": "Boolean",
            "licensedBy": "String",
            "licensedBy_in": "[String]",
            "licensedById": "Int",
            "licensedById_in": "[Int]",
            "minimumTagRank": "Int",
            "onList": "Boolean",
            "popularity": "Int",
            "popularity_greater": "Int",
            "popularity_lesser": "Int",
            "popularity_not": "Int",
            "search": "String",
            "season": "MediaSeason",
            "seasonYear": "Int",
            "sort": "[MediaSort]",
            "source": "MediaSource",
            "source_in": "[MediaSource]",
            "startDate": "FuzzyDateInt",
            "startDate_greater": "FuzzyDateInt",
            "startDate_lesser": "FuzzyDateInt",
            "startDate_like": "String",
            "status": "MediaStatus",
            "status_in": "[MediaStatus]",
            "status_not": "MediaStatus",
            "status_not_in": "[MediaStatus]",
            "tag": "String",
            "tag_in": "[String]",
            "tag_not_in": "[String]",
            "tagCategory": "String",
            "tagCategory_in": "[String]",
            "tagCategory_not_in": "[String]",
            "type": "MediaType",
            "volumes": "Int",
            "volumes_greater": "Int",
            "volumes_lesser": "Int"
          }
        },
        "mediaList": {
          "type": "[MediaList]",
          "args": {
            "compareWithAuthList": "Boolean",
            "completedAt": "FuzzyDateInt",
            "completedAt_greater": "FuzzyDateInt",
            "completedAt_lesser": "FuzzyDateInt",
            "completedAt_like": "String",
            "id": "Int",
            "isFollowing": "Boolean",
            "mediaId": "Int",
            "mediaId_in": "[Int]",
            "mediaId_not_in": "[Int]",
            "notes": "String",
            "notes_like": "String",
            "sort": "[MediaListSort]",
            "startedAt": "FuzzyDateInt",
            "startedAt_greater": "FuzzyDateInt",
            "startedAt_lesser": "FuzzyDateInt",
            "startedAt_like": "String",
            "status": "MediaListStatus",
            "status_in": "[MediaListStatus]",
            "status_not": "MediaListStatus",
            "status_not_in": "[MediaListStatus]",
            "type": "MediaType",
            "userId": "Int",
            "userId_in": "[Int]",
            "userName": "String"
          }
        },
        "mediaSubmissions": {
          "type": "[MediaSubmission]",
          "args": {
            "assigneeId": "Int",
            "mediaId": "Int",
            "sort": "[SubmissionSort]",
            "status": "SubmissionStatus",
            "submissionId": "Int",
            "type": "MediaType",
            "userId": "Int"
          }
        },
        "mediaTrends": {
          "type": "[MediaTrend]",
          "args": {
            "averageScore": "Int",
            "averageScore_greater": "Int",
            "averageScore_lesser": "Int",
            "averageScore_not": "Int",
            "date": "Int",
            "date_greater": "Int",
            "date_lesser": "Int",
            "episode": "Int",
            "episode_greater": "Int",
            "episode_lesser": "Int",
            "episode_not": "Int",
            "mediaId": "Int",
            "mediaId_in": "[Int]",
            "mediaId_not": "Int",
            "mediaId_not_in": "[Int]",
            "popularity": "Int",
            "popularity_greater": "Int",
            "popularity_lesser": "Int",
            "popularity_not": "Int",
            "releasing": "Boolean",
            "sort": "[MediaTrendSort]",
            "trending": "Int",
            "trending_greater": "Int",
            "trending_lesser": "Int",
            "trending_not": "Int"
          }
        },
        "modActions": {
          "type": "[ModAction]",
          "args": {
            "modId": "Int",
            "modId_in": "[Int]",
            "modId_not": "Int",
            "modId_not_in": "[Int]",
            "userId": "Int"
          }
        },
        "notifications": {
          "type": "[NotificationUnion]",
          "args": {
            "resetNotificationCount": "Boolean",
            "type": "NotificationType",
            "type_in": "[NotificationType]"
          }
        },
        "pageInfo": {
          "type": "PageInfo",
          "args": {}
        },
        "recommendations": {
          "type": "[Recommendation]",
          "args": {
            "id": "Int",
            "mediaId": "Int",
            "mediaRecommendationId": "Int",
            "onList": "Boolean",
            "rating": "Int",
            "rating_greater": "Int",
            "rating_lesser": "Int",
            "sort": "[RecommendationSort]",
            "userId": "Int"
          }
        },
        "reports": {
          "type": "[Report]",
          "args": {
            "reportedId": "Int",
            "reporterId": "Int"
          }
        },
        "reviews": {
          "type": "[Review]",
          "args": {
            "id": "Int",
            "mediaId": "Int",
            "mediaType": "MediaType",
            "sort": "[ReviewSort]",
            "userId": "Int"
          }
        },
        "revisionHistory": {
          "type": "[RevisionHistory]",
          "args": {
            "characterId": "Int",
            "mediaId": "Int",
            "staffId": "Int",
            "studioId": "Int",
            "userId": "Int"
          }
        },
        "staff": {
          "type": "[Staff]",
          "args": {
            "id": "Int",
            "id_in": "[Int]",
            "id_not": "Int",
            "id_not_in": "[Int]",
            "isBirthday": "Boolean",
            "search": "String",
            "sort": "[StaffSort]"
          }
        },
        "staffSubmissions": {
          "type": "[StaffSubmission]",
          "args": {
            "assigneeId": "Int",
            "sort": "[SubmissionSort]",
            "staffId": "Int",
            "status": "SubmissionStatus",
            "userId": "Int"
          }
        },
        "studios": {
          "type": "[Studio]",
          "args": {
            "id": "Int",
            "id_in": "[Int]",
            "id_not": "Int",
            "id_not_in": "[Int]",
            "search": "String",
            "sort": "[StudioSort]"
          }
        },
        "threadComments": {
          "type": "[ThreadComment]",
          "args": {
            "id": "Int",
            "sort": "[ThreadCommentSort]",
            "threadId": "Int",
            "userId": "Int"
          }
        },
        "threads": {
          "type": "[Thread]",
          "args": {
            "categoryId": "Int",
            "id": "Int",
            "id_in": "[Int]",
            "mediaCategoryId": "Int",
            "replyUserId": "Int",
            "search": "String",
            "sort": "[ThreadSort]",
            "subscribed": "Boolean",
            "userId": "Int"
          }
        },
        "userBlockSearch": {
          "type": "[User]",
          "args": {
            "search": "String"
          }
        },
        "users": {
          "type": "[User]",
          "args": {
            "id": "Int",
            "isModerator": "Boolean",
            "name": "String",
            "search": "String",
            "sort": "[UserSort]"
          }
        }
      }
    },
    "ListActivity": {
      "kind": "OBJECT",
      "fields": {
        "createdAt": {
          "type": "Int!",
          "args": {}
        },
        "id": {
          "type": "Int!",
          "args": {}
        },
        "isLiked": {
          "type": "Boolean",
          "args": {}
        },
        "isLocked": {
          "type": "Boolean",
          "args": {}
        },
        "isPinned": {
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
        "likes": {
          "type": "[User]",
          "args": {}
        },
        "media": {
          "type": "Media",
          "args": {}
        },
        "progress": {
          "type": "String",
          "args": {}
        },
        "replies": {
          "type": "[ActivityReply]",
          "args": {}
        },
        "replyCount": {
          "type": "Int!",
          "args": {}
        },
        "siteUrl": {
          "type": "String",
          "args": {}
        },
        "status": {
          "type": "String",
          "args": {}
        },
        "type": {
          "type": "ActivityType",
          "args": {}
        },
        "user": {
          "type": "User",
          "args": {}
        },
        "userId": {
          "type": "Int",
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
        "airingSchedule": {
          "type": "AiringScheduleConnection",
          "args": {
            "notYetAired": "Boolean",
            "page": "Int",
            "perPage": "Int"
          }
        },
        "autoCreateForumThread": {
          "type": "Boolean",
          "args": {}
        },
        "averageScore": {
          "type": "Int",
          "args": {}
        },
        "bannerImage": {
          "type": "String",
          "args": {}
        },
        "chapters": {
          "type": "Int",
          "args": {}
        },
        "characters": {
          "type": "CharacterConnection",
          "args": {
            "page": "Int",
            "perPage": "Int",
            "role": "CharacterRole",
            "sort": "[CharacterSort]"
          }
        },
        "countryOfOrigin": {
          "type": "CountryCode",
          "args": {}
        },
        "coverImage": {
          "type": "MediaCoverImage",
          "args": {}
        },
        "description": {
          "type": "String",
          "args": {
            "asHtml": "Boolean"
          }
        },
        "duration": {
          "type": "Int",
          "args": {}
        },
        "endDate": {
          "type": "FuzzyDate",
          "args": {}
        },
        "episodes": {
          "type": "Int",
          "args": {}
        },
        "externalLinks": {
          "type": "[MediaExternalLink]",
          "args": {}
        },
        "favourites": {
          "type": "Int",
          "args": {}
        },
        "format": {
          "type": "MediaFormat",
          "args": {}
        },
        "genres": {
          "type": "[String]",
          "args": {}
        },
        "hashtag": {
          "type": "String",
          "args": {}
        },
        "id": {
          "type": "Int!",
          "args": {}
        },
        "idMal": {
          "type": "Int",
          "args": {}
        },
        "isAdult": {
          "type": "Boolean",
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
        "isLicensed": {
          "type": "Boolean",
          "args": {}
        },
        "isLocked": {
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
        "meanScore": {
          "type": "Int",
          "args": {}
        },
        "mediaListEntry": {
          "type": "MediaList",
          "args": {}
        },
        "modNotes": {
          "type": "String",
          "args": {}
        },
        "nextAiringEpisode": {
          "type": "AiringSchedule",
          "args": {}
        },
        "popularity": {
          "type": "Int",
          "args": {}
        },
        "rankings": {
          "type": "[MediaRank]",
          "args": {}
        },
        "recommendations": {
          "type": "RecommendationConnection",
          "args": {
            "page": "Int",
            "perPage": "Int",
            "sort": "[RecommendationSort]"
          }
        },
        "relations": {
          "type": "MediaConnection",
          "args": {}
        },
        "reviews": {
          "type": "ReviewConnection",
          "args": {
            "limit": "Int",
            "page": "Int",
            "perPage": "Int",
            "sort": "[ReviewSort]"
          }
        },
        "season": {
          "type": "MediaSeason",
          "args": {}
        },
        "seasonInt": {
          "type": "Int",
          "args": {}
        },
        "seasonYear": {
          "type": "Int",
          "args": {}
        },
        "siteUrl": {
          "type": "String",
          "args": {}
        },
        "source": {
          "type": "MediaSource",
          "args": {
            "version": "Int"
          }
        },
        "staff": {
          "type": "StaffConnection",
          "args": {
            "page": "Int",
            "perPage": "Int",
            "sort": "[StaffSort]"
          }
        },
        "startDate": {
          "type": "FuzzyDate",
          "args": {}
        },
        "stats": {
          "type": "MediaStats",
          "args": {}
        },
        "status": {
          "type": "MediaStatus",
          "args": {
            "version": "Int"
          }
        },
        "streamingEpisodes": {
          "type": "[MediaStreamingEpisode]",
          "args": {}
        },
        "studios": {
          "type": "StudioConnection",
          "args": {
            "isMain": "Boolean",
            "sort": "[StudioSort]"
          }
        },
        "synonyms": {
          "type": "[String]",
          "args": {}
        },
        "tags": {
          "type": "[MediaTag]",
          "args": {}
        },
        "title": {
          "type": "MediaTitle",
          "args": {}
        },
        "trailer": {
          "type": "MediaTrailer",
          "args": {}
        },
        "trending": {
          "type": "Int",
          "args": {}
        },
        "trends": {
          "type": "MediaTrendConnection",
          "args": {
            "page": "Int",
            "perPage": "Int",
            "releasing": "Boolean",
            "sort": "[MediaTrendSort]"
          }
        },
        "type": {
          "type": "MediaType",
          "args": {}
        },
        "updatedAt": {
          "type": "Int",
          "args": {}
        },
        "volumes": {
          "type": "Int",
          "args": {}
        }
      }
    },
    "MediaCharacter": {
      "kind": "OBJECT",
      "fields": {
        "character": {
          "type": "Character",
          "args": {}
        },
        "characterName": {
          "type": "String",
          "args": {}
        },
        "dubGroup": {
          "type": "String",
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
        "roleNotes": {
          "type": "String",
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
        "color": {
          "type": "String",
          "args": {}
        },
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
        }
      }
    },
    "MediaDataChangeNotification": {
      "kind": "OBJECT",
      "fields": {
        "context": {
          "type": "String",
          "args": {}
        },
        "createdAt": {
          "type": "Int",
          "args": {}
        },
        "id": {
          "type": "Int!",
          "args": {}
        },
        "media": {
          "type": "Media",
          "args": {}
        },
        "mediaId": {
          "type": "Int!",
          "args": {}
        },
        "reason": {
          "type": "String",
          "args": {}
        },
        "type": {
          "type": "NotificationType",
          "args": {}
        }
      }
    },
    "MediaDeletionNotification": {
      "kind": "OBJECT",
      "fields": {
        "context": {
          "type": "String",
          "args": {}
        },
        "createdAt": {
          "type": "Int",
          "args": {}
        },
        "deletedMediaTitle": {
          "type": "String",
          "args": {}
        },
        "id": {
          "type": "Int!",
          "args": {}
        },
        "reason": {
          "type": "String",
          "args": {}
        },
        "type": {
          "type": "NotificationType",
          "args": {}
        }
      }
    },
    "MediaEdge": {
      "kind": "OBJECT",
      "fields": {
        "characterName": {
          "type": "String",
          "args": {}
        },
        "characterRole": {
          "type": "CharacterRole",
          "args": {}
        },
        "characters": {
          "type": "[Character]",
          "args": {}
        },
        "dubGroup": {
          "type": "String",
          "args": {}
        },
        "favouriteOrder": {
          "type": "Int",
          "args": {}
        },
        "id": {
          "type": "Int",
          "args": {}
        },
        "isMainStudio": {
          "type": "Boolean!",
          "args": {}
        },
        "node": {
          "type": "Media",
          "args": {}
        },
        "relationType": {
          "type": "MediaRelation",
          "args": {
            "version": "Int"
          }
        },
        "roleNotes": {
          "type": "String",
          "args": {}
        },
        "staffRole": {
          "type": "String",
          "args": {}
        },
        "voiceActorRoles": {
          "type": "[StaffRoleType]",
          "args": {
            "language": "StaffLanguage",
            "sort": "[StaffSort]"
          }
        },
        "voiceActors": {
          "type": "[Staff]",
          "args": {
            "language": "StaffLanguage",
            "sort": "[StaffSort]"
          }
        }
      }
    },
    "MediaExternalLink": {
      "kind": "OBJECT",
      "fields": {
        "color": {
          "type": "String",
          "args": {}
        },
        "icon": {
          "type": "String",
          "args": {}
        },
        "id": {
          "type": "Int!",
          "args": {}
        },
        "isDisabled": {
          "type": "Boolean",
          "args": {}
        },
        "language": {
          "type": "String",
          "args": {}
        },
        "notes": {
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
        "url": {
          "type": "String",
          "args": {}
        }
      }
    },
    "MediaList": {
      "kind": "OBJECT",
      "fields": {
        "advancedScores": {
          "type": "Json",
          "args": {}
        },
        "completedAt": {
          "type": "FuzzyDate",
          "args": {}
        },
        "createdAt": {
          "type": "Int",
          "args": {}
        },
        "customLists": {
          "type": "Json",
          "args": {
            "asArray": "Boolean"
          }
        },
        "hiddenFromStatusLists": {
          "type": "Boolean",
          "args": {}
        },
        "id": {
          "type": "Int!",
          "args": {}
        },
        "media": {
          "type": "Media",
          "args": {}
        },
        "mediaId": {
          "type": "Int!",
          "args": {}
        },
        "notes": {
          "type": "String",
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
        "score": {
          "type": "Float",
          "args": {
            "format": "ScoreFormat"
          }
        },
        "startedAt": {
          "type": "FuzzyDate",
          "args": {}
        },
        "status": {
          "type": "MediaListStatus",
          "args": {}
        },
        "updatedAt": {
          "type": "Int",
          "args": {}
        },
        "user": {
          "type": "User",
          "args": {}
        },
        "userId": {
          "type": "Int!",
          "args": {}
        }
      }
    },
    "MediaListCollection": {
      "kind": "OBJECT",
      "fields": {
        "customLists": {
          "type": "[[MediaList]]",
          "args": {
            "asArray": "Boolean"
          }
        },
        "hasNextChunk": {
          "type": "Boolean",
          "args": {}
        },
        "lists": {
          "type": "[MediaListGroup]",
          "args": {}
        },
        "statusLists": {
          "type": "[[MediaList]]",
          "args": {
            "asArray": "Boolean"
          }
        },
        "user": {
          "type": "User",
          "args": {}
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
        "isCustomList": {
          "type": "Boolean",
          "args": {}
        },
        "isSplitCompletedList": {
          "type": "Boolean",
          "args": {}
        },
        "name": {
          "type": "String",
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
        "animeList": {
          "type": "MediaListTypeOptions",
          "args": {}
        },
        "mangaList": {
          "type": "MediaListTypeOptions",
          "args": {}
        },
        "rowOrder": {
          "type": "String",
          "args": {}
        },
        "scoreFormat": {
          "type": "ScoreFormat",
          "args": {}
        },
        "sharedTheme": {
          "type": "Json",
          "args": {}
        },
        "sharedThemeEnabled": {
          "type": "Boolean",
          "args": {}
        },
        "useLegacyLists": {
          "type": "Boolean",
          "args": {}
        }
      }
    },
    "MediaListTypeOptions": {
      "kind": "OBJECT",
      "fields": {
        "advancedScoring": {
          "type": "[String]",
          "args": {}
        },
        "advancedScoringEnabled": {
          "type": "Boolean",
          "args": {}
        },
        "customLists": {
          "type": "[String]",
          "args": {}
        },
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
        }
      }
    },
    "MediaMergeNotification": {
      "kind": "OBJECT",
      "fields": {
        "context": {
          "type": "String",
          "args": {}
        },
        "createdAt": {
          "type": "Int",
          "args": {}
        },
        "deletedMediaTitles": {
          "type": "[String]",
          "args": {}
        },
        "id": {
          "type": "Int!",
          "args": {}
        },
        "media": {
          "type": "Media",
          "args": {}
        },
        "mediaId": {
          "type": "Int!",
          "args": {}
        },
        "reason": {
          "type": "String",
          "args": {}
        },
        "type": {
          "type": "NotificationType",
          "args": {}
        }
      }
    },
    "MediaRank": {
      "kind": "OBJECT",
      "fields": {
        "allTime": {
          "type": "Boolean",
          "args": {}
        },
        "context": {
          "type": "String!",
          "args": {}
        },
        "format": {
          "type": "MediaFormat!",
          "args": {}
        },
        "id": {
          "type": "Int!",
          "args": {}
        },
        "rank": {
          "type": "Int!",
          "args": {}
        },
        "season": {
          "type": "MediaSeason",
          "args": {}
        },
        "type": {
          "type": "MediaRankType!",
          "args": {}
        },
        "year": {
          "type": "Int",
          "args": {}
        }
      }
    },
    "MediaStats": {
      "kind": "OBJECT",
      "fields": {
        "airingProgression": {
          "type": "[AiringProgression]",
          "args": {}
        },
        "scoreDistribution": {
          "type": "[ScoreDistribution]",
          "args": {}
        },
        "statusDistribution": {
          "type": "[StatusDistribution]",
          "args": {}
        }
      }
    },
    "MediaStreamingEpisode": {
      "kind": "OBJECT",
      "fields": {
        "site": {
          "type": "String",
          "args": {}
        },
        "thumbnail": {
          "type": "String",
          "args": {}
        },
        "title": {
          "type": "String",
          "args": {}
        },
        "url": {
          "type": "String",
          "args": {}
        }
      }
    },
    "MediaSubmission": {
      "kind": "OBJECT",
      "fields": {
        "assignee": {
          "type": "User",
          "args": {}
        },
        "changes": {
          "type": "[String]",
          "args": {}
        },
        "characters": {
          "type": "[MediaSubmissionComparison]",
          "args": {}
        },
        "createdAt": {
          "type": "Int",
          "args": {}
        },
        "externalLinks": {
          "type": "[MediaSubmissionComparison]",
          "args": {}
        },
        "id": {
          "type": "Int!",
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
        "notes": {
          "type": "String",
          "args": {}
        },
        "relations": {
          "type": "[MediaEdge]",
          "args": {}
        },
        "source": {
          "type": "String",
          "args": {}
        },
        "staff": {
          "type": "[MediaSubmissionComparison]",
          "args": {}
        },
        "status": {
          "type": "SubmissionStatus",
          "args": {}
        },
        "studios": {
          "type": "[MediaSubmissionComparison]",
          "args": {}
        },
        "submission": {
          "type": "Media",
          "args": {}
        },
        "submitter": {
          "type": "User",
          "args": {}
        },
        "submitterStats": {
          "type": "Json",
          "args": {}
        }
      }
    },
    "MediaSubmissionComparison": {
      "kind": "OBJECT",
      "fields": {
        "character": {
          "type": "MediaCharacter",
          "args": {}
        },
        "externalLink": {
          "type": "MediaExternalLink",
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
        "submission": {
          "type": "MediaSubmissionEdge",
          "args": {}
        }
      }
    },
    "MediaSubmissionEdge": {
      "kind": "OBJECT",
      "fields": {
        "character": {
          "type": "Character",
          "args": {}
        },
        "characterName": {
          "type": "String",
          "args": {}
        },
        "characterRole": {
          "type": "CharacterRole",
          "args": {}
        },
        "characterSubmission": {
          "type": "Character",
          "args": {}
        },
        "dubGroup": {
          "type": "String",
          "args": {}
        },
        "externalLink": {
          "type": "MediaExternalLink",
          "args": {}
        },
        "id": {
          "type": "Int",
          "args": {}
        },
        "isMain": {
          "type": "Boolean",
          "args": {}
        },
        "media": {
          "type": "Media",
          "args": {}
        },
        "roleNotes": {
          "type": "String",
          "args": {}
        },
        "staff": {
          "type": "Staff",
          "args": {}
        },
        "staffRole": {
          "type": "String",
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
        "voiceActor": {
          "type": "Staff",
          "args": {}
        },
        "voiceActorSubmission": {
          "type": "Staff",
          "args": {}
        }
      }
    },
    "MediaSubmissionUpdateNotification": {
      "kind": "OBJECT",
      "fields": {
        "contexts": {
          "type": "[String]",
          "args": {}
        },
        "createdAt": {
          "type": "Int",
          "args": {}
        },
        "id": {
          "type": "Int!",
          "args": {}
        },
        "media": {
          "type": "Media",
          "args": {}
        },
        "notes": {
          "type": "String",
          "args": {}
        },
        "status": {
          "type": "String",
          "args": {}
        },
        "submittedTitle": {
          "type": "String",
          "args": {}
        },
        "type": {
          "type": "NotificationType",
          "args": {}
        }
      }
    },
    "MediaTag": {
      "kind": "OBJECT",
      "fields": {
        "category": {
          "type": "String",
          "args": {}
        },
        "description": {
          "type": "String",
          "args": {}
        },
        "id": {
          "type": "Int!",
          "args": {}
        },
        "isAdult": {
          "type": "Boolean",
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
        "name": {
          "type": "String!",
          "args": {}
        },
        "rank": {
          "type": "Int",
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
        "romaji": {
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
        "averageScore": {
          "type": "Int",
          "args": {}
        },
        "date": {
          "type": "Int!",
          "args": {}
        },
        "episode": {
          "type": "Int",
          "args": {}
        },
        "inProgress": {
          "type": "Int",
          "args": {}
        },
        "media": {
          "type": "Media",
          "args": {}
        },
        "mediaId": {
          "type": "Int!",
          "args": {}
        },
        "popularity": {
          "type": "Int",
          "args": {}
        },
        "releasing": {
          "type": "Boolean!",
          "args": {}
        },
        "trending": {
          "type": "Int!",
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
        "createdAt": {
          "type": "Int!",
          "args": {}
        },
        "id": {
          "type": "Int!",
          "args": {}
        },
        "isLiked": {
          "type": "Boolean",
          "args": {}
        },
        "isLocked": {
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
        "isSubscribed": {
          "type": "Boolean",
          "args": {}
        },
        "likeCount": {
          "type": "Int!",
          "args": {}
        },
        "likes": {
          "type": "[User]",
          "args": {}
        },
        "message": {
          "type": "String",
          "args": {
            "asHtml": "Boolean"
          }
        },
        "messenger": {
          "type": "User",
          "args": {}
        },
        "messengerId": {
          "type": "Int",
          "args": {}
        },
        "recipient": {
          "type": "User",
          "args": {}
        },
        "recipientId": {
          "type": "Int",
          "args": {}
        },
        "replies": {
          "type": "[ActivityReply]",
          "args": {}
        },
        "replyCount": {
          "type": "Int!",
          "args": {}
        },
        "siteUrl": {
          "type": "String",
          "args": {}
        },
        "type": {
          "type": "ActivityType",
          "args": {}
        }
      }
    },
    "ModAction": {
      "kind": "OBJECT",
      "fields": {
        "createdAt": {
          "type": "Int!",
          "args": {}
        },
        "data": {
          "type": "String",
          "args": {}
        },
        "id": {
          "type": "Int!",
          "args": {}
        },
        "mod": {
          "type": "User",
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
        "type": {
          "type": "ModActionType",
          "args": {}
        },
        "user": {
          "type": "User",
          "args": {}
        }
      }
    },
    "Mutation": {
      "kind": "OBJECT",
      "fields": {
        "DeleteActivity": {
          "type": "Deleted",
          "args": {
            "id": "Int"
          }
        },
        "DeleteActivityReply": {
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
        "DeleteMediaListEntry": {
          "type": "Deleted",
          "args": {
            "id": "Int"
          }
        },
        "DeleteReview": {
          "type": "Deleted",
          "args": {
            "id": "Int"
          }
        },
        "DeleteThread": {
          "type": "Deleted",
          "args": {
            "id": "Int"
          }
        },
        "DeleteThreadComment": {
          "type": "Deleted",
          "args": {
            "id": "Int"
          }
        },
        "RateReview": {
          "type": "Review",
          "args": {
            "rating": "ReviewRating",
            "reviewId": "Int"
          }
        },
        "SaveActivityReply": {
          "type": "ActivityReply",
          "args": {
            "activityId": "Int",
            "asMod": "Boolean",
            "id": "Int",
            "text": "String"
          }
        },
        "SaveListActivity": {
          "type": "ListActivity",
          "args": {
            "id": "Int",
            "locked": "Boolean"
          }
        },
        "SaveMediaListEntry": {
          "type": "MediaList",
          "args": {
            "advancedScores": "[Float]",
            "completedAt": "FuzzyDateInput",
            "customLists": "[String]",
            "hiddenFromStatusLists": "Boolean",
            "id": "Int",
            "mediaId": "Int",
            "notes": "String",
            "priority": "Int",
            "private": "Boolean",
            "progress": "Int",
            "progressVolumes": "Int",
            "repeat": "Int",
            "score": "Float",
            "scoreRaw": "Int",
            "startedAt": "FuzzyDateInput",
            "status": "MediaListStatus"
          }
        },
        "SaveMessageActivity": {
          "type": "MessageActivity",
          "args": {
            "asMod": "Boolean",
            "id": "Int",
            "locked": "Boolean",
            "message": "String",
            "private": "Boolean",
            "recipientId": "Int"
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
        "SaveReview": {
          "type": "Review",
          "args": {
            "body": "String",
            "id": "Int",
            "mediaId": "Int",
            "private": "Boolean",
            "score": "Int",
            "summary": "String"
          }
        },
        "SaveTextActivity": {
          "type": "TextActivity",
          "args": {
            "id": "Int",
            "locked": "Boolean",
            "text": "String"
          }
        },
        "SaveThread": {
          "type": "Thread",
          "args": {
            "body": "String",
            "categories": "[Int]",
            "id": "Int",
            "locked": "Boolean",
            "mediaCategories": "[Int]",
            "sticky": "Boolean",
            "title": "String"
          }
        },
        "SaveThreadComment": {
          "type": "ThreadComment",
          "args": {
            "comment": "String",
            "id": "Int",
            "locked": "Boolean",
            "parentCommentId": "Int",
            "threadId": "Int"
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
        "ToggleFavourite": {
          "type": "Favourites",
          "args": {
            "animeId": "Int",
            "characterId": "Int",
            "mangaId": "Int",
            "staffId": "Int",
            "studioId": "Int"
          }
        },
        "ToggleFollow": {
          "type": "User",
          "args": {
            "userId": "Int"
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
        "ToggleThreadSubscription": {
          "type": "Thread",
          "args": {
            "subscribe": "Boolean",
            "threadId": "Int"
          }
        },
        "UpdateAniChartHighlights": {
          "type": "Json",
          "args": {
            "highlights": "[AniChartHighlightInput]"
          }
        },
        "UpdateAniChartSettings": {
          "type": "Json",
          "args": {
            "outgoingLinkProvider": "String",
            "sort": "String",
            "theme": "String",
            "titleLanguage": "String"
          }
        },
        "UpdateFavouriteOrder": {
          "type": "Favourites",
          "args": {
            "animeIds": "[Int]",
            "animeOrder": "[Int]",
            "characterIds": "[Int]",
            "characterOrder": "[Int]",
            "mangaIds": "[Int]",
            "mangaOrder": "[Int]",
            "staffIds": "[Int]",
            "staffOrder": "[Int]",
            "studioIds": "[Int]",
            "studioOrder": "[Int]"
          }
        },
        "UpdateMediaListEntries": {
          "type": "[MediaList]",
          "args": {
            "advancedScores": "[Float]",
            "completedAt": "FuzzyDateInput",
            "hiddenFromStatusLists": "Boolean",
            "ids": "[Int]",
            "notes": "String",
            "priority": "Int",
            "private": "Boolean",
            "progress": "Int",
            "progressVolumes": "Int",
            "repeat": "Int",
            "score": "Float",
            "scoreRaw": "Int",
            "startedAt": "FuzzyDateInput",
            "status": "MediaListStatus"
          }
        },
        "UpdateUser": {
          "type": "User",
          "args": {
            "about": "String",
            "activityMergeTime": "Int",
            "airingNotifications": "Boolean",
            "animeListOptions": "MediaListOptionsInput",
            "disabledListActivity": "[ListActivityOptionInput]",
            "displayAdultContent": "Boolean",
            "donatorBadge": "String",
            "mangaListOptions": "MediaListOptionsInput",
            "notificationOptions": "[NotificationOptionInput]",
            "profileColor": "String",
            "restrictMessagesToFollowing": "Boolean",
            "rowOrder": "String",
            "scoreFormat": "ScoreFormat",
            "staffNameLanguage": "UserStaffNameLanguage",
            "timezone": "String",
            "titleLanguage": "UserTitleLanguage"
          }
        }
      }
    },
    "NotificationOption": {
      "kind": "OBJECT",
      "fields": {
        "enabled": {
          "type": "Boolean",
          "args": {}
        },
        "type": {
          "type": "NotificationType",
          "args": {}
        }
      }
    },
    "Page": {
      "kind": "OBJECT",
      "fields": {
        "activities": {
          "type": "[ActivityUnion]",
          "args": {
            "createdAt": "Int",
            "createdAt_greater": "Int",
            "createdAt_lesser": "Int",
            "hasReplies": "Boolean",
            "hasRepliesOrTypeText": "Boolean",
            "id": "Int",
            "id_in": "[Int]",
            "id_not": "Int",
            "id_not_in": "[Int]",
            "isFollowing": "Boolean",
            "mediaId": "Int",
            "mediaId_in": "[Int]",
            "mediaId_not": "Int",
            "mediaId_not_in": "[Int]",
            "messengerId": "Int",
            "messengerId_in": "[Int]",
            "messengerId_not": "Int",
            "messengerId_not_in": "[Int]",
            "sort": "[ActivitySort]",
            "type": "ActivityType",
            "type_in": "[ActivityType]",
            "type_not": "ActivityType",
            "type_not_in": "[ActivityType]",
            "userId": "Int",
            "userId_in": "[Int]",
            "userId_not": "Int",
            "userId_not_in": "[Int]"
          }
        },
        "activityReplies": {
          "type": "[ActivityReply]",
          "args": {
            "activityId": "Int",
            "id": "Int"
          }
        },
        "airingSchedules": {
          "type": "[AiringSchedule]",
          "args": {
            "airingAt": "Int",
            "airingAt_greater": "Int",
            "airingAt_lesser": "Int",
            "episode": "Int",
            "episode_greater": "Int",
            "episode_in": "[Int]",
            "episode_lesser": "Int",
            "episode_not": "Int",
            "episode_not_in": "[Int]",
            "id": "Int",
            "id_in": "[Int]",
            "id_not": "Int",
            "id_not_in": "[Int]",
            "mediaId": "Int",
            "mediaId_in": "[Int]",
            "mediaId_not": "Int",
            "mediaId_not_in": "[Int]",
            "notYetAired": "Boolean",
            "sort": "[AiringSort]"
          }
        },
        "characters": {
          "type": "[Character]",
          "args": {
            "id": "Int",
            "id_in": "[Int]",
            "id_not": "Int",
            "id_not_in": "[Int]",
            "isBirthday": "Boolean",
            "search": "String",
            "sort": "[CharacterSort]"
          }
        },
        "followers": {
          "type": "[User]",
          "args": {
            "sort": "[UserSort]",
            "userId": "Int!"
          }
        },
        "following": {
          "type": "[User]",
          "args": {
            "sort": "[UserSort]",
            "userId": "Int!"
          }
        },
        "likes": {
          "type": "[User]",
          "args": {
            "likeableId": "Int",
            "type": "LikeableType"
          }
        },
        "media": {
          "type": "[Media]",
          "args": {
            "averageScore": "Int",
            "averageScore_greater": "Int",
            "averageScore_lesser": "Int",
            "averageScore_not": "Int",
            "chapters": "Int",
            "chapters_greater": "Int",
            "chapters_lesser": "Int",
            "countryOfOrigin": "CountryCode",
            "countryOfOrigin_in": "[CountryCode]",
            "countryOfOrigin_not_in": "[CountryCode]",
            "duration": "Int",
            "duration_greater": "Int",
            "duration_lesser": "Int",
            "endDate": "FuzzyDateInt",
            "endDate_greater": "FuzzyDateInt",
            "endDate_lesser": "FuzzyDateInt",
            "endDate_like": "String",
            "episodes": "Int",
            "episodes_greater": "Int",
            "episodes_lesser": "Int",
            "format": "MediaFormat",
            "format_in": "[MediaFormat]",
            "format_not": "MediaFormat",
            "format_not_in": "[MediaFormat]",
            "genre": "String",
            "genre_in": "[String]",
            "genre_not_in": "[String]",
            "id": "Int",
            "id_in": "[Int]",
            "id_not": "Int",
            "id_not_in": "[Int]",
            "idMal": "Int",
            "idMal_in": "[Int]",
            "idMal_not": "Int",
            "idMal_not_in": "[Int]",
            "isAdult": "Boolean",
            "isLicensed": "Boolean",
            "licensedBy": "String",
            "licensedBy_in": "[String]",
            "licensedById": "Int",
            "licensedById_in": "[Int]",
            "minimumTagRank": "Int",
            "onList": "Boolean",
            "popularity": "Int",
            "popularity_greater": "Int",
            "popularity_lesser": "Int",
            "popularity_not": "Int",
            "search": "String",
            "season": "MediaSeason",
            "seasonYear": "Int",
            "sort": "[MediaSort]",
            "source": "MediaSource",
            "source_in": "[MediaSource]",
            "startDate": "FuzzyDateInt",
            "startDate_greater": "FuzzyDateInt",
            "startDate_lesser": "FuzzyDateInt",
            "startDate_like": "String",
            "status": "MediaStatus",
            "status_in": "[MediaStatus]",
            "status_not": "MediaStatus",
            "status_not_in": "[MediaStatus]",
            "tag": "String",
            "tag_in": "[String]",
            "tag_not_in": "[String]",
            "tagCategory": "String",
            "tagCategory_in": "[String]",
            "tagCategory_not_in": "[String]",
            "type": "MediaType",
            "volumes": "Int",
            "volumes_greater": "Int",
            "volumes_lesser": "Int"
          }
        },
        "mediaList": {
          "type": "[MediaList]",
          "args": {
            "compareWithAuthList": "Boolean",
            "completedAt": "FuzzyDateInt",
            "completedAt_greater": "FuzzyDateInt",
            "completedAt_lesser": "FuzzyDateInt",
            "completedAt_like": "String",
            "id": "Int",
            "isFollowing": "Boolean",
            "mediaId": "Int",
            "mediaId_in": "[Int]",
            "mediaId_not_in": "[Int]",
            "notes": "String",
            "notes_like": "String",
            "sort": "[MediaListSort]",
            "startedAt": "FuzzyDateInt",
            "startedAt_greater": "FuzzyDateInt",
            "startedAt_lesser": "FuzzyDateInt",
            "startedAt_like": "String",
            "status": "MediaListStatus",
            "status_in": "[MediaListStatus]",
            "status_not": "MediaListStatus",
            "status_not_in": "[MediaListStatus]",
            "type": "MediaType",
            "userId": "Int",
            "userId_in": "[Int]",
            "userName": "String"
          }
        },
        "mediaTrends": {
          "type": "[MediaTrend]",
          "args": {
            "averageScore": "Int",
            "averageScore_greater": "Int",
            "averageScore_lesser": "Int",
            "averageScore_not": "Int",
            "date": "Int",
            "date_greater": "Int",
            "date_lesser": "Int",
            "episode": "Int",
            "episode_greater": "Int",
            "episode_lesser": "Int",
            "episode_not": "Int",
            "mediaId": "Int",
            "mediaId_in": "[Int]",
            "mediaId_not": "Int",
            "mediaId_not_in": "[Int]",
            "popularity": "Int",
            "popularity_greater": "Int",
            "popularity_lesser": "Int",
            "popularity_not": "Int",
            "releasing": "Boolean",
            "sort": "[MediaTrendSort]",
            "trending": "Int",
            "trending_greater": "Int",
            "trending_lesser": "Int",
            "trending_not": "Int"
          }
        },
        "notifications": {
          "type": "[NotificationUnion]",
          "args": {
            "resetNotificationCount": "Boolean",
            "type": "NotificationType",
            "type_in": "[NotificationType]"
          }
        },
        "pageInfo": {
          "type": "PageInfo",
          "args": {}
        },
        "recommendations": {
          "type": "[Recommendation]",
          "args": {
            "id": "Int",
            "mediaId": "Int",
            "mediaRecommendationId": "Int",
            "onList": "Boolean",
            "rating": "Int",
            "rating_greater": "Int",
            "rating_lesser": "Int",
            "sort": "[RecommendationSort]",
            "userId": "Int"
          }
        },
        "reviews": {
          "type": "[Review]",
          "args": {
            "id": "Int",
            "mediaId": "Int",
            "mediaType": "MediaType",
            "sort": "[ReviewSort]",
            "userId": "Int"
          }
        },
        "staff": {
          "type": "[Staff]",
          "args": {
            "id": "Int",
            "id_in": "[Int]",
            "id_not": "Int",
            "id_not_in": "[Int]",
            "isBirthday": "Boolean",
            "search": "String",
            "sort": "[StaffSort]"
          }
        },
        "studios": {
          "type": "[Studio]",
          "args": {
            "id": "Int",
            "id_in": "[Int]",
            "id_not": "Int",
            "id_not_in": "[Int]",
            "search": "String",
            "sort": "[StudioSort]"
          }
        },
        "threadComments": {
          "type": "[ThreadComment]",
          "args": {
            "id": "Int",
            "sort": "[ThreadCommentSort]",
            "threadId": "Int",
            "userId": "Int"
          }
        },
        "threads": {
          "type": "[Thread]",
          "args": {
            "categoryId": "Int",
            "id": "Int",
            "id_in": "[Int]",
            "mediaCategoryId": "Int",
            "replyUserId": "Int",
            "search": "String",
            "sort": "[ThreadSort]",
            "subscribed": "Boolean",
            "userId": "Int"
          }
        },
        "users": {
          "type": "[User]",
          "args": {
            "id": "Int",
            "isModerator": "Boolean",
            "name": "String",
            "search": "String",
            "sort": "[UserSort]"
          }
        }
      }
    },
    "PageInfo": {
      "kind": "OBJECT",
      "fields": {
        "currentPage": {
          "type": "Int",
          "args": {}
        },
        "hasNextPage": {
          "type": "Boolean",
          "args": {}
        },
        "lastPage": {
          "type": "Int",
          "args": {}
        },
        "perPage": {
          "type": "Int",
          "args": {}
        },
        "total": {
          "type": "Int",
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
        "Activity": {
          "type": "ActivityUnion",
          "args": {
            "createdAt": "Int",
            "createdAt_greater": "Int",
            "createdAt_lesser": "Int",
            "hasReplies": "Boolean",
            "hasRepliesOrTypeText": "Boolean",
            "id": "Int",
            "id_in": "[Int]",
            "id_not": "Int",
            "id_not_in": "[Int]",
            "isFollowing": "Boolean",
            "mediaId": "Int",
            "mediaId_in": "[Int]",
            "mediaId_not": "Int",
            "mediaId_not_in": "[Int]",
            "messengerId": "Int",
            "messengerId_in": "[Int]",
            "messengerId_not": "Int",
            "messengerId_not_in": "[Int]",
            "sort": "[ActivitySort]",
            "type": "ActivityType",
            "type_in": "[ActivityType]",
            "type_not": "ActivityType",
            "type_not_in": "[ActivityType]",
            "userId": "Int",
            "userId_in": "[Int]",
            "userId_not": "Int",
            "userId_not_in": "[Int]"
          }
        },
        "ActivityReply": {
          "type": "ActivityReply",
          "args": {
            "activityId": "Int",
            "id": "Int"
          }
        },
        "AiringSchedule": {
          "type": "AiringSchedule",
          "args": {
            "airingAt": "Int",
            "airingAt_greater": "Int",
            "airingAt_lesser": "Int",
            "episode": "Int",
            "episode_greater": "Int",
            "episode_in": "[Int]",
            "episode_lesser": "Int",
            "episode_not": "Int",
            "episode_not_in": "[Int]",
            "id": "Int",
            "id_in": "[Int]",
            "id_not": "Int",
            "id_not_in": "[Int]",
            "mediaId": "Int",
            "mediaId_in": "[Int]",
            "mediaId_not": "Int",
            "mediaId_not_in": "[Int]",
            "notYetAired": "Boolean",
            "sort": "[AiringSort]"
          }
        },
        "AniChartUser": {
          "type": "AniChartUser",
          "args": {}
        },
        "Character": {
          "type": "Character",
          "args": {
            "id": "Int",
            "id_in": "[Int]",
            "id_not": "Int",
            "id_not_in": "[Int]",
            "isBirthday": "Boolean",
            "search": "String",
            "sort": "[CharacterSort]"
          }
        },
        "ExternalLinkSourceCollection": {
          "type": "[MediaExternalLink]",
          "args": {
            "id": "Int",
            "mediaType": "ExternalLinkMediaType",
            "type": "ExternalLinkType"
          }
        },
        "Follower": {
          "type": "User",
          "args": {
            "sort": "[UserSort]",
            "userId": "Int!"
          }
        },
        "Following": {
          "type": "User",
          "args": {
            "sort": "[UserSort]",
            "userId": "Int!"
          }
        },
        "GenreCollection": {
          "type": "[String]",
          "args": {}
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
        "Media": {
          "type": "Media",
          "args": {
            "averageScore": "Int",
            "averageScore_greater": "Int",
            "averageScore_lesser": "Int",
            "averageScore_not": "Int",
            "chapters": "Int",
            "chapters_greater": "Int",
            "chapters_lesser": "Int",
            "countryOfOrigin": "CountryCode",
            "countryOfOrigin_in": "[CountryCode]",
            "countryOfOrigin_not_in": "[CountryCode]",
            "duration": "Int",
            "duration_greater": "Int",
            "duration_lesser": "Int",
            "endDate": "FuzzyDateInt",
            "endDate_greater": "FuzzyDateInt",
            "endDate_lesser": "FuzzyDateInt",
            "endDate_like": "String",
            "episodes": "Int",
            "episodes_greater": "Int",
            "episodes_lesser": "Int",
            "format": "MediaFormat",
            "format_in": "[MediaFormat]",
            "format_not": "MediaFormat",
            "format_not_in": "[MediaFormat]",
            "genre": "String",
            "genre_in": "[String]",
            "genre_not_in": "[String]",
            "id": "Int",
            "id_in": "[Int]",
            "id_not": "Int",
            "id_not_in": "[Int]",
            "idMal": "Int",
            "idMal_in": "[Int]",
            "idMal_not": "Int",
            "idMal_not_in": "[Int]",
            "isAdult": "Boolean",
            "isLicensed": "Boolean",
            "licensedBy": "String",
            "licensedBy_in": "[String]",
            "licensedById": "Int",
            "licensedById_in": "[Int]",
            "minimumTagRank": "Int",
            "onList": "Boolean",
            "popularity": "Int",
            "popularity_greater": "Int",
            "popularity_lesser": "Int",
            "popularity_not": "Int",
            "search": "String",
            "season": "MediaSeason",
            "seasonYear": "Int",
            "sort": "[MediaSort]",
            "source": "MediaSource",
            "source_in": "[MediaSource]",
            "startDate": "FuzzyDateInt",
            "startDate_greater": "FuzzyDateInt",
            "startDate_lesser": "FuzzyDateInt",
            "startDate_like": "String",
            "status": "MediaStatus",
            "status_in": "[MediaStatus]",
            "status_not": "MediaStatus",
            "status_not_in": "[MediaStatus]",
            "tag": "String",
            "tag_in": "[String]",
            "tag_not_in": "[String]",
            "tagCategory": "String",
            "tagCategory_in": "[String]",
            "tagCategory_not_in": "[String]",
            "type": "MediaType",
            "volumes": "Int",
            "volumes_greater": "Int",
            "volumes_lesser": "Int"
          }
        },
        "MediaList": {
          "type": "MediaList",
          "args": {
            "compareWithAuthList": "Boolean",
            "completedAt": "FuzzyDateInt",
            "completedAt_greater": "FuzzyDateInt",
            "completedAt_lesser": "FuzzyDateInt",
            "completedAt_like": "String",
            "id": "Int",
            "isFollowing": "Boolean",
            "mediaId": "Int",
            "mediaId_in": "[Int]",
            "mediaId_not_in": "[Int]",
            "notes": "String",
            "notes_like": "String",
            "sort": "[MediaListSort]",
            "startedAt": "FuzzyDateInt",
            "startedAt_greater": "FuzzyDateInt",
            "startedAt_lesser": "FuzzyDateInt",
            "startedAt_like": "String",
            "status": "MediaListStatus",
            "status_in": "[MediaListStatus]",
            "status_not": "MediaListStatus",
            "status_not_in": "[MediaListStatus]",
            "type": "MediaType",
            "userId": "Int",
            "userId_in": "[Int]",
            "userName": "String"
          }
        },
        "MediaListCollection": {
          "type": "MediaListCollection",
          "args": {
            "chunk": "Int",
            "completedAt": "FuzzyDateInt",
            "completedAt_greater": "FuzzyDateInt",
            "completedAt_lesser": "FuzzyDateInt",
            "completedAt_like": "String",
            "forceSingleCompletedList": "Boolean",
            "notes": "String",
            "notes_like": "String",
            "perChunk": "Int",
            "sort": "[MediaListSort]",
            "startedAt": "FuzzyDateInt",
            "startedAt_greater": "FuzzyDateInt",
            "startedAt_lesser": "FuzzyDateInt",
            "startedAt_like": "String",
            "status": "MediaListStatus",
            "status_in": "[MediaListStatus]",
            "status_not": "MediaListStatus",
            "status_not_in": "[MediaListStatus]",
            "type": "MediaType",
            "userId": "Int",
            "userName": "String"
          }
        },
        "MediaTagCollection": {
          "type": "[MediaTag]",
          "args": {
            "status": "Int"
          }
        },
        "MediaTrend": {
          "type": "MediaTrend",
          "args": {
            "averageScore": "Int",
            "averageScore_greater": "Int",
            "averageScore_lesser": "Int",
            "averageScore_not": "Int",
            "date": "Int",
            "date_greater": "Int",
            "date_lesser": "Int",
            "episode": "Int",
            "episode_greater": "Int",
            "episode_lesser": "Int",
            "episode_not": "Int",
            "mediaId": "Int",
            "mediaId_in": "[Int]",
            "mediaId_not": "Int",
            "mediaId_not_in": "[Int]",
            "popularity": "Int",
            "popularity_greater": "Int",
            "popularity_lesser": "Int",
            "popularity_not": "Int",
            "releasing": "Boolean",
            "sort": "[MediaTrendSort]",
            "trending": "Int",
            "trending_greater": "Int",
            "trending_lesser": "Int",
            "trending_not": "Int"
          }
        },
        "Notification": {
          "type": "NotificationUnion",
          "args": {
            "resetNotificationCount": "Boolean",
            "type": "NotificationType",
            "type_in": "[NotificationType]"
          }
        },
        "Page": {
          "type": "Page",
          "args": {
            "page": "Int",
            "perPage": "Int"
          }
        },
        "Recommendation": {
          "type": "Recommendation",
          "args": {
            "id": "Int",
            "mediaId": "Int",
            "mediaRecommendationId": "Int",
            "onList": "Boolean",
            "rating": "Int",
            "rating_greater": "Int",
            "rating_lesser": "Int",
            "sort": "[RecommendationSort]",
            "userId": "Int"
          }
        },
        "Review": {
          "type": "Review",
          "args": {
            "id": "Int",
            "mediaId": "Int",
            "mediaType": "MediaType",
            "sort": "[ReviewSort]",
            "userId": "Int"
          }
        },
        "SiteStatistics": {
          "type": "SiteStatistics",
          "args": {}
        },
        "Staff": {
          "type": "Staff",
          "args": {
            "id": "Int",
            "id_in": "[Int]",
            "id_not": "Int",
            "id_not_in": "[Int]",
            "isBirthday": "Boolean",
            "search": "String",
            "sort": "[StaffSort]"
          }
        },
        "Studio": {
          "type": "Studio",
          "args": {
            "id": "Int",
            "id_in": "[Int]",
            "id_not": "Int",
            "id_not_in": "[Int]",
            "search": "String",
            "sort": "[StudioSort]"
          }
        },
        "Thread": {
          "type": "Thread",
          "args": {
            "categoryId": "Int",
            "id": "Int",
            "id_in": "[Int]",
            "mediaCategoryId": "Int",
            "replyUserId": "Int",
            "search": "String",
            "sort": "[ThreadSort]",
            "subscribed": "Boolean",
            "userId": "Int"
          }
        },
        "ThreadComment": {
          "type": "[ThreadComment]",
          "args": {
            "id": "Int",
            "sort": "[ThreadCommentSort]",
            "threadId": "Int",
            "userId": "Int"
          }
        },
        "User": {
          "type": "User",
          "args": {
            "id": "Int",
            "isModerator": "Boolean",
            "name": "String",
            "search": "String",
            "sort": "[UserSort]"
          }
        },
        "Viewer": {
          "type": "User",
          "args": {}
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
        "media": {
          "type": "Media",
          "args": {}
        },
        "mediaRecommendation": {
          "type": "Media",
          "args": {}
        },
        "rating": {
          "type": "Int",
          "args": {}
        },
        "user": {
          "type": "User",
          "args": {}
        },
        "userRating": {
          "type": "RecommendationRating",
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
        "context": {
          "type": "String",
          "args": {}
        },
        "createdAt": {
          "type": "Int",
          "args": {}
        },
        "id": {
          "type": "Int!",
          "args": {}
        },
        "media": {
          "type": "Media",
          "args": {}
        },
        "mediaId": {
          "type": "Int!",
          "args": {}
        },
        "type": {
          "type": "NotificationType",
          "args": {}
        }
      }
    },
    "Report": {
      "kind": "OBJECT",
      "fields": {
        "cleared": {
          "type": "Boolean",
          "args": {}
        },
        "createdAt": {
          "type": "Int",
          "args": {}
        },
        "id": {
          "type": "Int!",
          "args": {}
        },
        "reason": {
          "type": "String",
          "args": {}
        },
        "reported": {
          "type": "User",
          "args": {}
        },
        "reporter": {
          "type": "User",
          "args": {}
        }
      }
    },
    "Review": {
      "kind": "OBJECT",
      "fields": {
        "body": {
          "type": "String",
          "args": {
            "asHtml": "Boolean"
          }
        },
        "createdAt": {
          "type": "Int!",
          "args": {}
        },
        "id": {
          "type": "Int!",
          "args": {}
        },
        "media": {
          "type": "Media",
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
        "private": {
          "type": "Boolean",
          "args": {}
        },
        "rating": {
          "type": "Int",
          "args": {}
        },
        "ratingAmount": {
          "type": "Int",
          "args": {}
        },
        "score": {
          "type": "Int",
          "args": {}
        },
        "siteUrl": {
          "type": "String",
          "args": {}
        },
        "summary": {
          "type": "String",
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
        "userId": {
          "type": "Int!",
          "args": {}
        },
        "userRating": {
          "type": "ReviewRating",
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
        "action": {
          "type": "RevisionHistoryAction",
          "args": {}
        },
        "changes": {
          "type": "Json",
          "args": {}
        },
        "character": {
          "type": "Character",
          "args": {}
        },
        "createdAt": {
          "type": "Int",
          "args": {}
        },
        "externalLink": {
          "type": "MediaExternalLink",
          "args": {}
        },
        "id": {
          "type": "Int!",
          "args": {}
        },
        "media": {
          "type": "Media",
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
        "user": {
          "type": "User",
          "args": {}
        }
      }
    },
    "ScoreDistribution": {
      "kind": "OBJECT",
      "fields": {
        "amount": {
          "type": "Int",
          "args": {}
        },
        "score": {
          "type": "Int",
          "args": {}
        }
      }
    },
    "SiteStatistics": {
      "kind": "OBJECT",
      "fields": {
        "anime": {
          "type": "SiteTrendConnection",
          "args": {
            "page": "Int",
            "perPage": "Int",
            "sort": "[SiteTrendSort]"
          }
        },
        "characters": {
          "type": "SiteTrendConnection",
          "args": {
            "page": "Int",
            "perPage": "Int",
            "sort": "[SiteTrendSort]"
          }
        },
        "manga": {
          "type": "SiteTrendConnection",
          "args": {
            "page": "Int",
            "perPage": "Int",
            "sort": "[SiteTrendSort]"
          }
        },
        "reviews": {
          "type": "SiteTrendConnection",
          "args": {
            "page": "Int",
            "perPage": "Int",
            "sort": "[SiteTrendSort]"
          }
        },
        "staff": {
          "type": "SiteTrendConnection",
          "args": {
            "page": "Int",
            "perPage": "Int",
            "sort": "[SiteTrendSort]"
          }
        },
        "studios": {
          "type": "SiteTrendConnection",
          "args": {
            "page": "Int",
            "perPage": "Int",
            "sort": "[SiteTrendSort]"
          }
        },
        "users": {
          "type": "SiteTrendConnection",
          "args": {
            "page": "Int",
            "perPage": "Int",
            "sort": "[SiteTrendSort]"
          }
        }
      }
    },
    "SiteTrend": {
      "kind": "OBJECT",
      "fields": {
        "change": {
          "type": "Int!",
          "args": {}
        },
        "count": {
          "type": "Int!",
          "args": {}
        },
        "date": {
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
        "age": {
          "type": "Int",
          "args": {}
        },
        "bloodType": {
          "type": "String",
          "args": {}
        },
        "characterMedia": {
          "type": "MediaConnection",
          "args": {
            "onList": "Boolean",
            "page": "Int",
            "perPage": "Int",
            "sort": "[MediaSort]"
          }
        },
        "characters": {
          "type": "CharacterConnection",
          "args": {
            "page": "Int",
            "perPage": "Int",
            "sort": "[CharacterSort]"
          }
        },
        "dateOfBirth": {
          "type": "FuzzyDate",
          "args": {}
        },
        "dateOfDeath": {
          "type": "FuzzyDate",
          "args": {}
        },
        "description": {
          "type": "String",
          "args": {
            "asHtml": "Boolean"
          }
        },
        "favourites": {
          "type": "Int",
          "args": {}
        },
        "gender": {
          "type": "String",
          "args": {}
        },
        "homeTown": {
          "type": "String",
          "args": {}
        },
        "id": {
          "type": "Int!",
          "args": {}
        },
        "image": {
          "type": "StaffImage",
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
        "language": {
          "type": "StaffLanguage",
          "args": {}
        },
        "languageV2": {
          "type": "String",
          "args": {}
        },
        "modNotes": {
          "type": "String",
          "args": {}
        },
        "name": {
          "type": "StaffName",
          "args": {}
        },
        "primaryOccupations": {
          "type": "[String]",
          "args": {}
        },
        "siteUrl": {
          "type": "String",
          "args": {}
        },
        "staff": {
          "type": "Staff",
          "args": {}
        },
        "staffMedia": {
          "type": "MediaConnection",
          "args": {
            "onList": "Boolean",
            "page": "Int",
            "perPage": "Int",
            "sort": "[MediaSort]",
            "type": "MediaType"
          }
        },
        "submissionNotes": {
          "type": "String",
          "args": {}
        },
        "submissionStatus": {
          "type": "Int",
          "args": {}
        },
        "submitter": {
          "type": "User",
          "args": {}
        },
        "updatedAt": {
          "type": "Int",
          "args": {}
        },
        "yearsActive": {
          "type": "[Int]",
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
        "favouriteOrder": {
          "type": "Int",
          "args": {}
        },
        "id": {
          "type": "Int",
          "args": {}
        },
        "node": {
          "type": "Staff",
          "args": {}
        },
        "role": {
          "type": "String",
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
        "alternative": {
          "type": "[String]",
          "args": {}
        },
        "first": {
          "type": "String",
          "args": {}
        },
        "full": {
          "type": "String",
          "args": {}
        },
        "last": {
          "type": "String",
          "args": {}
        },
        "middle": {
          "type": "String",
          "args": {}
        },
        "native": {
          "type": "String",
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
        "dubGroup": {
          "type": "String",
          "args": {}
        },
        "roleNotes": {
          "type": "String",
          "args": {}
        },
        "voiceActor": {
          "type": "Staff",
          "args": {}
        }
      }
    },
    "StaffStats": {
      "kind": "OBJECT",
      "fields": {
        "amount": {
          "type": "Int",
          "args": {}
        },
        "meanScore": {
          "type": "Int",
          "args": {}
        },
        "staff": {
          "type": "Staff",
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
        "assignee": {
          "type": "User",
          "args": {}
        },
        "createdAt": {
          "type": "Int",
          "args": {}
        },
        "id": {
          "type": "Int!",
          "args": {}
        },
        "locked": {
          "type": "Boolean",
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
        "staff": {
          "type": "Staff",
          "args": {}
        },
        "status": {
          "type": "SubmissionStatus",
          "args": {}
        },
        "submission": {
          "type": "Staff",
          "args": {}
        },
        "submitter": {
          "type": "User",
          "args": {}
        }
      }
    },
    "StaffSubmissionUpdateNotification": {
      "kind": "OBJECT",
      "fields": {
        "contexts": {
          "type": "[String]",
          "args": {}
        },
        "createdAt": {
          "type": "Int",
          "args": {}
        },
        "id": {
          "type": "Int!",
          "args": {}
        },
        "notes": {
          "type": "String",
          "args": {}
        },
        "staff": {
          "type": "Staff",
          "args": {}
        },
        "status": {
          "type": "String",
          "args": {}
        },
        "type": {
          "type": "NotificationType",
          "args": {}
        }
      }
    },
    "StatusDistribution": {
      "kind": "OBJECT",
      "fields": {
        "amount": {
          "type": "Int",
          "args": {}
        },
        "status": {
          "type": "MediaListStatus",
          "args": {}
        }
      }
    },
    "Studio": {
      "kind": "OBJECT",
      "fields": {
        "favourites": {
          "type": "Int",
          "args": {}
        },
        "id": {
          "type": "Int!",
          "args": {}
        },
        "isAnimationStudio": {
          "type": "Boolean!",
          "args": {}
        },
        "isFavourite": {
          "type": "Boolean!",
          "args": {}
        },
        "media": {
          "type": "MediaConnection",
          "args": {
            "isMain": "Boolean",
            "onList": "Boolean",
            "page": "Int",
            "perPage": "Int",
            "sort": "[MediaSort]"
          }
        },
        "name": {
          "type": "String!",
          "args": {}
        },
        "siteUrl": {
          "type": "String",
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
        "favouriteOrder": {
          "type": "Int",
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
        "node": {
          "type": "Studio",
          "args": {}
        }
      }
    },
    "StudioStats": {
      "kind": "OBJECT",
      "fields": {
        "amount": {
          "type": "Int",
          "args": {}
        },
        "meanScore": {
          "type": "Int",
          "args": {}
        },
        "studio": {
          "type": "Studio",
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
        "amount": {
          "type": "Int",
          "args": {}
        },
        "meanScore": {
          "type": "Int",
          "args": {}
        },
        "tag": {
          "type": "MediaTag",
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
        "createdAt": {
          "type": "Int!",
          "args": {}
        },
        "id": {
          "type": "Int!",
          "args": {}
        },
        "isLiked": {
          "type": "Boolean",
          "args": {}
        },
        "isLocked": {
          "type": "Boolean",
          "args": {}
        },
        "isPinned": {
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
        "likes": {
          "type": "[User]",
          "args": {}
        },
        "replies": {
          "type": "[ActivityReply]",
          "args": {}
        },
        "replyCount": {
          "type": "Int!",
          "args": {}
        },
        "siteUrl": {
          "type": "String",
          "args": {}
        },
        "text": {
          "type": "String",
          "args": {
            "asHtml": "Boolean"
          }
        },
        "type": {
          "type": "ActivityType",
          "args": {}
        },
        "user": {
          "type": "User",
          "args": {}
        },
        "userId": {
          "type": "Int",
          "args": {}
        }
      }
    },
    "Thread": {
      "kind": "OBJECT",
      "fields": {
        "body": {
          "type": "String",
          "args": {
            "asHtml": "Boolean"
          }
        },
        "categories": {
          "type": "[ThreadCategory]",
          "args": {}
        },
        "createdAt": {
          "type": "Int!",
          "args": {}
        },
        "id": {
          "type": "Int!",
          "args": {}
        },
        "isLiked": {
          "type": "Boolean",
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
        "likes": {
          "type": "[User]",
          "args": {}
        },
        "mediaCategories": {
          "type": "[Media]",
          "args": {}
        },
        "repliedAt": {
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
        "replyUser": {
          "type": "User",
          "args": {}
        },
        "replyUserId": {
          "type": "Int",
          "args": {}
        },
        "siteUrl": {
          "type": "String",
          "args": {}
        },
        "title": {
          "type": "String",
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
        "userId": {
          "type": "Int!",
          "args": {}
        },
        "viewCount": {
          "type": "Int",
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
        "childComments": {
          "type": "Json",
          "args": {}
        },
        "comment": {
          "type": "String",
          "args": {
            "asHtml": "Boolean"
          }
        },
        "createdAt": {
          "type": "Int!",
          "args": {}
        },
        "id": {
          "type": "Int!",
          "args": {}
        },
        "isLiked": {
          "type": "Boolean",
          "args": {}
        },
        "isLocked": {
          "type": "Boolean",
          "args": {}
        },
        "likeCount": {
          "type": "Int!",
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
        "thread": {
          "type": "Thread",
          "args": {}
        },
        "threadId": {
          "type": "Int",
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
        "userId": {
          "type": "Int",
          "args": {}
        }
      }
    },
    "ThreadCommentLikeNotification": {
      "kind": "OBJECT",
      "fields": {
        "comment": {
          "type": "ThreadComment",
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
        "id": {
          "type": "Int!",
          "args": {}
        },
        "thread": {
          "type": "Thread",
          "args": {}
        },
        "type": {
          "type": "NotificationType",
          "args": {}
        },
        "user": {
          "type": "User",
          "args": {}
        },
        "userId": {
          "type": "Int!",
          "args": {}
        }
      }
    },
    "ThreadCommentMentionNotification": {
      "kind": "OBJECT",
      "fields": {
        "comment": {
          "type": "ThreadComment",
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
        "id": {
          "type": "Int!",
          "args": {}
        },
        "thread": {
          "type": "Thread",
          "args": {}
        },
        "type": {
          "type": "NotificationType",
          "args": {}
        },
        "user": {
          "type": "User",
          "args": {}
        },
        "userId": {
          "type": "Int!",
          "args": {}
        }
      }
    },
    "ThreadCommentReplyNotification": {
      "kind": "OBJECT",
      "fields": {
        "comment": {
          "type": "ThreadComment",
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
        "id": {
          "type": "Int!",
          "args": {}
        },
        "thread": {
          "type": "Thread",
          "args": {}
        },
        "type": {
          "type": "NotificationType",
          "args": {}
        },
        "user": {
          "type": "User",
          "args": {}
        },
        "userId": {
          "type": "Int!",
          "args": {}
        }
      }
    },
    "ThreadCommentSubscribedNotification": {
      "kind": "OBJECT",
      "fields": {
        "comment": {
          "type": "ThreadComment",
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
        "id": {
          "type": "Int!",
          "args": {}
        },
        "thread": {
          "type": "Thread",
          "args": {}
        },
        "type": {
          "type": "NotificationType",
          "args": {}
        },
        "user": {
          "type": "User",
          "args": {}
        },
        "userId": {
          "type": "Int!",
          "args": {}
        }
      }
    },
    "ThreadLikeNotification": {
      "kind": "OBJECT",
      "fields": {
        "comment": {
          "type": "ThreadComment",
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
        "id": {
          "type": "Int!",
          "args": {}
        },
        "thread": {
          "type": "Thread",
          "args": {}
        },
        "threadId": {
          "type": "Int!",
          "args": {}
        },
        "type": {
          "type": "NotificationType",
          "args": {}
        },
        "user": {
          "type": "User",
          "args": {}
        },
        "userId": {
          "type": "Int!",
          "args": {}
        }
      }
    },
    "User": {
      "kind": "OBJECT",
      "fields": {
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
        "bans": {
          "type": "Json",
          "args": {}
        },
        "createdAt": {
          "type": "Int",
          "args": {}
        },
        "donatorBadge": {
          "type": "String",
          "args": {}
        },
        "donatorTier": {
          "type": "Int",
          "args": {}
        },
        "favourites": {
          "type": "Favourites",
          "args": {
            "page": "Int"
          }
        },
        "id": {
          "type": "Int!",
          "args": {}
        },
        "isBlocked": {
          "type": "Boolean",
          "args": {}
        },
        "isFollower": {
          "type": "Boolean",
          "args": {}
        },
        "isFollowing": {
          "type": "Boolean",
          "args": {}
        },
        "mediaListOptions": {
          "type": "MediaListOptions",
          "args": {}
        },
        "moderatorRoles": {
          "type": "[ModRole]",
          "args": {}
        },
        "moderatorStatus": {
          "type": "String",
          "args": {}
        },
        "name": {
          "type": "String!",
          "args": {}
        },
        "options": {
          "type": "UserOptions",
          "args": {}
        },
        "previousNames": {
          "type": "[UserPreviousName]",
          "args": {}
        },
        "siteUrl": {
          "type": "String",
          "args": {}
        },
        "statistics": {
          "type": "UserStatisticTypes",
          "args": {}
        },
        "stats": {
          "type": "UserStats",
          "args": {}
        },
        "unreadNotificationCount": {
          "type": "Int",
          "args": {}
        },
        "updatedAt": {
          "type": "Int",
          "args": {}
        }
      }
    },
    "UserActivityHistory": {
      "kind": "OBJECT",
      "fields": {
        "amount": {
          "type": "Int",
          "args": {}
        },
        "date": {
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
        "chaptersRead": {
          "type": "Int!",
          "args": {}
        },
        "count": {
          "type": "Int!",
          "args": {}
        },
        "country": {
          "type": "CountryCode",
          "args": {}
        },
        "meanScore": {
          "type": "Float!",
          "args": {}
        },
        "mediaIds": {
          "type": "[Int]!",
          "args": {}
        },
        "minutesWatched": {
          "type": "Int!",
          "args": {}
        }
      }
    },
    "UserFormatStatistic": {
      "kind": "OBJECT",
      "fields": {
        "chaptersRead": {
          "type": "Int!",
          "args": {}
        },
        "count": {
          "type": "Int!",
          "args": {}
        },
        "format": {
          "type": "MediaFormat",
          "args": {}
        },
        "meanScore": {
          "type": "Float!",
          "args": {}
        },
        "mediaIds": {
          "type": "[Int]!",
          "args": {}
        },
        "minutesWatched": {
          "type": "Int!",
          "args": {}
        }
      }
    },
    "UserGenreStatistic": {
      "kind": "OBJECT",
      "fields": {
        "chaptersRead": {
          "type": "Int!",
          "args": {}
        },
        "count": {
          "type": "Int!",
          "args": {}
        },
        "genre": {
          "type": "String",
          "args": {}
        },
        "meanScore": {
          "type": "Float!",
          "args": {}
        },
        "mediaIds": {
          "type": "[Int]!",
          "args": {}
        },
        "minutesWatched": {
          "type": "Int!",
          "args": {}
        }
      }
    },
    "UserLengthStatistic": {
      "kind": "OBJECT",
      "fields": {
        "chaptersRead": {
          "type": "Int!",
          "args": {}
        },
        "count": {
          "type": "Int!",
          "args": {}
        },
        "length": {
          "type": "String",
          "args": {}
        },
        "meanScore": {
          "type": "Float!",
          "args": {}
        },
        "mediaIds": {
          "type": "[Int]!",
          "args": {}
        },
        "minutesWatched": {
          "type": "Int!",
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
        "counts": {
          "type": "Json",
          "args": {}
        },
        "email": {
          "type": "String",
          "args": {}
        },
        "ip": {
          "type": "Json",
          "args": {}
        },
        "privacy": {
          "type": "Int",
          "args": {}
        }
      }
    },
    "UserOptions": {
      "kind": "OBJECT",
      "fields": {
        "activityMergeTime": {
          "type": "Int",
          "args": {}
        },
        "airingNotifications": {
          "type": "Boolean",
          "args": {}
        },
        "disabledListActivity": {
          "type": "[ListActivityOption]",
          "args": {}
        },
        "displayAdultContent": {
          "type": "Boolean",
          "args": {}
        },
        "notificationOptions": {
          "type": "[NotificationOption]",
          "args": {}
        },
        "profileColor": {
          "type": "String",
          "args": {}
        },
        "restrictMessagesToFollowing": {
          "type": "Boolean",
          "args": {}
        },
        "staffNameLanguage": {
          "type": "UserStaffNameLanguage",
          "args": {}
        },
        "timezone": {
          "type": "String",
          "args": {}
        },
        "titleLanguage": {
          "type": "UserTitleLanguage",
          "args": {}
        }
      }
    },
    "UserPreviousName": {
      "kind": "OBJECT",
      "fields": {
        "createdAt": {
          "type": "Int",
          "args": {}
        },
        "name": {
          "type": "String",
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
        "chaptersRead": {
          "type": "Int!",
          "args": {}
        },
        "count": {
          "type": "Int!",
          "args": {}
        },
        "meanScore": {
          "type": "Float!",
          "args": {}
        },
        "mediaIds": {
          "type": "[Int]!",
          "args": {}
        },
        "minutesWatched": {
          "type": "Int!",
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
        "chaptersRead": {
          "type": "Int!",
          "args": {}
        },
        "count": {
          "type": "Int!",
          "args": {}
        },
        "meanScore": {
          "type": "Float!",
          "args": {}
        },
        "mediaIds": {
          "type": "[Int]!",
          "args": {}
        },
        "minutesWatched": {
          "type": "Int!",
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
        "chaptersRead": {
          "type": "Int!",
          "args": {}
        },
        "count": {
          "type": "Int!",
          "args": {}
        },
        "meanScore": {
          "type": "Float!",
          "args": {}
        },
        "mediaIds": {
          "type": "[Int]!",
          "args": {}
        },
        "minutesWatched": {
          "type": "Int!",
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
        "chaptersRead": {
          "type": "Int!",
          "args": {}
        },
        "count": {
          "type": "Int!",
          "args": {}
        },
        "meanScore": {
          "type": "Float!",
          "args": {}
        },
        "mediaIds": {
          "type": "[Int]!",
          "args": {}
        },
        "minutesWatched": {
          "type": "Int!",
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
        "chaptersRead": {
          "type": "Int!",
          "args": {}
        },
        "count": {
          "type": "Int!",
          "args": {}
        },
        "countries": {
          "type": "[UserCountryStatistic]",
          "args": {
            "limit": "Int",
            "sort": "[UserStatisticsSort]"
          }
        },
        "episodesWatched": {
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
        "genres": {
          "type": "[UserGenreStatistic]",
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
        "meanScore": {
          "type": "Float!",
          "args": {}
        },
        "minutesWatched": {
          "type": "Int!",
          "args": {}
        },
        "releaseYears": {
          "type": "[UserReleaseYearStatistic]",
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
        "staff": {
          "type": "[UserStaffStatistic]",
          "args": {
            "limit": "Int",
            "sort": "[UserStatisticsSort]"
          }
        },
        "standardDeviation": {
          "type": "Float!",
          "args": {}
        },
        "startYears": {
          "type": "[UserStartYearStatistic]",
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
        "studios": {
          "type": "[UserStudioStatistic]",
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
        "voiceActors": {
          "type": "[UserVoiceActorStatistic]",
          "args": {
            "limit": "Int",
            "sort": "[UserStatisticsSort]"
          }
        },
        "volumesRead": {
          "type": "Int!",
          "args": {}
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
        "activityHistory": {
          "type": "[UserActivityHistory]",
          "args": {}
        },
        "animeListScores": {
          "type": "ListScoreStats",
          "args": {}
        },
        "animeScoreDistribution": {
          "type": "[ScoreDistribution]",
          "args": {}
        },
        "animeStatusDistribution": {
          "type": "[StatusDistribution]",
          "args": {}
        },
        "chaptersRead": {
          "type": "Int",
          "args": {}
        },
        "favouredActors": {
          "type": "[StaffStats]",
          "args": {}
        },
        "favouredFormats": {
          "type": "[FormatStats]",
          "args": {}
        },
        "favouredGenres": {
          "type": "[GenreStats]",
          "args": {}
        },
        "favouredGenresOverview": {
          "type": "[GenreStats]",
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
        "favouredTags": {
          "type": "[TagStats]",
          "args": {}
        },
        "favouredYears": {
          "type": "[YearStats]",
          "args": {}
        },
        "mangaListScores": {
          "type": "ListScoreStats",
          "args": {}
        },
        "mangaScoreDistribution": {
          "type": "[ScoreDistribution]",
          "args": {}
        },
        "mangaStatusDistribution": {
          "type": "[StatusDistribution]",
          "args": {}
        },
        "watchedTime": {
          "type": "Int",
          "args": {}
        }
      }
    },
    "UserStatusStatistic": {
      "kind": "OBJECT",
      "fields": {
        "chaptersRead": {
          "type": "Int!",
          "args": {}
        },
        "count": {
          "type": "Int!",
          "args": {}
        },
        "meanScore": {
          "type": "Float!",
          "args": {}
        },
        "mediaIds": {
          "type": "[Int]!",
          "args": {}
        },
        "minutesWatched": {
          "type": "Int!",
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
        "chaptersRead": {
          "type": "Int!",
          "args": {}
        },
        "count": {
          "type": "Int!",
          "args": {}
        },
        "meanScore": {
          "type": "Float!",
          "args": {}
        },
        "mediaIds": {
          "type": "[Int]!",
          "args": {}
        },
        "minutesWatched": {
          "type": "Int!",
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
        "chaptersRead": {
          "type": "Int!",
          "args": {}
        },
        "count": {
          "type": "Int!",
          "args": {}
        },
        "meanScore": {
          "type": "Float!",
          "args": {}
        },
        "mediaIds": {
          "type": "[Int]!",
          "args": {}
        },
        "minutesWatched": {
          "type": "Int!",
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
        "chaptersRead": {
          "type": "Int!",
          "args": {}
        },
        "characterIds": {
          "type": "[Int]!",
          "args": {}
        },
        "count": {
          "type": "Int!",
          "args": {}
        },
        "meanScore": {
          "type": "Float!",
          "args": {}
        },
        "mediaIds": {
          "type": "[Int]!",
          "args": {}
        },
        "minutesWatched": {
          "type": "Int!",
          "args": {}
        },
        "voiceActor": {
          "type": "Staff",
          "args": {}
        }
      }
    },
    "YearStats": {
      "kind": "OBJECT",
      "fields": {
        "amount": {
          "type": "Int",
          "args": {}
        },
        "meanScore": {
          "type": "Int",
          "args": {}
        },
        "year": {
          "type": "Int",
          "args": {}
        }
      }
    },
    "ActivityUnion": {
      "kind": "UNION",
      "members": [
        "ListActivity",
        "MessageActivity",
        "TextActivity"
      ]
    },
    "LikeableUnion": {
      "kind": "UNION",
      "members": [
        "ActivityReply",
        "ListActivity",
        "MessageActivity",
        "TextActivity",
        "Thread",
        "ThreadComment"
      ]
    },
    "NotificationUnion": {
      "kind": "UNION",
      "members": [
        "ActivityLikeNotification",
        "ActivityMentionNotification",
        "ActivityMessageNotification",
        "ActivityReplyLikeNotification",
        "ActivityReplyNotification",
        "ActivityReplySubscribedNotification",
        "AiringNotification",
        "CharacterSubmissionUpdateNotification",
        "FollowingNotification",
        "MediaDataChangeNotification",
        "MediaDeletionNotification",
        "MediaMergeNotification",
        "MediaSubmissionUpdateNotification",
        "RelatedMediaAdditionNotification",
        "StaffSubmissionUpdateNotification",
        "ThreadCommentLikeNotification",
        "ThreadCommentMentionNotification",
        "ThreadCommentReplyNotification",
        "ThreadCommentSubscribedNotification",
        "ThreadLikeNotification"
      ]
    }
  }
} as const;
