import type { EntityContext } from '../context.js';
import { AniListGraphQLError } from '../errors.js';
import type { QuerySelection } from '../generated/schema.js';
import type { RequestOptions } from '../transport.js';

export abstract class Entity {
  id!: number;

  protected readonly context: EntityContext;
  private readonly rootField: 'Media' | 'Character' | 'User';
  private readonly selection: Readonly<Record<string, unknown>>;
  private readonly requestOptions: RequestOptions | undefined;

  protected constructor(
    context: EntityContext,
    rootField: 'Media' | 'Character' | 'User',
    data: Readonly<Record<string, unknown>>,
    selection: Readonly<Record<string, unknown>>,
    requestOptions?: RequestOptions,
  ) {
    this.context = context;
    this.rootField = rootField;
    this.selection = selection;
    this.requestOptions = requestOptions;
    this.hydrate(data);
  }

  protected hydrate(data: Readonly<Record<string, unknown>>): void {
    Object.assign(this, data);
  }

  async refresh(options: RequestOptions = this.requestOptions ?? {}): Promise<this> {
    const selection = {
      [this.rootField]: { $args: { id: this.id }, $select: this.selection },
    } as unknown as QuerySelection;
    const response = await this.context.executeQuery(selection, options);
    const data = response[this.rootField];
    if (!data || typeof data !== 'object' || Array.isArray(data)) {
      throw new AniListGraphQLError([{ message: `${this.rootField} ${this.id} no longer exists.` }], response);
    }
    this.hydrate(data as Record<string, unknown>);
    return this;
  }
}
