import React from 'react';

const ATMDeposit = ({ onChange, isDeposit, isValid }) => {

    const choice = ['Deposit', 'Cash Back'];
    console.log(`ATM isDeposit: ${isDeposit}`);
    console.log(`transaction is: ${isValid}`);
    return (
      <label className="label huge">
        <h3> {choice[Number(!isDeposit)]}</h3>
        <input id="number-input" type="number" width="200" onChange={onChange}></input>
        <input disabled={!isValid} type="submit" width="200" value="Submit" id="submit-input"></input>
      </label>
    );

};

export default ATMDeposit;