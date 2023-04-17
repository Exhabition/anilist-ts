import { RedisClientOptions, createClient } from "redis";

import { CharactersSearch } from "./Characters";
import { Fetcher } from "./Fetcher";
import { MediaSearch } from "./Media";

import { allowedQueries } from "./constants/queries";

export enum LoggingLevel {
    WARNINGS = 1,
    ALL = 2,
}

export interface ClientSettings {
    redis?: {
        settings?: RedisClientOptions;
        client?: ReturnType<typeof createClient>
        expire?: {
            [K in typeof allowedQueries[number]]?: number;
        }
    },
    logging?: LoggingLevel
}

/**
 * Represents a client for accessing the API.
 * @public
 */
export class Client {
    /**
     * The API key used for authentication.
     * @private
     */
    _apiKey?: string;
    /**
     * The settings object for the client.
     * @public
     */
    settings: ClientSettings;
    /**
     * The fetcher object used for making API requests.
     * @public
     */
    fetcher: Fetcher;
    /**
     * The characters search object for searching for characters.
     * @public
     */
    characters: CharactersSearch;
    /**
     * The media search object for searching for media.
     * @public
     */
    media: MediaSearch;
    /**
     * The Redis client object used for caching.
     * @public
     */
    redis?: ReturnType<typeof createClient>;

    /**
     * Creates an instance of Client.
     * @param {string} [apiKey] The API key used for authentication.
     * @param {ClientSettings} [clientSettings] The settings object for the client.
     * @example 
     * Basis example with API key
     * ```ts
     * const client = new Client("mySecretKey");
     * ```
     * @example 
     * Example with API key & redis connect details
     * ```ts
     * const client = new Client("mySecretKey", {
     *      redis: {
     *          url: "redis://host:port",
     *          password: "mySecretPassword",
     *          expire: {
     *              media: 60 // cached media entries expire after x seconds
     *          }
     *      }
     * });
     * ```
     */
    constructor(apiKey?: string, clientSettings?: ClientSettings) {
        this._apiKey = apiKey;
        this.settings = clientSettings || {};
        this.fetcher = new Fetcher(this);

        this.characters = new CharactersSearch(this);
        this.media = new MediaSearch(this);

        if ((this.settings.redis?.settings || this.settings.redis?.client) && !this.redis) {
            this.redis = this.settings.redis?.client || createClient(this.settings.redis.settings);

            if (!this.redis.isReady) {
                this.redis.connect();
            }
        }
    }
}
