import React from 'react';
import {Tab_Box_Li, Active} from './assets/scss/TabBox.scss';

function TabItem({no, name, active, selectTab}) {

    return (
        <li 
            className={`${Tab_Box_Li} ${active ? Active : ''}`}
            onClick={() => {
                selectTab(no);
            }}>
            {name}
        </li>
    );
}

export default TabItem;