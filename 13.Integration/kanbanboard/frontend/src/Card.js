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
                    <TaskList tasks={tasks}/>
                </div>
            )}

        </div>
    );
}

export default Card;