import React, { useState } from "react";
import Square from "./Square1";

export default function Board() {
  // 1st player is X ie 1
  // State keeps track of next player and gameState
  const [player, setPlayer] = useState(1);
  const [gameState, setGameState] = useState([]);

  const takeTurn = (id) => {
    setGameState([...gameState, { id: id, player: player }]);
    setPlayer((player + 1) % 2); // get next player
    return player;
  };
  
  function renderSquare(i) {
    // use properties to pass callback function takeTurn to Child
    return <Square takeTurn={takeTurn} id={i}></Square>;
  }

  return (
    <div className="game-board">
      <div className="grid-row">
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </div>
      <div id="info">
        <button>Show/Hide Row</button>
        {/* <h1>{status}</h1> */}
      </div>
    </div>
  );
}
