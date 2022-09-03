import React, { useState } from 'react';
import ATMDeposit from './ATMDeposit';

const Account = () => {
    const [deposit, setDeposit] = useState(0);
    const [totalState, setTotalState] = useState(0);
    const [isDeposit, setIsDeposit] = useState(true);
    const [atmMode, setAtmMode] = useState("");
    const [validTransaction, setValidTransaction] = useState(false);

    let status = `Account Balance $ ${totalState} `;
    console.log(`Account Rendered with isDeposit: ${isDeposit}`);

    const handleChange = (event) => {

        if (event.target.value <= 0) {
            setValidTransaction(false);
            return;
        }

        (atmMode === "Cash Back" && event.target.value > totalState) ? setValidTransaction(false) : setValidTransaction(true);

        console.log(`handleChange ${event.target.value}`);

        setDeposit(Number(event.target.value));
    };

    const handleSubmit = (event) => {
        console.log(event);
        event.preventDefault();
        let newTotal = isDeposit ? totalState + deposit : totalState - deposit;
        setTotalState(newTotal);
        setValidTransaction(false);
    };

    const handleModeSelect = event => {
        setAtmMode(event.target.value);

        if (event.target.value === "Deposit") {
            setIsDeposit(true)
        } else if (event.target.value === "Cash Back") {
            setIsDeposit(false)
        }

    }

    return (
        <form onSubmit={handleSubmit}>
            <h2 id="total">{status}</h2>
            <label>Select an action below to continue</label>
            <select onChange={(e) => handleModeSelect(e)} name="mode" id="mode-select">
                <option id="no-selection" value=""></option>
                <option id="deposit-selection" value="Deposit">Deposit</option>
                <option id="cashback-selection" value="Cash Back">Cash Back</option>
            </select>
            {
                (atmMode === "Deposit" || atmMode === "Cash Back") &&
                    <ATMDeposit onChange={handleChange} isDeposit={isDeposit} isValid={validTransaction}></ATMDeposit>
            }
        </form>
    );

}

export default Account;