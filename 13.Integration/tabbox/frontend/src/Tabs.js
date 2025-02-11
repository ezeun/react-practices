import React from 'react';
import TabItem from './TabItem';
import {Tab_Box_Ul} from './assets/scss/TabBox.scss';

function Tabs({tabs}) {
    return (
        <ul className={Tab_Box_Ul}>
            {
                tabs.map(tab => <TabItem 
                                        key = {tab.no}
                                        name={tab.name}
                                        active={tab.active}
                                />)
            }
        </ul>
    );
}

export default Tabs;