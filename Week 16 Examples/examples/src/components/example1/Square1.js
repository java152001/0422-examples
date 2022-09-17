import React, { useState } from "react";

export default function Square({ takeTurn, id }) {
  const mark = ["O", "X", "+"];
  const [filled, setFilled] = useState(false);
  const [tik, setTik] = useState(2);
  const [mounted, setMounted] = useState(true);

  const toggle = () => setMounted(!mounted);

  // Step 2: Check to see if the mounted state is false. If it is we want to return null instead of returning the button

  if (mounted === false) {
    return null;
  } else {
    return (
      // Step 3: Trigger toggle() when button is clicked
      <button
        // DO NOT DELETE THIS id
        id={`square-button-${id}`}
        onClick={() => {
          setTik(takeTurn(id));
          setFilled(true);
          toggle();
        }}
      >
        <h1>{mark[tik]}</h1>
      </button>
    );
  }
}
