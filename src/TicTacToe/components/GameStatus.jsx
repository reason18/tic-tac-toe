import React from "react";
import { GameStages } from "../helpers";

const SwitchStatusContent = props => {
  if (props.currentStatus === GameStages.STARTED) {
    return <div>This is turn for: {props.currentTurn}</div>;
  } else if (props.currentStatus === GameStages.ENDED) {
    if (props.winner) {
      return <div>The winner is {props.winner}</div>;
    } else {
      return <div>There is draw</div>;
    }
  }
  return "Game not started";
};

export const GameStatus = props => {
  return (
    <div className="game-status">
      <h2>Game status: </h2>
      <SwitchStatusContent {...props} />
    </div>
  );
};
