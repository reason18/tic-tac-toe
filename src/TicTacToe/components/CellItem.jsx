import React from "react";
import { GameStages } from "../helpers";

export const CellItem = ({ onClick, index, currentStatus, cellKey }) => {
  const checked = !!cellKey;
  const disabled = currentStatus !== GameStages.STARTED || checked;

  return (
    <div>
      <label>
        <input
          data-index={index}
          type="checkbox"
          onClick={onClick}
          checked={checked}
          disabled={disabled}
        />
        <span data-key={cellKey} />
      </label>
    </div>
  );
};
