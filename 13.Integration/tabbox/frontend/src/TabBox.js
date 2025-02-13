import React, {useState} from 'react';
import Tabs from './Tabs';
import TabView from './TabView';
import data from './assets/json/data';
import {Tab_Box} from './assets/scss/TabBox.scss';

function TabBox(props) {
    const [activeIndex, setActiveIndex] = useState(0);

    const selectTab = (no) => {
        setActiveIndex(data.findIndex((e) => e.no === no));
    }

    return (
        <div className={Tab_Box}>
            <Tabs 
                selectTab={selectTab}
                tabs={data.map((e, i) => {
                    const {contents, ...rest} = e;
                    rest.active = (i === activeIndex);
                    return rest;
                })}
                />
            <TabView contents={data[activeIndex].contents}/>
        </div>
    );
}

export default TabBox;