
import { Variables } from "graphql-request";
import { createHash } from "crypto";

import { AllowedQuery, QUERIES } from "../constants/queries";
import { Character } from "../Characters";
import { Media } from "../Media";
import { AniListCharacter, AniListMedia } from "../types/aniList";

export class Query {
    type: AllowedQuery
    document: string;
    variables?: Variables
    include: string[];
    NormalizeClass: typeof Character | typeof Media;

    constructor(typeOfQuery: AllowedQuery) {
        const queryInfo = QUERIES[typeOfQuery];
        this.document = queryInfo.document;
        this.NormalizeClass = queryInfo.normalize;

        this.type = typeOfQuery;
        this.include = [];
    }

    setInclude(include: string[]) {
        this.include = include;

        const cleanKeys = [];
        for (let key of include) {
            // TODO
            if (typeof key === "object") {
                key = `${key} { ${Object.keys(key)} }`
            };

            cleanKeys.push(key)
        }

        this.document = this.document.replace(/INCLUDE/, cleanKeys.join(", "));
    }

    setVariables(variables: Variables) {
        this.variables = variables;
    }

    normalize(aniListResponse: AniListCharacter | AniListMedia) {
        if (this.type === "characters" && aniListResponse._type === "characters") {
            return new Character(aniListResponse);
        } else if (this.type === "media" && aniListResponse._type === "media") {
            return new Media(aniListResponse);
        } else {
            throw new Error(`Invalid loopOver value: ${this.type}`);
        }
    }

    get uuid() {
        const sortedQuery = this.include.slice().sort().join("");

        return createHash("sha256").update(sortedQuery).digest("hex");
    }
};