import React, { useState } from 'react';
import CardList from './CardList.js';
import data from './assets/json/data.js'
import {Kanban_Board} from './assets/scss/KanbanBoard.scss';

function KanbanBoard() {
    const [cards, setCards] = useState(data);

    const toDo = cards.filter((card) => card.status === 'ToDo');
    const doing = cards.filter((card) => card.status === 'Doing');
    const done = cards.filter((card) => card.status === 'Done');

    return (
        <div className={Kanban_Board}>
            <CardList title={'To Do'} cards={toDo}/>
            <CardList title={'Doing'} cards={doing}/>
            <CardList title={'Done'} cards={done}/>
        </div>
    );
}

export default KanbanBoard;