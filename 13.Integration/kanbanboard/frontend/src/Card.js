import React, {useState} from 'react';
import TaskList from './TaskList';
import {_Card, Card_Title, Card_Title_Open} from './assets/scss/Card.scss';

function Card(props) {

    const [isOpen, setIsOpen] = useState(false);
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
                    <TaskList tasks={props.tasks}/>
                </div>
            )}

        </div>
    );
}

export default Card;