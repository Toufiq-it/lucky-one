import React from 'react';
import './Cart.css'

const Cart = ({cart}) => {
    const {name,id} = cart;
    return (
        <div className='cart'>
            <h4>Order summary</h4>
            <p>Selected item: {cart.length}</p>
        </div>
    );
};

export default Cart;