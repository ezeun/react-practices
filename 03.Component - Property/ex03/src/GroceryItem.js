import React from 'react';

function GroceryItem({name, count}) {
    return (
        <li>
            <string>{name}</string>
            <span>{count}</span>
        </li>
    );
}

export default GroceryItem;