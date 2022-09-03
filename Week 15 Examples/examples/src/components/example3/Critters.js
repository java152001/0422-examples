import React, { useState, useEffect } from 'react';
import axios from 'axios';

let catFactURL = "https://catfact.ninja/fact";
let doggoImageURL = "https://dog.ceo/api/breeds/image/random";

const Critters = () => {

    const [critterData, setCritterData] = useState({});

    useEffect(() => {
        (() => {
            axios.get(doggoImageURL).then(dogData => {
                axios.get(catFactURL).then(catData => {
                    setCritterData({
                        pupperData: dogData.data.message,
                        cattoData: catData.data.fact
                    })
                })
            });
        })();
    }, [])
    

    return (
        <>
            { 
                Object.keys(critterData).length === 0 
                    ?
                    <h2>Critters Loading</h2>
                    :
                    <>
                        <h2>Critters Loaded!</h2>
                        <img src={critterData.pupperData}></img>
                        <p>Cat Fact: {critterData.cattoData}</p>
                    </>
            }
        </>
    )
}

export default Critters
