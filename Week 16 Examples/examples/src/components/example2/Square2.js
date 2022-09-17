import { useState } from "react";

export default function Square({ takeTurn, id, player }) {
  console.log("Square re-rendering now.");
  const palet = ["blue", "red", "green"];
  // id is the square's number
  // We call takeTurn to tell Parent we have clicked in this square

  const [color, setColor] = useState(2);

  // function that takes the player as a parameter and then uses it in the calculation to setColor
  // but does NOT update the player held in the state of the Board component
  const innerTakeTurn = (id) => {
    return (player + 1) % 2;
  };

  return (
    <button
      id={id}
      onClick={(e) => {
        setColor(takeTurn(id));
        e.preventDefault();
        e.target.style.background = palet[color];
      }}
    ></button>
  );
}
