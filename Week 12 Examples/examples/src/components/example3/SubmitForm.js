import React, { useState } from 'react';

const SubmitForm = ({onFormSubmit}) => {
    const [state, setState] = useState({
        item: ""
    });

    const handleSubmit = e => {
        e.preventDefault();
        if (state.item === "") return;
        onFormSubmit(state.item);
        setState({ item: "" });
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                className="input"
                placeholder="Enter Item"
                value={state.item}
                onChange={(e) => setState({ item: e.target.value })}
            />
            <button className="button">Add</button>
        </form>
    )
}

export default SubmitForm;