import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import CurrencyFormat from 'react-currency-format';
import { useStateValue } from '../../stateProvider/stateProvider';
import CheckoutProduct from '../checkoutProduct/CheckoutProduct';
import { getBasketTotal } from '../../stateProvider/reducer';
import axios from '../../axios/axios';
import './Payment.css';


function Payment() {
    const [{ basket, user }, dispatch] = useStateValue();
    const history = useHistory();
    const [succeeded, setSucceeded] = React.useState(false);
    const [processing, setProcessing] = React.useState("");
    const [error, setError] = React.useState(null);
    const [disabled, setDisable] = React.useState(true);
    const [clientSecret, setClientSecret] = React.useState(true);
    const stripe = useStripe();
    const elements = useElements();

    React.useEffect(() => {
        //generate the special stripe secret which allows us to charge a customer

        const getClientSecret = async () => {

            const response = await axios({
                method: "post",
                // stripe expects total in a currencies subunits
                url: `/payments/create?total=${getBasketTotal(basket) * 100}`
            });
            setClientSecret(response.data.clientSecret);
        };

        getClientSecret();
    }, [basket]);

    console.log("THIS SECRET IS >>>", clientSecret);

    const handleSubmit = async (event) => {
        event.preventDefault();

        setProcessing(true);

        const payload = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: elements.getElement(CardElement)
            }
        }).then(({ paymentIntent }) => {
            // paymentIntent = payment confirmation
            setSucceeded(true);
            setError(null);
            setProcessing(false);

            //empty basket
            dispatch({
                type: "EMPTY_BASKET"
            });

            history.replace('/orders'); //we do replace because we don't want user to comeback after payment
        });

    };

    const handleChange = (event) => {
        // listen for changes in the card element
        // and display any errors as the customer types their card details
        setDisable(event.empty);
        setError(event.error ? event.error.message : "");
    };

    return (
        <div className="payment">

            <div className="payment__container">
                <h1>
                    Checkout (<Link to="/checkout">{basket?.length} items</Link>)
                </h1>
                <div className="payment__section">
                    <div className="payment__title">
                        <h3>Delivery Address</h3>
                    </div>

                    <div className="payment__address">
                        <p>{user?.email}</p>
                        <p>123 React Lane</p>
                        <p>Mauritius</p>
                    </div>
                </div>

                <div className="payment__section">
                    <div className="payment__title">
                        <h3>Review items and delivery</h3>
                    </div>

                    <div className="payment__items">
                        {basket.map(item => <CheckoutProduct {...item} />)}
                    </div>
                </div>

                <div className="payment__section">
                    <div className="payment__title">
                        <h3>Payment Method</h3>
                    </div>

                    <div className="payment__details">
                        <form onSubmit={handleSubmit}>
                            <CardElement onChange={handleChange} />
                            <div className="payment__priceContainer">
                                <CurrencyFormat
                                    renderText={(value) => (
                                        <h3>Order Total: {value}</h3>
                                    )}
                                    decimalScale={2}
                                    value={getBasketTotal(basket) || 0}
                                    displayType={"text"}
                                    thousandSeparator={true}
                                    prefix={"$"}
                                />
                                <button disabled={processing || disabled || succeeded}>
                                    <span>{processing ? <p>Processing</p> : "Buy Now"}</span>
                                </button>
                            </div>

                            {error && <div>{error}</div>}
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Payment;
