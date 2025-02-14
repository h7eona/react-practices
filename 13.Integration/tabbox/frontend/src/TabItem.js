import React from 'react';
import {Tab_Item} from './assets/scss/TabItem.scss';

function TabItem({ name, active, onClick }) {
    return (
        <li className={`${Tab_Item} ${active ? "active" : ""}`} onClick={onClick}>
            {name}
        </li>
    );
}

export default TabItem;
