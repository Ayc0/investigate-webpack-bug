import React from "react";
import ReactDOM from "react-dom";

const Green = React.lazy(() =>
  import("./green").then((module) => ({ default: module.Green }))
);
const Blue = React.lazy(() =>
  import("./blue").then((module) => ({ default: module.Blue }))
);

const app = document.getElementById("app");

ReactDOM.render(
  <React.Suspense fallback={null}>
    <Green />
    <Blue />
  </React.Suspense>,
  app
);
