import type { EntityContext } from '../context.js';
import type {
  DeletedData,
  DeletedSelection,
  MediaListData,
  MediaListSelection,
  MutationDeleteCustomListArgs,
  MutationDeleteMediaListEntryArgs,
  MutationSaveMediaListEntryArgs,
  MutationUpdateMediaListEntriesArgs,
} from '../generated/schema.js';
import type { RequestOptions } from '../transport.js';
import { mutate, type Selected } from './mutation.js';

export class MediaListService {
  constructor(private readonly context: EntityContext) {}

  async saveEntry<const TSelection extends MediaListSelection>(
    args: MutationSaveMediaListEntryArgs,
    selection: TSelection,
    options?: RequestOptions,
  ): Promise<Selected<MediaListData, TSelection> | null> {
    return (await mutate(this.context, 'SaveMediaListEntry', args, selection, options)) as Selected<
      MediaListData,
      TSelection
    > | null;
  }

  async updateEntries<const TSelection extends MediaListSelection>(
    args: MutationUpdateMediaListEntriesArgs,
    selection: TSelection,
    options?: RequestOptions,
  ): Promise<ReadonlyArray<Selected<MediaListData, TSelection> | null> | null> {
    return (await mutate(this.context, 'UpdateMediaListEntries', args, selection, options)) as ReadonlyArray<Selected<
      MediaListData,
      TSelection
    > | null> | null;
  }

  async deleteEntry<const TSelection extends DeletedSelection>(
    args: MutationDeleteMediaListEntryArgs,
    selection: TSelection,
    options?: RequestOptions,
  ): Promise<Selected<DeletedData, TSelection> | null> {
    return (await mutate(this.context, 'DeleteMediaListEntry', args, selection, options)) as Selected<
      DeletedData,
      TSelection
    > | null;
  }

  async deleteCustomList<const TSelection extends DeletedSelection>(
    args: MutationDeleteCustomListArgs,
    selection: TSelection,
    options?: RequestOptions,
  ): Promise<Selected<DeletedData, TSelection> | null> {
    return (await mutate(this.context, 'DeleteCustomList', args, selection, options)) as Selected<
      DeletedData,
      TSelection
    > | null;
  }
}
