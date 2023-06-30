import { Client } from '../..';
import { Search } from '../Search';
import { User } from '../Users';

export class UsersSearch extends Search<User> {
  constructor(client: Client) {
    super(client, 'users');
  }
}
