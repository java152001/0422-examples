import './App.css';
import React from 'react';
import Planner from './components/example1/Planner'
import Click from './components/example2/Click'
import ShoppingCart from './components/example3/ShoppingCart'

function App() {

    // Example 3 Prop Data

    const products = [
        {
            product: 'Seven Wonders',
            inStock: 7
        },
        {
            product: 'Clank',
            inStock: 3
        },
        {
            product: 'Lost Ruins of Arnak',
            inStock: 1
        },
        {
            product: 'Splendor',
            inStock: 5
        }
    ]

    return (
        // Example 1
        // <Planner />
        // Example 2
        // <Click />
        // Example 3
        <ShoppingCart availableItems = {products} />
    )
}

export default App;
