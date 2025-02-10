import React from 'react';

function Contents({title, name}) {
    // return (
    //     <p>{title}</p>
    // );

    return React.createElement('p', null, 'Pure React 컴포넌트')
}

export default Contents;