import React from 'react';
import {Tab_Box_Li, Active} from './assets/scss/TabBox.scss';

function TabItem({name, active}) {
    return (
        <li className={`${Tab_Box_Li} ${active ? Active : ''}`}>
            {name}
        </li>
    );
}

export default TabItem;