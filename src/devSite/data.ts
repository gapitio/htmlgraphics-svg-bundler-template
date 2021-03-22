import type { TimeRange } from "@grafana/data";
import { createSeries } from "./createSeries";

function randomValue({ min = 0, max = 1 }): number {
  return Math.random() * (max - min) + min;
}

enum LoadingState {
  NotStarted = "NotStarted",
  Loading = "Loading",
  Streaming = "Streaming",
  Done = "Done",
  Error = "Error",
}

function updateData(): void {
  window.data = {
    state: LoadingState.Done,
    series: [
      createSeries("random-series-1", randomValue({ min: 0, max: 100 })),
      createSeries("random-series-2", randomValue({ min: -100, max: 100 })),
    ],
    // TODO: add a proper TimeRange stub
    timeRange: {} as TimeRange,
  };
}

export { updateData };
