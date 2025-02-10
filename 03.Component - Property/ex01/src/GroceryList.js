import React, { Component } from 'react';
import GroceryItem from './GroceryItem';

function GroceryList ({groceries}) {
    
    return (
        <ol className={"grocery-list"}>
            <GroceryItem name={'bread'} count={10}/>
            <GroceryItem name={'milk'} count={5}/>
            <GroceryItem name={'egg'} count={20}/>
        </ol>
    );
}

export default GroceryList;