import React from 'react';
import './Checkout.css';
import Subtotal from '../subtotal/Subtotal';
import { useStateValue } from '../../stateProvider/stateProvider';
import CheckoutProduct from '../checkoutProduct/CheckoutProduct';

const Checkout = () => {
    const [{ basket, user }, dispatch] = useStateValue();

    return (
        <div className="checkout">
            <div className="checkout__left">
                <img className="checkout__ad" src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg" alt="ads" />

                <div>
                    <h3>Hello, {user?.email || ""}</h3>
                    <h2 className="checkout__title">Your shopping basket</h2>
                    {basket.map((item, index) => <CheckoutProduct {...item} key={index} />)}
                </div>
            </div>

            <div className="checkout__right">
                <Subtotal basket={basket} />
            </div>
        </div>
    );
};

export default Checkout;
