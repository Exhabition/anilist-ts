import { Client } from '../..';
import { Search } from '../Search';
import { Stats } from '../Stats';

export class StatsSearch extends Search<Stats> {
  constructor(client: Client) {
    super(client, 'stats');
  }
}
