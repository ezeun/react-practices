import React, {useState} from 'react';
import {_Task, Task_Remove} from './assets/scss/Task.scss';

function Task({no, name, done, deleteTask, updateTask}) {
    const [isChecked, setIsChecked] = useState(done == 'Y' ? true : false); 
    const toggleCheck = async () => {
        setIsChecked(!isChecked);
        await updateTask(no, isChecked?'Y':'N');
    };
    
    return (
        <li className={_Task}>
            <input type='checkbox' checked={isChecked} onChange={toggleCheck}/>
                {" "+name+" "}
            <a href='#' className={Task_Remove} onClick={() => deleteTask(no)}></a>
        </li>
    );
}

export default Task;