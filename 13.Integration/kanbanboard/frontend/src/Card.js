import React, {useState} from 'react';
import TaskList from './TaskList';
import {_Card, Card_Title} from './assets/scss/Card.scss';

function Card({no, title, description, tasks}) {
    const [open, setOpen] = useState(false);
    
    return (
        <div className={_Card}>
            <div className={[Card_Title, (open ? 'Card_Title_Open' : '')].join(' ')}
                onClick={async () => {setOpen(!open);}}>
                {title}
            </div>

            <div>
                {description}
            </div>

            {open ? <TaskList 
                        cardNo={no}
                        tasks={tasks}/>
                    : null}
        </div>
    );
}

export default Card;