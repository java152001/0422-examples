import './App.css';
import React, { useState } from 'react';
import Movie from './components/example1/Movie';
import movies from './movies.json';

function App() {

    const [data, setData] = useState(movies);
    const [loaded, setLoaded] = useState(true);

    console.log('loaded:', loaded, 'data:', data);

    return (
        <>
            <div className="container">
                <div className="col-sm">
                {loaded &&
                    data.movies.map((movie, i) => (

                    //Old
                    // <nexttech-movie
                    // // Do NOT remove this key attribute
                    // key={i}
                    // // Step 2 - Replace all of the attributes below with a single `data` attribute that have `movie` assigned as the value
                    // title={movie.title}
                    // showTime={movie.showTime}
                    // screen={movie.screen}
                    // row={movie.row}
                    // seat={movie.seat}
                    // imageUrl={movie.imageUrl}
                    // />

                    <Movie 
                        key={i}
                        data={movie}
                    />
                    ))}
                </div>
            </div>
        </>
    )
}

export default App;
