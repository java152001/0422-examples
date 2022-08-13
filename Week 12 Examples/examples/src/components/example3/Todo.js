import React from 'react';

const Todo = ({ id, content, onDelete }) => {
    return (
        <div id = { id * 10 } className = "list-item test-item">
            {content}
            <button
                id = {id}
                className = "delete is-pulled-right"
                onClick = {() => {
                    onDelete(id);
                }}
            >
                X
            </button>
        </div>
    )
}

export default Todo