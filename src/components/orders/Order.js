import React from 'react';
import moment from 'moment';  //for timestamp
import './Order.css';
import CheckoutProduct from '../checkoutProduct/CheckoutProduct';
import CurrencyFormat from 'react-currency-format';

function Order({ order }) {
    return (
        <div className="order">
            <h2>Order</h2>
            <p>{moment.unix(order.data.created).format("MMMM Do YYYY, h:mma")}</p>
            <p className="order__id">
                <small>{order.id}</small>
            </p>
            {order.data.basket?.map(item => (
                <CheckoutProduct
                    id={item.id}
                    title={item.title}
                    image={item.image}
                    price={item.price}
                    rating={item.rating}
                    hideButton={true}
                />
            ))}
            <CurrencyFormat
                renderText={(value) => (
                    <>
                        <h3 className="order__total">Order Total: {value}</h3>
                    </>
                )}
                decimalScale={2}
                value={order.data.amount / 100 || 0}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"$"}
            />
        </div>
    );
}

export default Order;
