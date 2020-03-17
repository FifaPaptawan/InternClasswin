import React from "react";
import Task from "./Task";

function Tasklist({tasks, loading, actions}) {
    
    if (loading) {
        return <div className= "List-items">loading</div>;
    }

    if (tasks.lenght === 0) {
        return <div className="List-items">no-items</div>
    }

    return (
        <div className="List-items">
            {tasks.map(task => (
                <Task task={task} {...actions} /> 
            ))}
        </div>
    );
}

export default Tasklist