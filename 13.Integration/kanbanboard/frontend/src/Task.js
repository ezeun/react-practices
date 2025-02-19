import React, {useState} from 'react';
import {_Task, Task_Remove} from './assets/scss/Task.scss';

function Task({no, name, done, deleteTask}) {
    const [isChecked, setIsChecked] = useState(done == 'Y' ? true : false); 
    const toggleCheck = () => {
        setIsChecked(!isChecked);
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