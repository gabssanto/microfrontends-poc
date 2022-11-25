import React from "react";
import ReactDOM from "react-dom";

import Typography from "@mui/material/Typography";
import styled from "@emotion/styled";

const Footer = styled.footer`
  background-color: #212325;
  position: absolute;
  bottom: 0;
  width: 100vw;
  display: flex;
`;

const App = () => (
  <Footer>
    <div
      style={{
        padding: "1rem",
      }}
    >
      <Typography variant="h6" align="center">
        A Micro Frontend Footer Example
      </Typography>
      <Typography variant="subtitle1" align="left" component="p">
        Made with ❤️ by gabssanto
      </Typography>
    </div>
  </Footer>
);

export default App;

ReactDOM.render(<App />, document.getElementById("app"));
