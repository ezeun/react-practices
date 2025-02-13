import React from 'react';
import CardList from './CardList';
import './assets/scss/KanbanBoard.scss';

function KanbanBoard() {
    return (
        <div className={'Kanban_Board'}>
            <CardList title={'ToDo'}/>
            <CardList title={'Doing'}/>
            <CardList title={'Done'}/>
        </div>
    );
}

export default KanbanBoard;