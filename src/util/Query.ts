import { Variables } from 'graphql-request';
import { createHash } from 'crypto';

import { AllowedQuery, QUERIES } from '../constants/queries';
import { Character } from '../classes/Characters';
import { Media } from '../classes/Media';
import { AniListRequestable, AniListReturnableTypes } from '../types/aniList';
import { Client } from '..';
import { User } from '../classes/Users';
import { Stats } from '../classes/Stats';

export class Query {
  type: AllowedQuery;
  document: string;
  variables?: Variables;
  include: string[];
  NormalizeClass?: AniListReturnableTypes;

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
    for (const key of include) {
      // TODO
      if (key.includes('.')) {
        const [objKey, value] = key.split('.');
        cleanKeys.push(`${objKey} { ${value} }`);
      } else {
        cleanKeys.push(key);
      }
    }

    this.document = this.document.replace(/INCLUDE/, cleanKeys.join(', '));
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
    } else if (this.type === 'stats' && aniListResponse._type === 'stats') {
      return new Stats(client, aniListResponse);
    }  else {
      throw new Error(`Invalid loopOver value: ${this.type}`);
    }
  }

  get uuid() {
    const sortedQuery = this.include.slice().sort().join('');

    return `${this.type}:${createHash('sha256').update(sortedQuery).digest('hex')}`;
  }
}
