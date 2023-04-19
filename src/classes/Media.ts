import { Client } from "../index";
import { Search } from "./Search";
import { AllowedQuery } from "../constants/queries";
import { AniListMedia } from "../types/aniList";

export class MediaSearch extends Search<Media> {
    constructor(client: Client) {
        super(client, "media");
    }
}

export class Media {
    id?: number;
    private _client: Client

    constructor(client: Client, aniListResponse: AniListMedia) {
        if (aniListResponse.id) this.id = aniListResponse.id;

        this._client = client;
    }
}