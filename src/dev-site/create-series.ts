import type { DataFrame } from "@grafana/data";

enum FieldType {
  time = "time",
  number = "number",
  string = "string",
  boolean = "boolean",
  trace = "trace",
  other = "other",
}

export function createSeries(
  name: string,
  value: number,
  refId = "A"
): DataFrame {
  return {
    name,
    fields: [
      {
        name: "Time",
        type: FieldType.time,
        config: {},
        values: {
          length: 0,
          get: (index) => [][index],
          toArray: () => [],
        },
        state: {
          displayName: undefined,
          scopedVars: {},
        },
      },
      {
        name: "Value",
        type: FieldType.number,
        config: {},
        values: {
          length: 0,
          get: (index) => [][index],
          toArray: () => [],
        },
        state: {
          displayName: undefined,
          scopedVars: {},
          calcs: {
            allIsNull: false,
            allIsZero: false,
            count: 1,
            delta: value,
            diff: value,
            first: value,
            firstNotNull: value,
            last: value,
            lastNotNull: value,
            logmin: value,
            max: value,
            mean: value,
            min: 0,
            nonNullCount: 1,
            previousDeltaUp: true,
            range: value,
            step: value,
            sum: value,
          },
        },
      },
    ],
    length: 1,
    refId,
    meta: undefined,
  };
}
