import { Client } from '../..';
import { Media } from '../Media';
import { Search } from '../Search';

export class MediaSearch extends Search<Media> {
  constructor(client: Client) {
    super(client, 'media');
  }
}
