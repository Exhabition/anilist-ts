import { Variables } from 'graphql-request';
import { createHash } from 'crypto';

import { AllowedQuery, QUERIES, QueryInclusion } from '../constants/queries';
import { Character } from '../classes/Characters';
import { Media } from '../classes/Media';
import { AniListRequestable, AniListReturnableTypes } from '../types/aniList';
import { Client } from '..';
import { User } from '../classes/Users';

export class Query<R> {
  type: AllowedQuery;
  document: string;
  variables?: Variables;
  include: string;
  NormalizeClass?: AniListReturnableTypes;

  constructor(typeOfQuery: AllowedQuery) {
    const queryInfo = QUERIES[typeOfQuery];
    this.document = queryInfo.document;
    this.NormalizeClass = queryInfo.normalize;

    this.type = typeOfQuery;
    this.include = "";
  }

  setInclude(include: QueryInclusion<R>) {
    const cleanInclusion = this.convertInclusion(include);
    this.include = cleanInclusion;

    this.document = this.document.replace(/INCLUDE/, cleanInclusion);
  }

  setVariables(variables: Variables) {
    this.variables = variables;
  }

  normalize(client: Client, aniListResponse: AniListRequestable) {
    if (this.type === 'characters' && aniListResponse._type === 'characters') {
      return new Character(client, aniListResponse);
    } else if (this.type === 'media' && aniListResponse._type === 'media') {
      return new Media(client, aniListResponse);
    } else if (this.type === 'users' && aniListResponse._type === 'users') {
      return new User(client, aniListResponse);
    } else {
      throw new Error(`Invalid loopOver value: ${this.type}`);
    }
  }

  getKeysFromObject(key: string, value: QueryInclusion<R>): string {
    console.log(key, value)
    if (typeof value === 'boolean') {
      if (value) {
        return key + " ";
      }
    } else if (Array.isArray(value)) {
      return key + ` { ${value.join(" ") } }`;
    } else if (typeof value === "object") {
      let nestedResult = "";
  
      for (const nestedKey in value) {
        if (Object.prototype.hasOwnProperty.call(value, nestedKey)) {
          const nestedValue = value[nestedKey as keyof typeof value];
          if (!nestedValue) continue;

          nestedResult += this.getKeysFromObject(nestedKey, nestedValue);
        }
      }
  
      return key + ` { ${nestedResult} } `;
    }

    return "";
  }

  convertInclusion(include: QueryInclusion<R>): string {
    let result = "";

    for (const key in include) {
      if (Object.prototype.hasOwnProperty.call(include, key)) {
        const value = include[key as keyof typeof include];
        if (!value) continue;

        result += this.getKeysFromObject(key, value);
      }
    }

    return result.slice(0, -1);
  }

  get uuid() {
    return `${this.type}:${createHash('sha256').update(this.include).digest('hex')}`;
  }
}
