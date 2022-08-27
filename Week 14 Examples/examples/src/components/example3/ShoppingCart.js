import React, { useState } from 'react';
import Cart from './Cart';
import { Button, Stack } from '@mui/material'

export default function ShoppingCart({ availableItems }) {

    const [cart, setCart] = useState([]);
    const [stock, setStock] = useState([...availableItems]);

    const moveToCart = e => {

        //IMPORTANT for NextTech
        let [product, numInStock] = e.target.innerHTML.split(' : ');

        console.log(product)
        console.log(parseInt(numInStock));

        if (parseInt(numInStock) === 0) {
            return;
        } else {
            const itemFilter = stock.filter(item => item.product === product);
            itemFilter[0].inStock--;
            setStock(stock);
            setCart([...cart, itemFilter[0]])
        }

    }

    const availableItemsButtons = stock.map((item, index) => {
        return (
            <Button 
                id={item.product}
                key={index}
                onClick={(e) => moveToCart(e)}
                variant='contained'
            >
                {item.product} : {item.inStock}
            </Button>
        )
    });

    return (
        <>
            <Stack
                spacing={2}
                direction='column'    
            >
                {availableItemsButtons}
            </Stack>
            <h1>Shopping Cart</h1>
            <Cart cartItems={cart}>Cart Items</Cart>
        </>
    )
}