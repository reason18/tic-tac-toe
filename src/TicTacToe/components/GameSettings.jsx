import React from "react";
import { GameStages } from "../helpers";

export const GameSettings = props => {
  const onChange = e => {
    if (e.target.checked) {
      let startPlayer = e.target.dataset.player;
      console.log("e", startPlayer);
      props.onChange({ startPlayer });
    }
  };
  const disabled = props.currentStatus !== GameStages.NOT_STARTED;
  return (
    <div className="game-settings">
      <h2>Settings</h2>
      <p>First player: </p>
      <label className="cross">
        <input
          data-player="X"
          disabled={disabled}
          onChange={onChange}
          defaultChecked
          type="radio"
          name="first-player"
        />
        <span>X</span>
      </label>
      <label className="toe">
        <input
          data-player="O"
          disabled={disabled}
          onChange={onChange}
          type="radio"
          name="first-player"
        />
        <span>O</span>
      </label>
    </div>
  );
};
