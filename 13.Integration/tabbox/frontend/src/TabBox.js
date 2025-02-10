import React from 'react';
import Tabs from './Tabs';
import TabView from './TabView';
import data from './assets/json/data';

function TabBox(props) {
    return (
        <div className={"tab-box"}>
            <Tabs tabs={data}/>
            <TabView />
        </div>
    );
}

export default TabBox;