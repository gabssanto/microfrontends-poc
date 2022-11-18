import React from "react";
import ReactDOM from "react-dom";

import { Counter } from "counter/Counter";
import Header from "header/Header";

import "./index.css";

const App = () => (
  <>
    <Header />
    <h1>Container App</h1>
    {/* <Counter header="joao" /> // Micro frontend app */}
  </>
);

ReactDOM.render(<App />, document.getElementById("app"));
