import "../scss/main.scss";

import React from "react";
import ReactDOM from "react-dom";

const App = () => {
  return <div><h3>Hello React,Webpack 4 & Babel 7!</h3></div>;
};

ReactDOM.render(<App />, document.querySelector("#root"));