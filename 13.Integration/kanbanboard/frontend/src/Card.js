import React, {useEffect, useState} from 'react';
import TaskList from './TaskList';
import {_Card, Card_Title, Card_Title_Open} from './assets/scss/Card.scss';

function Card(props) {

    const [isOpen, setIsOpen] = useState(false);
    const [tasks, setTasks] = useState([]);

    const fetchTasks = async (cardNo) => {
        try{
            const response = await fetch(`/kanbanboard/task?cardNo=${cardNo}`, {
                method: "get",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: null
            });

            const jsonResult = await response.json();

            if(!response.ok || jsonResult.result === 'fail' || !Array.isArray(jsonResult.data)){
                throw new Error(`${response.status} ${response.statusText}`);
            }

            setTasks(jsonResult.data);
        } catch (err){
            console.error(err);
        }
    }

    const addTask = async (taskName) => {
        try {
            const response = await fetch(`/kanbanboard/task`, {
                method: "POST",
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ name: taskName, cardNo: props.no, done: "N"})
            });

            const jsonResult = await response.json();
            if (!response.ok || jsonResult.result === 'fail') {
                throw new Error(`${response.status} ${response.statusText}`);
            }

            fetchTasks(props.no); 
        } catch (err) {
            console.error(err);
        }
    };

    const deleteTask = async (taskNo) => {
        try {
            const response = await fetch(`/kanbanboard/task/${taskNo}`, {
                method: "DELETE",
                headers: { 'Content-Type': 'application/json' }
            });

            if (!response.ok) {
                throw new Error(`Failed to delete task ${taskNo}`);
            }

            fetchTasks(props.no); 
        } catch (err) {
            console.error(err);
        }
    }

    const updateTask = async (taskNo, done) => {
        done = done=='Y'?'N':'Y';
        try{
            const response = await fetch(`/kanbanboard/task/${taskNo}?done=${done}`, {
                method: "PUT",
                headers: { 'Content-Type': 'application/json' }
            });

            if (!response.ok) {
                throw new Error(`Failed to update task ${taskNo}`);
            }

            fetchTasks(props.no); 
        } catch(err){
            console.error(err);
        }
    }

    useEffect(() => {
        if(isOpen) {
            fetchTasks(props.no);
        }
    }, [isOpen, props.no]);
    
    const toggleOpen = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className={_Card}>
             <div className={`${Card_Title} ${isOpen ? Card_Title_Open : ''}`}
                    onClick={toggleOpen}>
                {props.title}
            </div>
            {props.description}
            {isOpen && (
                <div>
                    <TaskList tasks={tasks} addTask={addTask} deleteTask={deleteTask} updateTask={updateTask}/>
                </div>
            )}

        </div>
    );
}

export default Card;