import createSeries from "./create-series";

window.data = {
  state: LoadingState.Done,
  series: [createSeries("random-name", 1000)],
};
