import './App.css';
import React from 'react';
import Board1 from './components/example1/Board1';
import Board2 from './components/example2/Board2';
import Board3 from './components/example3/Board3';

function App() {
    return (
        <div className = "game">
            <Board1 />
            {/* <Board2 /> */}
            {/* <Board3 /> */}
        </div>
    )
}

export default App;
