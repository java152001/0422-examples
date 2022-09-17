// Parent re-rendering child components

import { useState } from 'react';
import Square from './Square2';

export default function Board() {
    // 1st player is 1
    // State keeps track of next player
    const [player, setPlayer] = useState(1);
    console.log('Board re-rendering now.');
  
    // check for winner (see superset.js)
    let status = `Player ${player}`;
    console.log(`Status Player ${status}`);
  
    // Note that Child (Square Component) calls this function
    // However the function has access to the player held here
    const takeTurn = () => {
      setPlayer((player + 1) % 2); // get next player
      return player;
    };

    function renderSquare(i, color) {
      // use properties to pass callback function takeTurn to Child
      return <Square takeTurn={takeTurn} id={i} player={player}></Square>;
    }

    return (
      <div className="game-board">
        <div className="grid-row">
          {renderSquare(0)}
          {renderSquare(1)}
          {renderSquare(2)}
        </div>
        <div id="info">
          <h1>{status}</h1>
          <button onClick={() => takeTurn()}> Change Player</button>
        </div>
      </div>
    );
  };