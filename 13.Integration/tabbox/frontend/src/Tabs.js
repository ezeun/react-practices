import React from 'react';
import TabItem from './TabItem';

function Tabs({tabs}) {
    return (
        <ul>
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