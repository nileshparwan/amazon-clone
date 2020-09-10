import React from 'react';
import './CheckoutProduct.css';
import { useStateValue } from '../../stateProvider/stateProvider';

function CheckoutProduct({ id, image, title, price, rating }) {
    const [state, dispatch] = useStateValue();

    const RemoveFromBasketHandler = () => {
        // remove item from basket
        dispatch({
            type: "REMOVE_FROM_BASKET",
            id: id
        });
    };

    return (
        <div className="checkoutProduct">
            <img className="checkoutProduct__image" src={image} alt="product_image" />
            <div className="checkoutProduct__info">
                <p className="checkoutProduct__title">{title}</p>
                <p className="checkoutProduct__price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className="checkoutProduct__rating">
                    {Array(rating).fill().map((_, i) => <span role="img" aria-label="star" key={i}>⭐</span>)}
                </div>
                <button onClick={RemoveFromBasketHandler}>Remove from basket</button>
            </div>
        </div>
    );
}

export default CheckoutProduct;
