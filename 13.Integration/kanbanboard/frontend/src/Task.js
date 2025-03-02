import React from 'react';
import {_Task, Task_Remove} from './assets/scss/Task.scss';

function Task({no, name, done}) {

    return (
        <li className={_Task}>
            <input type='checkbox' check={done.toString()} />
            {name}
            <a href='#' className={Task_Remove} />
        </li>
    );
}

export default Task;