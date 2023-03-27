import React from 'react';
import './Product.css';

const Product = (props) => {
    console.log(props.product);
    const {img, name, price, seller, ratings} = props.product;
    return (
        <div className='product'>
            <img src={img} alt="" />
            <h4>{name}</h4>
            <h2>Price: <small>$</small>{price}</h2>
            <p>Manufacturer: {seller}</p>
            <p>Ratings: {ratings} Star</p>
            <button>Add to Cart</button>
        </div>
    );
};

export default Product;