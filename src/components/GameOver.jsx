import React from "react";

function GameOver({ winner, onRestart }) {
  return (
    <div id="game-over">
      <h2>{winner ? `${winner} wins!` : "It's a draw!"}</h2>
      <button onClick={onRestart}>Restart</button>
    </div>
  );
}

export default GameOver;
