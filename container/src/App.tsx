import React from "react";
import ReactDOM from "react-dom";

import { Counter } from "counter/Counter";

import "./index.css";

const App = () => (
  <div className="container">
    <h1>Container App</h1>
    <Counter header="joao" /> // Micro frontend app
  </div>
);

ReactDOM.render(<App />, document.getElementById("app"));
