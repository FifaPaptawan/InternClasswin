import React from "react";
import Task from "./Task";

function Tasklist({tasks, loading, actions}) {

    const  LoadingRow = (
        <div className="loading-item">
            <span className="glow-checkbox" />
            <span className="glow-text" >
                <span>Loading</span>
                <span>cool</span>
                <span>state</span>
             </span>
        </div>
    );
    
    if (loading) {
        return (
            <div className= "List-items">
                {LoadingRow}
                {LoadingRow}
                {LoadingRow}
                {LoadingRow}
                {LoadingRow}
                {LoadingRow}
            </div>
        );
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