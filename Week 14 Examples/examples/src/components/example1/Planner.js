import React, {useState} from 'react';

const Planner = () => {

    const [todos, setTodos] = useState([
        {
            text: "Get Groceries",
            date: "12:39:38 PM",
        },
        {
            text: "Meal Prep",
            date: "12:41:38 PM",
        },
        {
            text: "Power Nap",
            date: "12:45:38 PM",
        },
        {
            text: "Learn React",
            date: "04:45:38 PM",
        },
    ]);

    const addEvent = (text, dateLocalStr) => {
        const newEvents = [
            ...todos,
            {
                text: text,
                isCompleted: false,
                date: dateLocalStr,
            },
        ];
        setTodos(newEvents);
    };

    const EventForm = (props) => {
        const [value, setValue] = useState("");

        const handleSubmit = (e) => {
            e.preventDefault();
            if (!value) return;
            props.addEvent(value, new Date().toLocaleTimeString());
        };

        return (
            <form onSubmit={handleSubmit}>
                <input
                    id="task-input"
                    type="text"
                    value={value}
                    placeholder="Add Event..."
                    onChange={(e) => setValue(e.target.value)}
                />
                <span>Press Enter to Submit</span>
            </form>
        );
    };

    const removeEvent = (index) => {
        let temp = [...todos];
        temp.splice(index, 1);
        console.log(index, temp);
        setTodos(temp);
    };

    return (
        <>
            {todos.map((todo, i) => (
                <div
                    key={i}
                    title="click to remove item"
                    className="planner-item"
                    onClick={(i) => removeEvent(i)}
                >
                    {todo.text} - {todo.date || "N/A"} (-)
                </div>
            ))}
            <EventForm addEvent={addEvent} />
        </>
    );

}

export default Planner