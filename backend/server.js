const express = require("express");
const { findBestMove } = require("./minmax.js");
const cors = require("cors");
const app = express();
const port = 3000;

let board = [
  ["_", "_", "_"],
  ["_", "_", "_"],
  ["_", "_", "_"],
];

let counter = 0;
let bestMove;

app.use(cors("*"));
app.use(express.json());

app.post("/", (req, res) => {
  frontData = req.body.arr;
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      if (frontData[counter] !== "") {
        board[i][j] = frontData[counter].toLowerCase();
      } else {
        board[i][j] = "_";
      }
      counter++;
    }
  }
  console.log(board);
  counter = 0;
  bestMove = findBestMove(board);
  res.json(bestMove.row * 3 + bestMove.col);
});

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
