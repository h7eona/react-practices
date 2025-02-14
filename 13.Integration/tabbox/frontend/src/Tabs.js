import React from 'react';
import TabItem from './TabItem';
import styled from 'styled-components';

const StyledUL = styled.ul`
    height: 24px;
`;


function Tabs({ tabs, activeIndex, onTabClick }) {
    
    return (
        <StyledUL>
            {tabs.map((tab, index) =><TabItem 
                                        key={tab.no} 
                                        name={tab.name} 
                                        active={activeIndex === index} 
                                        onClick={() => onTabClick(index)}/>
            )}
        </StyledUL>
    );
}

export default Tabs;