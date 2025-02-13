import React from 'react';
import data from './assets/json/data';
import Card from './Card';
import {Card_List} from './assets/scss/CardList.scss';

function CardList(props) {
    return (
        <div className={Card_List}> 
            <h1>{props.title}</h1>
            <div>
                {
                    data
                        .filter(d => d.status === props.title)
                        .map(d => <Card 
                                    key = {d.no}
                                    no = {d.no}
                                    title = {d.title}
                                    description = {d.description}
                                    tasks = {d.tasks}
                            />)
                }
            </div>
        </div>
    );
}

export default CardList;