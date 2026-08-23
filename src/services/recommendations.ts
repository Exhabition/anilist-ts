import type { EntityContext } from '../context.js';
import type {
  MutationSaveRecommendationArgs,
  RecommendationData,
  RecommendationSelection,
} from '../generated/schema.js';
import type { RequestOptions } from '../transport.js';
import { mutate, type Selected } from './mutation.js';

export class RecommendationService {
  constructor(private readonly context: EntityContext) {}

  async save<const TSelection extends RecommendationSelection>(
    args: MutationSaveRecommendationArgs,
    selection: TSelection,
    options?: RequestOptions,
  ): Promise<Selected<RecommendationData, TSelection> | null> {
    return (await mutate(this.context, 'SaveRecommendation', args, selection, options)) as Selected<
      RecommendationData,
      TSelection
    > | null;
  }
}
