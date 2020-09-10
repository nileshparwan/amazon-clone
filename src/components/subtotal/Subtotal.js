import React from 'react';
import CurrencyFormat from 'react-currency-format';
import './Subtotal.css';
import { getBasketTotal } from '../../stateProvider/reducer';
import { useHistory } from 'react-router-dom';

const Subtotal = ({ basket }) => {
    const history = useHistory();
    return (
        <div className="subtotal">
            <CurrencyFormat
                renderText={(value) => (
                    <>
                        <p>
                            Subtotal ({basket.length || 0} items):
                            <strong>{`${value}`}</strong>
                        </p>
                        <small className="subtotal__gift">
                            <input type="checkbox" />This order contains a gift
                        </small>
                    </>
                )}
                decimalScale={2}
                value={getBasketTotal(basket) || 0}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"$"}
            />
            <button onClick={() => history.push('/payment')}>Proceed to checkout</button>
        </div>
    );
};

export default Subtotal;
