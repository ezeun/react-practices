import React from 'react';
import GroceryList from './GroceryList';
import './assets/css/styles.css';

function App(props) {
    
    return (
        <div id={'App'}>
            <h1 >{'Grocery List'}</h1>
            <GroceryList />
        </div>
    );
}

export default App;