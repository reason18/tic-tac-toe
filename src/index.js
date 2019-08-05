import React from "react";
import ReactDOM from "react-dom";
import { TicTacToe } from "./TicTacToe";

import "./styles.css";

const App = () => {
  return (
    <div className="app-wrapper">
      <TicTacToe />
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
