import React from "react";
import TaskList from "./TaskList";
import {actionsData} from "./Task.stories";

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

const withTaskPinned =[
    ...tasks,
    {
        id:3,
        title: "oho",
        state: "TASK_PINNED"
    }
]

export const Default = () => <TaskList tasks={tasks} loading={false} actions={actionsData}/>;
export const Loading = () => <TaskList loading={true} />;
export const Empty = () => <TaskList tasks={[]} />;
export const WithPinnedTask = () => <TaskList tasks={withTaskPinned} actions ={actionsData} />;
