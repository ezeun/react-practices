import React from 'react';
import TaskList from './TaskList';
import {_Card, Card_Title, Card_Title_Open} from './assets/scss/Card.scss';

function Card(props) {
    return (
        <div className={_Card}>
             <div className={`${Card_Title} ${props.tasks && props.tasks.length > 0 ? Card_Title_Open : ''}`}>
                {props.title}
            </div>
            <div>
                {props.description}
                <TaskList tasks={props.tasks}/>
            </div>
        </div>
    );
}

export default Card;