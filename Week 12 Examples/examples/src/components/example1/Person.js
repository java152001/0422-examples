import React, { useState } from 'react';
import Details from './Details';

const Person = () => {
    const [state, setState] = useState({
        details : {
            name: "Arizona",
            residence: {
                city: "Tucson",
                country: "USA"
            },
            profession: "Developer"
        }
    });

    return (
        <Details person={state} />
    )
}

export default Person;