import React from 'react';
import {Tab_Box_Li, Active} from './assets/scss/TabBox.scss';

function TabItem({name, active}) {
    const [select, setSelect] = useState(active);

    return (
        <li 
            className={`${Tab_Box_Li} ${active ? Active : ''}`}
            onClick={() => {
                
            }}>
            {name}
        </li>
    );
}

export default TabItem;