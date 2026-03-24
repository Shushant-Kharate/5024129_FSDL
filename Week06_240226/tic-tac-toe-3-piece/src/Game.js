import { useState } from "react";
import Board from "./Board";

function Game() {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [isXTurn, setIsXTurn] = useState(true);
  const [xMoves, setXMoves] = useState([]);
  const [oMoves, setOMoves] = useState([]);

  function calculateWinner(squares) {
    const lines = [
      [0,1,2],[3,4,5],[6,7,8],
      [0,3,6],[1,4,7],[2,5,8],
      [0,4,8],[2,4,6]
    ];

    for (let [a,b,c] of lines) {
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
  }

  function handleClick(index) {
    if (board[index]) return;

    const newBoard = [...board];
    const currentPlayer = isXTurn ? "X" : "O";

    let currentMoves = isXTurn ? [...xMoves] : [...oMoves];

    // If already 3 pieces → remove oldest
    if (currentMoves.length === 3) {
      const oldestMove = currentMoves.shift();
      newBoard[oldestMove] = null;
    }

    currentMoves.push(index);
    newBoard[index] = currentPlayer;

    if (isXTurn) {
      setXMoves(currentMoves);
    } else {
      setOMoves(currentMoves);
    }

    setBoard(newBoard);
    setIsXTurn(!isXTurn);
  }

  const winner = calculateWinner(board);

  return (
    <div>
      <h2>{winner ? `Winner: ${winner}` : `Turn: ${isXTurn ? "X" : "O"}`}</h2>
      <Board squares={board} onClick={handleClick} />
    </div>
  );
}

export default Game;
