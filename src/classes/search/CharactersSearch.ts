import { Client } from '../..';
import { Character } from '../Characters';
import { Search } from '../Search';

export class CharactersSearch extends Search<Character> {
  constructor(client: Client) {
    super(client, 'characters');
  }
}
