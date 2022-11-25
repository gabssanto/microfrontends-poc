import React from "react";
import ReactDOM from "react-dom";

import ResponsiveAppBar from "./components/AppBar";

interface Props {
  pages: string[];
  setSelectedPage: (page: string) => void;
  selectedPage: string;
}

const App: React.FC<Props> = (props) => <ResponsiveAppBar {...props} />;

// ReactDOM.render(<App />, document.getElementById("app"));

export default App;
