import React from "react";
import { CellItem } from "./CellItem";

export const GameBoard = props => {
  return (
    <div id="grid">
      {props.cells.map((item, i) => (
        <CellItem key={i} cellKey={item} index={i} {...props} />
      ))}
    </div>
  );
};
