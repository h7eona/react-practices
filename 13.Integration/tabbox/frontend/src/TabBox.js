import React, { useState } from 'react';
import Tabs from './Tabs';
import TabView from './TabView';
import {Tab_Box} from './assets/scss/TabBox.scss';

function TabBox({ tabs }) {
    const [activeIndex, setActiveIndex] = useState(0); // 현재 선택된 탭 인덱스 상태

    return (
        <div className={Tab_Box}>
            <Tabs tabs={tabs} activeIndex={activeIndex} onTabClick={setActiveIndex} />
            <TabView content={tabs[activeIndex].contents} />
        </div>
    );
}

export default TabBox;