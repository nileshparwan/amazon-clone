import React from 'react';
import './Product.css';
import { useStateValue } from '../../stateProvider/stateProvider';

function Product({ id, title, image, price, rating }) {
    const [{ basket }, dispatch] = useStateValue();

    const addToBasket = () => {
        // dispatch some item in the data layer
        dispatch({
            type: 'ADD_TO_BASKET',
            item: {
                id: id,
                title: title,
                image: image,
                price: price || 0,
                rating: rating
            }
        });
    };

    return (
        <div className="product">
            <div className="product__info">
                <p>{title || "The lean startup"}</p>
                <p className="product__price">
                    <small>$</small>
                    <strong>{price || 19.99}</strong>
                </p>
                <div className="product__rating">
                    {Array(rating).fill().map((_, i) => <span role="img" aria-label="star" key={i}>⭐</span>)}
                </div>
            </div>
            <img src={image || "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_Electronics_1x._SY304_CB432774322_.jpg"} alt="product" />
            <button onClick={addToBasket}>Add to basket</button>
        </div>
    );
}

export default Product;
