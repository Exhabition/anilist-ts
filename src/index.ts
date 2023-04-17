import { RedisClientOptions } from "redis";

import { CharactersSearch } from "./Characters";
import { Fetcher } from "./Fetcher";
import { MediaSearch } from "./Media";

export interface ClientSettings {
    redis?: {
        settings: RedisClientOptions;
    }
}

export class Client {
    apiKey?: string;
    clientSettings: ClientSettings;
    fetcher: Fetcher;

    characters: CharactersSearch;
    media: MediaSearch;

    constructor(apiKey?: string, clientSettings?: ClientSettings) {
        this.apiKey = apiKey;
        this.clientSettings = clientSettings || {};
        this.fetcher = new Fetcher(this);

        this.characters = new CharactersSearch(this);
        this.media = new MediaSearch(this);
    }
}

const testClient = new Client()

testClient.characters.getById(11, ["id", "description", "name"]).then(data => {
    console.log(data.id);
});

testClient.characters.getByQuery("test", true, ["description", "id", "name"]).then(data => {
    data.characters.map(char => {
        console.log(char);
    });
});

testClient.media.getById(1, ["id", "description"]).then(data => {
    console.log(data.description);
});

testClient.media.getByQuery("test", false, ["description", "bannerImage"]).then(data => {
    console.log(data.map(media => {
        console.log(media.bannerImage);
    }));
});