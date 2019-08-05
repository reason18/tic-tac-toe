import React from "react";
import { GameStages, processUserAction } from "./helpers";
import { GameBoard, GameSettings, GameStatus } from "./components";

const defaultState = {
  cells: [...Array(9)],
  currentTurn: "X",
  currentStatus: GameStages.NOT_STARTED,
  winner: null,
  settings: {
    startPlayer: "X"
  }
};

export class TicTacToe extends React.Component {
  state = { ...defaultState };

  setUserValue = index => {
    let { cells, currentTurn } = this.state;
    let nextTurn = currentTurn === "X" ? "O" : "X";
    const result = processUserAction(cells, index, currentTurn);

    this.setState({
      ...this.state,
      cells: [...result.updCells],
      currentTurn: nextTurn,
      currentStatus: result.gameStatus,
      winner: result.isWinner ? currentTurn : null
    });
  };

  onClick = e => {
    let cellIndex = e.target.dataset.index;
    this.setUserValue(cellIndex);
  };

  onChangeSettings = settings => {
    this.setState({
      ...this.state,
      settings: { ...settings }
    });
  };

  startGame = () => {
    this.setState({
      ...this.state,
      currentStatus: GameStages.STARTED,
      currentTurn: this.state.settings.startPlayer
    });
  };

  resetTheGame = () => {
    this.setState({
      ...defaultState
    });
  };

  render() {
    return (
      <div className="tic-tac-toe">
        <div className="game">
          <GameSettings
            currentStatus={this.state.currentStatus}
            onChange={this.onChangeSettings}
          />
          <GameBoard
            onClick={this.onClick}
            cells={this.state.cells}
            currentStatus={this.state.currentStatus}
          />
          <GameStatus
            currentStatus={this.state.currentStatus}
            currentTurn={this.state.currentTurn}
            winner={this.state.winner}
          />
        </div>

        {this.state.currentStatus === GameStages.NOT_STARTED && (
          <button onClick={this.startGame}>Start Game</button>
        )}

        {this.state.currentStatus === GameStages.ENDED && (
          <button onClick={this.resetTheGame}>Reset</button>
        )}
      </div>
    );
  }
}
