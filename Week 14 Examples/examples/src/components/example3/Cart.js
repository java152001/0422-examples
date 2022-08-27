import React from 'react';
import { Button, Stack } from '@mui/material'

export default function Cart({ cartItems }) {

    const availableItems = cartItems.map((item, index) => {
        return (
            <Button 
                id={item.product} 
                key={index}
                variant='outlined'
            >
                {item.product}
            </Button>
        );
    });

    return (
        <Stack 
            id='cart-items' 
            key='cart'
            spacing={2}
            direction='column'
        >
            {availableItems}
        </Stack>
    );
}