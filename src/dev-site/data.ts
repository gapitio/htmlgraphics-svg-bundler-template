import { dateTime, LoadingState } from "@grafana/data";
import createSeries from "./create-series";

function randomValue({ min = 0, max = 1 }): number {
  return Math.random() * (max - min) + min;
}

function updateData(): void {
  window.data = {
    state: LoadingState.Done,
    series: [
      createSeries("random-series-1", randomValue({ min: 0, max: 100 })),
      createSeries("random-series-2", randomValue({ min: -100, max: 100 })),
    ],
    timeRange: {
      from: dateTime(0),
      to: dateTime(0),
      raw: {
        from: dateTime(0),
        to: dateTime(0),
      },
    },
  };
}

export { updateData };
