import React from 'react';
import Todo from './Todo';

const TodoList = ({tasks, onDelete}) => {
    const todos = tasks.map((todo, index) => {
        return (
            <Todo
                content = {todo}
                key = {index}
                id = {index}
                onDelete = {onDelete}
            />
        )
    });

return <div className = "list-wrapper">{todos}</div>
}

export default TodoList;