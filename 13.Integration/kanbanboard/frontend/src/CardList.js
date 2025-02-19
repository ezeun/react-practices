import React, { useEffect, useState, useRef } from "react";
import Card from './Card';
import {Card_List} from './assets/scss/CardList.scss';

function CardList(props) {

    const [cards, setCards] = useState([]);

    const fetchCards = async () => {
        try{
            const response = await fetch('/kanbanboard/card', {
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

            setCards(jsonResult.data);
        } catch (err){
            console.error(err);
        }
    };

    useEffect(() => {
        fetchCards();
    }, []);

    return (
        <div className={Card_List}> 
            <h1 onClick={() => fetchCards()}>{props.title}</h1>
            <div>
                {cards?.filter(card => card.status === props.title)
                        .map(card => (
                                <Card 
                                    key = {card.no}
                                    no = {card.no}
                                    title = {card.title}
                                    description = {card.description}
                                />
                ))}


                {/* {
                    data
                        .filter(d => d.status === props.title)
                        .map(d => <Card 
                                    key = {d.no}
                                    no = {d.no}
                                    title = {d.title}
                                    description = {d.description}
                                    tasks = {d.tasks}
                            />)
                } */}
            </div>
        </div>
    );
}

export default CardList;