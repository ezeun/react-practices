import React from 'react';
import Tabs from './Tabs';
import TabView from './TabView';
import data from './assets/json/data';
import {Tab_Box} from './assets/scss/TabBox.scss';

function TabBox(props) {
    return (
        <div className={Tab_Box}>
            <Tabs tabs={data}/>
            <TabView />
        </div>
    );
}

export default TabBox;