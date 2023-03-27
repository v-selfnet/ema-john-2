import React from 'react';
import { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Shop.css';

const Shop = () => {
    const [products, setProducts] = useState([]);
    useEffect( () => {
        fetch('products.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    }, []);

    /* send function to props in Product - unidirection
    button click in child and triggered in its parent.
    unidirection do not support this flow.
    Thats why send this function as a property to its child[Product].
    and then [props] receive this [property/props function] */
    const [cart, setCart] = useState([]);
    const addCart = (product) => {
        console.log('added cart', product)
        const newCart = [...cart, product];
        setCart(newCart);
    }

    return (
        <div className='shop-container'>
            <div className="products">
                {
                    products.map(product => <Product 
                        key={product.id}
                        product={product}
                        addCart={addCart} // send function-property to [props] in Product
                    ></Product>)
                }
            </div>
            <div className="cart">
                <h4>Order Summery</h4>
                <p>Selected Items: {cart.length}</p>
            </div>
        </div>
    );
};

export default Shop;