import React, { useEffect, useState } from 'react';
import { addToDb } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {
    const [products ,setProducts] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(()=>{
        fetch('products.json')
        .then(res => res.json())
        .then(data => setProducts(data));
    },[])

    const handleAddToCart =(product)=>{
        console.log(product);
        const newCard = [...cart , product];
        setCart(newCard);
        addToDb(product.id)
     }

    return (
        <div className='shop-container'>
            <div className="product-container">
                {
                    products.map(product=><Product 
                        key={product.id}
                        product={product}
                        handleAddToCart={handleAddToCart}
                    ></Product>)
                }
            </div>
            <div className="cart-container">
                <Cart cart={cart}></Cart>
                <div className='carts'>
                {
                    cart.map((item)=><h4 key={item.id}>{item.name}</h4>)
                }
                </div>
            <div className='btn-container'>
                <button className='btn1'>Choose One</button>
                <button className='btn2'>Choose again</button>
            </div>
            </div>
        </div>
    );
};

export default Shop;