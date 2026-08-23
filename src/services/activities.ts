import type { EntityContext } from '../context.js';
import type {
  ActivityReplyData,
  ActivityReplySelection,
  ActivityUnionData,
  ActivityUnionSelection,
  DeletedData,
  DeletedSelection,
  ListActivitySelection,
  MessageActivitySelection,
  MutationData,
  MutationDeleteActivityArgs,
  MutationDeleteActivityReplyArgs,
  MutationSaveActivityReplyArgs,
  MutationSaveListActivityArgs,
  MutationSaveMessageActivityArgs,
  MutationSaveTextActivityArgs,
  MutationToggleActivityPinArgs,
  MutationToggleActivitySubscriptionArgs,
  MutationToggleLikeArgs,
  TextActivitySelection,
  UserSelection,
} from '../generated/schema.js';
import type { RequestOptions } from '../transport.js';
import { mutate, type Selected } from './mutation.js';

export class ActivityService {
  constructor(private readonly context: EntityContext) {}

  async createText<const TSelection extends TextActivitySelection>(
    args: MutationSaveTextActivityArgs,
    selection: TSelection,
    options?: RequestOptions,
  ): Promise<Selected<NonNullable<MutationData['SaveTextActivity']>, TSelection> | null> {
    return (await mutate(this.context, 'SaveTextActivity', args, selection, options)) as Selected<
      NonNullable<MutationData['SaveTextActivity']>,
      TSelection
    >;
  }

  async createMessage<const TSelection extends MessageActivitySelection>(
    args: MutationSaveMessageActivityArgs,
    selection: TSelection,
    options?: RequestOptions,
  ): Promise<Selected<NonNullable<MutationData['SaveMessageActivity']>, TSelection> | null> {
    return (await mutate(this.context, 'SaveMessageActivity', args, selection, options)) as Selected<
      NonNullable<MutationData['SaveMessageActivity']>,
      TSelection
    >;
  }

  async saveList<const TSelection extends ListActivitySelection>(
    args: MutationSaveListActivityArgs,
    selection: TSelection,
    options?: RequestOptions,
  ): Promise<Selected<NonNullable<MutationData['SaveListActivity']>, TSelection> | null> {
    return (await mutate(this.context, 'SaveListActivity', args, selection, options)) as Selected<
      NonNullable<MutationData['SaveListActivity']>,
      TSelection
    > | null;
  }

  async delete<const TSelection extends DeletedSelection>(
    args: MutationDeleteActivityArgs,
    selection: TSelection,
    options?: RequestOptions,
  ): Promise<Selected<DeletedData, TSelection> | null> {
    return (await mutate(this.context, 'DeleteActivity', args, selection, options)) as Selected<
      DeletedData,
      TSelection
    > | null;
  }

  async toggleLike<const TSelection extends UserSelection>(
    args: MutationToggleLikeArgs,
    selection: TSelection,
    options?: RequestOptions,
  ): Promise<ReadonlyArray<Selected<NonNullable<MutationData['ToggleLike']>[number], TSelection> | null> | null> {
    return (await mutate(this.context, 'ToggleLike', args, selection, options)) as ReadonlyArray<Selected<
      NonNullable<MutationData['ToggleLike']>[number],
      TSelection
    > | null> | null;
  }

  async togglePin<const TSelection extends ActivityUnionSelection>(
    args: MutationToggleActivityPinArgs,
    selection: TSelection,
    options?: RequestOptions,
  ): Promise<Selected<ActivityUnionData, TSelection> | null> {
    return (await mutate(this.context, 'ToggleActivityPin', args, selection, options)) as Selected<
      ActivityUnionData,
      TSelection
    > | null;
  }

  async toggleSubscription<const TSelection extends ActivityUnionSelection>(
    args: MutationToggleActivitySubscriptionArgs,
    selection: TSelection,
    options?: RequestOptions,
  ): Promise<Selected<ActivityUnionData, TSelection> | null> {
    return (await mutate(this.context, 'ToggleActivitySubscription', args, selection, options)) as Selected<
      ActivityUnionData,
      TSelection
    > | null;
  }

  async reply<const TSelection extends ActivityReplySelection>(
    args: MutationSaveActivityReplyArgs,
    selection: TSelection,
    options?: RequestOptions,
  ): Promise<Selected<ActivityReplyData, TSelection> | null> {
    return (await mutate(this.context, 'SaveActivityReply', args, selection, options)) as Selected<
      ActivityReplyData,
      TSelection
    > | null;
  }

  async deleteReply<const TSelection extends DeletedSelection>(
    args: MutationDeleteActivityReplyArgs,
    selection: TSelection,
    options?: RequestOptions,
  ): Promise<Selected<DeletedData, TSelection> | null> {
    return (await mutate(this.context, 'DeleteActivityReply', args, selection, options)) as Selected<
      DeletedData,
      TSelection
    > | null;
  }
}
