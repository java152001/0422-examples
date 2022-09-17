import { useState, useEffect } from 'react';

export default function Square({ takeTurn, id }) {
    const mark = ['O', 'X', '+'];
    // id is the square's number
    // filled tells you if square has been filled
    // tik tells you symbol in square (same as player)
    // You call takeTurn to tell Parent that the square has been filled
    const [filled, setFilled] = useState(false);
    const [tik, setTik] = useState(2);
    const [fontColor, setFontColor] = useState('');

    function changeFontColor() {
        setFontColor((tik === 1) ? 'red' : 'white');
    }

    useEffect(() => {
        if (tik !== 2) {
            changeFontColor();
            console.log('fired');
        }
    }, [tik]);


  
    return (
      <button
        // Part 2: update the return statement below to add css classes
        onClick={() => {
          setTik(takeTurn(id));
          setFilled(true);
          console.log(`Square: ${id} filled by player : ${tik}`)
        }}
        className={fontColor}
      >
        <h1>{mark[tik]}</h1>
      </button>
    );
}