import React from 'react';
import './Product.css'

const Product = ({product, handleAddToCart}) => {
    const {name , img , price} = product;
    return (
        <div className='product'>
            <img src={img} alt=''></img>
            <div className='product-info'>
                <p className='product-name'>{name}</p>
                <p>Price: ${price}</p>
            </div>
            <button onClick={() => handleAddToCart(product)} className='btn-card'>
                <p className='btn-text'>Add to Card</p>
            </button>
        </div>
    );
};

export default Product;