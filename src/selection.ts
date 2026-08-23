type SelectionRecord = Readonly<Record<string, unknown>>;

function isRecord(value: unknown): value is SelectionRecord {
  return Boolean(value) && typeof value === 'object' && !Array.isArray(value);
}

/** Merge a caller projection with SDK-internal identity fields without mutating either value. */
export function mergeSelections<T extends object>(selection: T, internal: SelectionRecord): T & SelectionRecord {
  const output: Record<string, unknown> = { ...(selection as SelectionRecord) };
  for (const [key, value] of Object.entries(internal)) {
    const existing = output[key];
    if (isRecord(existing) && isRecord(value)) {
      if ('$select' in existing && '$select' in value) {
        output[key] = {
          ...existing,
          ...value,
          $args: { ...(existing.$args as SelectionRecord), ...(value.$args as SelectionRecord) },
          $select: mergeSelections(existing.$select as SelectionRecord, value.$select as SelectionRecord),
        };
      } else {
        output[key] = mergeSelections(existing, value);
      }
    } else if (existing === undefined) {
      output[key] = value;
    }
  }
  return output as T & SelectionRecord;
}
