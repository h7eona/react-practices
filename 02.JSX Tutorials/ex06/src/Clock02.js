import React from 'react';

function Clock02(props) {
    const now = new Date();
    
    const hour = now.getHours();
    const min = now.getMinutes();
    const sec = now.getSeconds();
    
    return (
        <div>
            {hour > 10 ? hour : '0' + hour}
            {':'}
            {('0' + min).slice(-2)}
            {':'}
            {sec > 10 ? sec : '0' + sec}
        </div>
    );
}

export default Clock02;