import { AniListConfigurationError } from './errors.js';
import { schemaRuntime } from './generated/runtime.js';

interface RuntimeField {
  readonly type: string;
  readonly args: Readonly<Record<string, string>>;
}

interface RuntimeObject {
  readonly kind: 'OBJECT';
  readonly fields: Readonly<Record<string, RuntimeField>>;
}

interface RuntimeUnion {
  readonly kind: 'UNION';
  readonly members: readonly string[];
}

type RuntimeType = RuntimeObject | RuntimeUnion;
const runtimeTypes = schemaRuntime.types as unknown as Readonly<Record<string, RuntimeType>>;

export interface CompiledOperation<TVariables extends Record<string, unknown> = Record<string, unknown>> {
  readonly document: string;
  readonly variables: TVariables;
  readonly operationName: string;
}

export interface CompileOptions {
  readonly operationName?: string;
}

function namedType(type: string): string {
  return type.replaceAll('[', '').replaceAll(']', '').replaceAll('!', '');
}

function record(value: unknown, description: string): Record<string, unknown> {
  if (!value || typeof value !== 'object' || Array.isArray(value)) {
    throw new AniListConfigurationError(`${description} must be an object.`);
  }
  return value as Record<string, unknown>;
}

function operationIdentifier(value: string): string {
  if (!/^[_A-Za-z][_0-9A-Za-z]*$/.test(value)) {
    throw new AniListConfigurationError(`Invalid GraphQL operation name: ${value}`);
  }
  return value;
}

export function compileOperation(
  operation: 'query' | 'mutation',
  selection: Readonly<Record<string, unknown>>,
  options: CompileOptions = {},
): CompiledOperation {
  const rootName = operation === 'query' ? schemaRuntime.roots.query : schemaRuntime.roots.mutation;
  const operationName = operationIdentifier(
    options.operationName ?? (operation === 'query' ? 'AniListQuery' : 'AniListMutation'),
  );
  const variables: Record<string, unknown> = {};
  const definitions: string[] = [];
  let variableIndex = 0;

  function compileUnion(typeName: string, value: unknown, path: readonly string[]): string {
    const union = runtimeTypes[typeName];
    if (!union || union.kind !== 'UNION') throw new AniListConfigurationError(`Unknown union type ${typeName}.`);
    const body = record(value, `Selection for ${typeName}`);
    const output: string[] = [];
    for (const key of Object.keys(body).sort()) {
      if (key === '__typename') {
        if (body[key] !== true) throw new AniListConfigurationError('__typename must be selected with true.');
        output.push('__typename');
      } else if (key === '$on') {
        const fragments = record(body[key], `Inline fragments for ${typeName}`);
        for (const member of Object.keys(fragments).sort()) {
          if (!union.members.includes(member)) {
            throw new AniListConfigurationError(`${member} is not a member of ${typeName}.`);
          }
          output.push(`... on ${member} { ${compileObject(member, fragments[member], [...path, member])} }`);
        }
      } else {
        throw new AniListConfigurationError(`Unknown selection key ${typeName}.${key}. Use $on for inline fragments.`);
      }
    }
    if (output.length === 0) throw new AniListConfigurationError(`Selection for ${typeName} cannot be empty.`);
    return output.join(' ');
  }

  function compileObject(typeName: string, value: unknown, path: readonly string[]): string {
    const type = runtimeTypes[typeName];
    if (!type || type.kind !== 'OBJECT') throw new AniListConfigurationError(`Unknown object type ${typeName}.`);
    const body = record(value, `Selection for ${typeName}`);
    const output: string[] = [];

    for (const fieldName of Object.keys(body).sort()) {
      const selected = body[fieldName];
      if (selected === undefined) continue;
      if (fieldName === '__typename') {
        if (selected !== true) throw new AniListConfigurationError('__typename must be selected with true.');
        output.push('__typename');
        continue;
      }
      const field = type.fields[fieldName];
      if (!field) throw new AniListConfigurationError(`Unknown field ${typeName}.${fieldName}.`);

      let fieldSelection: unknown = selected;
      let argumentsText = '';
      const argumentNames = Object.keys(field.args);
      if (argumentNames.length > 0) {
        const wrapper = record(selected, `Argument selection for ${typeName}.${fieldName}`);
        if (!('$args' in wrapper) || !('$select' in wrapper)) {
          throw new AniListConfigurationError(`${typeName}.${fieldName} must use { $args, $select }.`);
        }
        const supplied = record(wrapper.$args, `$args for ${typeName}.${fieldName}`);
        const compiledArguments: string[] = [];
        for (const argumentName of Object.keys(supplied).sort()) {
          if (!(argumentName in field.args)) {
            throw new AniListConfigurationError(`Unknown argument ${typeName}.${fieldName}(${argumentName}:).`);
          }
          const argumentValue = supplied[argumentName];
          if (argumentValue === undefined) continue;
          const argumentType = field.args[argumentName]!;
          if (argumentValue === null && argumentType.endsWith('!')) {
            throw new AniListConfigurationError(`${typeName}.${fieldName}(${argumentName}:) cannot be null.`);
          }
          variableIndex += 1;
          const variableName = `v_${[...path, fieldName, argumentName].join('_').replace(/[^_0-9A-Za-z]/g, '_')}_${variableIndex}`;
          definitions.push(`$${variableName}: ${argumentType}`);
          variables[variableName] = argumentValue;
          compiledArguments.push(`${argumentName}: $${variableName}`);
        }
        for (const argumentName of argumentNames) {
          if (field.args[argumentName]!.endsWith('!') && !(argumentName in supplied)) {
            throw new AniListConfigurationError(
              `Missing required argument ${typeName}.${fieldName}(${argumentName}:).`,
            );
          }
        }
        if (compiledArguments.length > 0) argumentsText = `(${compiledArguments.join(', ')})`;
        fieldSelection = wrapper.$select;
      }

      const targetName = namedType(field.type);
      const target = runtimeTypes[targetName];
      if (!target) {
        if (fieldSelection !== true) {
          throw new AniListConfigurationError(`Scalar field ${typeName}.${fieldName} must be selected with true.`);
        }
        output.push(`${fieldName}${argumentsText}`);
      } else {
        const nested =
          target.kind === 'UNION'
            ? compileUnion(targetName, fieldSelection, [...path, fieldName])
            : compileObject(targetName, fieldSelection, [...path, fieldName]);
        output.push(`${fieldName}${argumentsText} { ${nested} }`);
      }
    }
    if (output.length === 0) throw new AniListConfigurationError(`Selection for ${typeName} cannot be empty.`);
    return output.join(' ');
  }

  const body = compileObject(rootName, selection, [rootName]);
  const variableDefinitions = definitions.length > 0 ? `(${definitions.join(', ')})` : '';
  return {
    document: `${operation} ${operationName}${variableDefinitions} { ${body} }`,
    variables,
    operationName,
  };
}
