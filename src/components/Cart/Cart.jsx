import React from 'react';
import './Cart.css'

const Cart = ({cart}) => { // can direct destructure here
    console.log(cart);
    // const cart = props.cart; // option 1
    // const {cart} = props; // option 2

    let total = 0;
    for(const product of cart){
        console.log(product.price)
        total += product.price;
    }

    return (
        <div className='cart'>
            <h2>Order Summery</h2>
            <p>Selected Items: {cart.length}</p>
            <p>Total Price: {total}</p>
            <hr />
            <p>Total Shopping: </p>
            <p>Tax: </p>
            <h4>Grand Total: </h4>
        </div>
    );
};

export default Cart;