import type { EntityContext } from '../context.js';
import type { MutationUpdateUserArgs, UserData, UserSelection } from '../generated/schema.js';
import type { RequestOptions } from '../transport.js';
import { mutate, type Selected } from './mutation.js';

export async function updateUser<const TSelection extends UserSelection>(
  context: EntityContext,
  args: MutationUpdateUserArgs,
  selection: TSelection,
  options?: RequestOptions,
): Promise<Selected<UserData, TSelection> | null> {
  return (await mutate(context, 'UpdateUser', args, selection, options)) as Selected<UserData, TSelection> | null;
}
