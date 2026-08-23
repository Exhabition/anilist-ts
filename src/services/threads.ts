import type { EntityContext } from '../context.js';
import type {
  DeletedData,
  DeletedSelection,
  MutationDeleteThreadArgs,
  MutationDeleteThreadCommentArgs,
  MutationSaveThreadArgs,
  MutationSaveThreadCommentArgs,
  MutationToggleThreadSubscriptionArgs,
  ThreadCommentData,
  ThreadCommentSelection,
  ThreadData,
  ThreadSelection,
} from '../generated/schema.js';
import type { RequestOptions } from '../transport.js';
import { mutate, type Selected } from './mutation.js';

export class ThreadService {
  constructor(private readonly context: EntityContext) {}

  async save<const TSelection extends ThreadSelection>(
    args: MutationSaveThreadArgs,
    selection: TSelection,
    options?: RequestOptions,
  ): Promise<Selected<ThreadData, TSelection> | null> {
    return (await mutate(this.context, 'SaveThread', args, selection, options)) as Selected<
      ThreadData,
      TSelection
    > | null;
  }

  async delete<const TSelection extends DeletedSelection>(
    args: MutationDeleteThreadArgs,
    selection: TSelection,
    options?: RequestOptions,
  ): Promise<Selected<DeletedData, TSelection> | null> {
    return (await mutate(this.context, 'DeleteThread', args, selection, options)) as Selected<
      DeletedData,
      TSelection
    > | null;
  }

  async comment<const TSelection extends ThreadCommentSelection>(
    args: MutationSaveThreadCommentArgs,
    selection: TSelection,
    options?: RequestOptions,
  ): Promise<Selected<ThreadCommentData, TSelection> | null> {
    return (await mutate(this.context, 'SaveThreadComment', args, selection, options)) as Selected<
      ThreadCommentData,
      TSelection
    > | null;
  }

  async deleteComment<const TSelection extends DeletedSelection>(
    args: MutationDeleteThreadCommentArgs,
    selection: TSelection,
    options?: RequestOptions,
  ): Promise<Selected<DeletedData, TSelection> | null> {
    return (await mutate(this.context, 'DeleteThreadComment', args, selection, options)) as Selected<
      DeletedData,
      TSelection
    > | null;
  }

  async toggleSubscription<const TSelection extends ThreadSelection>(
    args: MutationToggleThreadSubscriptionArgs,
    selection: TSelection,
    options?: RequestOptions,
  ): Promise<Selected<ThreadData, TSelection> | null> {
    return (await mutate(this.context, 'ToggleThreadSubscription', args, selection, options)) as Selected<
      ThreadData,
      TSelection
    > | null;
  }
}
