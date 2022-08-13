import React from 'react';

const Details = (
    {
        person:
        {
            details: { name }
        },
        person:
        {
            details:
            {
                residence: { city }
            }
        },
        person:
        {
            details:
            {
                residence: { country }
            }
        },
        person:
        {
            details: { profession }
        }
    }
) => {
    return (
        <div style={{ margin: "1em" }}>
            <div id="name">Name: {name}</div>
            <div id="city">City: {city}</div>
            <div id="country">Country: {country}</div>
            <div id="profession">Profession: {profession}</div>
        </div>
    )
}

export default Details;