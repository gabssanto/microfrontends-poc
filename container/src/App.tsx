import React from "react";
import ReactDOM from "react-dom";

import { Counter } from "counter/Counter";
import Header from "header";
import Footer from "footer";

import "./index.css";

const App = () => (
  <>
    <Header />
    <h1>Container App</h1>
    {/* <Counter header="joao" /> // Micro frontend app */}
    <Footer />
  </>
);

ReactDOM.render(<App />, document.getElementById("app"));
