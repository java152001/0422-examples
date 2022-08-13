import React, { useState } from 'react';
import SubmitForm from './SubmitForm';
import TodoList from './TodoList';

const TodoApp = () => {
    const [state, setState] = useState({
        tasks:
            ["task 1", "task 2", "task 3"]
    });

    const handleSubmit = task => {
        setState({ tasks: [...state.tasks, task] });
    }

    const handleDelete = task => {
        state.tasks.splice(task, 1);
        setState({ tasks: [...state.tasks] });
    }

    return (
        <div className="wrapper">
            <div className="card frame">
                <SubmitForm onFormSubmit={handleSubmit} />
                <TodoList tasks={state.tasks} onDelete={handleDelete} />
            </div>
        </div>
    )
}

export default TodoApp;