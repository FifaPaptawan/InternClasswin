import React from "react";
import TaskList from "./TaskList";

export default{
    component: TaskList,
    title: "TaskList"
};

const tasks = [
    {
        id:1,
        title: "Fifa",
        state: "sdf"
    },
    {
        id:2,
        title:"ohm",
        state: "fff"
    }
];

export const Default = () => <TaskList tasks={tasks} loading={true} />;
