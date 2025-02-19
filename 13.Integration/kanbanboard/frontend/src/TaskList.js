import React, { useEffect, useState, useRef } from "react";
import Task from './Task';
import {Task_List, Input_Add_Task} from './assets/scss/TaskList.scss';

function TaskList({tasks, addTask, deleteTask, updateTask}) {
    const [taskName, setTaskName] = useState("");

    const handleInputChange = (e) => {
        setTaskName(e.target.value);
    };

    const handleKeyDown = (e) => {
        if (e.key === 'Enter' && taskName.trim() !== '') {
            addTask(taskName);
            setTaskName("");  
        }
    };

    return (
        <div className={Task_List}>
            <ul>
                {
                    tasks.map(task => <Task
                                        key = {task.no}
                                        no = {task.no}
                                        name = {task.name}
                                        done = {task.done}
                                        deleteTask = {deleteTask}
                                        updateTask = {updateTask}
                            />)
                }
            </ul>
            <input 
                className={Input_Add_Task} 
                type='text' 
                placeholder='태스크 추가'
                value={taskName}
                onChange={handleInputChange}
                onKeyDown={handleKeyDown}>
            </input>
        </div>
    );
}

export default TaskList;