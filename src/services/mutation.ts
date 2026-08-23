import type { EntityContext } from '../context.js';
import type { MutationData, SelectionResult } from '../generated/schema.js';
import type { RequestOptions } from '../transport.js';

export type Selected<TData, TSelection> = SelectionResult<TData, TSelection>;

export async function mutate<TField extends keyof MutationData, TSelection extends object>(
  context: EntityContext,
  field: TField,
  args: object,
  selection: TSelection,
  options?: RequestOptions,
): Promise<unknown> {
  const response = await context.executeMutation({ [field]: { $args: args, $select: selection } } as never, options);
  return response[field as string];
}
