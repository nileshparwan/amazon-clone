import React from 'react';
import './App.css';
import Header from './components/header/Header';
import Home from './components/home/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Checkout from './components/checkout/Checkout';
import Login from './components/login/Login';
import { auth } from './config/firebase';
import { useStateValue } from './stateProvider/stateProvider';
import Payment from './components/payment/Payment';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import Orders from './components/orders/Orders';
import Footer from './components/Footer/Footer';

const promise = loadStripe("pk_test_51HPvlWJYxEO8QRxLG7ofc534XA5b0vhS1gtZDlzYzLMmBAWEDdFW1HCg1uGeLZQMVgYMRK8ALxffYSmN3QJlBEyx00S9ndjAvK");

function App() {
  const [{ }, dispatch] = useStateValue();

  React.useEffect(() => {
    auth.onAuthStateChanged(authUser => {
      console.log("THE USE IS >>>", authUser);
      if (authUser) {
        // user loggedin
        dispatch({
          type: "SET_USER",
          user: authUser
        });
      } else {
        // user is logged out
        dispatch({
          type: "SET_USER",
          user: null
        });
      }
    });
  }, []);

  return (
    <Router>
      <div className="app">
        <Switch>

          <Route path="/login">
            <Login />
          </Route>

          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>

          <Route path="/orders">
            <Header />
            <Orders />
          </Route>

          <Route path="/payment">
            <Header />
            <Elements stripe={promise}>
              <Payment />
            </Elements>
          </Route>

          <Route path="/">
            <Header />
            <Home />
            <Footer />
          </Route>

        </Switch>
      </div>
    </Router>
  );
}

export default App;
