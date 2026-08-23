import type { MutationSelection, QuerySelection } from './generated/schema.js';
import type { RequestOptions } from './transport.js';

export interface EntityContext {
  readonly authenticated: boolean;
  executeQuery(selection: QuerySelection, options?: RequestOptions): Promise<Record<string, unknown>>;
  executeMutation(selection: MutationSelection, options?: RequestOptions): Promise<Record<string, unknown>>;
}
