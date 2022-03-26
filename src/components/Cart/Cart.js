import React from 'react';
import './Cart.css'

const Cart = ({cart}) => {
    return (
        <div className='cart'>
            <div>
            <h4>Order summary</h4>
            <p>Selected item: {cart.length}</p>
            </div>
            
        </div>
    );
};

export default Cart;