const NOT_STARTED = 1;
const STARTED = 2;
const ENDED = 3;

export const GameStages = {
  NOT_STARTED,
  STARTED,
  ENDED
};

const checkTheWinner = userInput => {
  const comb = [7, 56, 73, 84, 146, 273, 292, 448];

  let parsedInput = parseInt(userInput, 2);
  return comb.some(el => (el & parsedInput) === el);
};

export const processUserAction = (cells, cellIndex, playerKey) => {
  let playerValues = "";
  let updCells = [...cells];
  updCells[cellIndex] = playerKey;
  updCells.forEach(element => {
    let cellValue = element === playerKey ? "1" : "0";
    playerValues = `${cellValue}${playerValues}`;
  });
  let isWinner = checkTheWinner(playerValues);
  let emptyExist = updCells.some(item => !item);
  let gameStatus = emptyExist && !isWinner ? STARTED : ENDED;

  return {
    updCells,
    gameStatus,
    isWinner
  };
};
