import type { EntityContext } from '../context.js';
import type {
  DeletedData,
  DeletedSelection,
  MutationDeleteReviewArgs,
  MutationRateReviewArgs,
  MutationSaveReviewArgs,
  ReviewData,
  ReviewSelection,
} from '../generated/schema.js';
import type { RequestOptions } from '../transport.js';
import { mutate, type Selected } from './mutation.js';

export class ReviewService {
  constructor(private readonly context: EntityContext) {}

  async save<const TSelection extends ReviewSelection>(
    args: MutationSaveReviewArgs,
    selection: TSelection,
    options?: RequestOptions,
  ): Promise<Selected<ReviewData, TSelection> | null> {
    return (await mutate(this.context, 'SaveReview', args, selection, options)) as Selected<
      ReviewData,
      TSelection
    > | null;
  }

  async delete<const TSelection extends DeletedSelection>(
    args: MutationDeleteReviewArgs,
    selection: TSelection,
    options?: RequestOptions,
  ): Promise<Selected<DeletedData, TSelection> | null> {
    return (await mutate(this.context, 'DeleteReview', args, selection, options)) as Selected<
      DeletedData,
      TSelection
    > | null;
  }

  async rate<const TSelection extends ReviewSelection>(
    args: MutationRateReviewArgs,
    selection: TSelection,
    options?: RequestOptions,
  ): Promise<Selected<ReviewData, TSelection> | null> {
    return (await mutate(this.context, 'RateReview', args, selection, options)) as Selected<
      ReviewData,
      TSelection
    > | null;
  }
}
