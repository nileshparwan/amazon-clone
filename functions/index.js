const functions = require('firebase-functions');
const express = require('express');
const cors = require('cors');
const { response } = require('express');
const stripe = require('stripe')('sk_test_51HPvlWJYxEO8QRxLlbz3WJdJ7nulqyuZmyaqdfNAzb0e4wCS8IVKNTeQk2wMp1FKFAmmnyJZsRWvCb5DLpCPK3sS00rQEE2ekf');

// API

// app config
const app = express();

// Middleware
app.use(cors({ origin: true }));
app.use(express.json());

// API routes
app.get('/', (request, response) => response.status(200).send('hello world'));
// app.get('/nilesh', (request, response) => response.status(200).send('whats up nilesh'));

app.post('/payments/create', async (req, res) => {
    const total = req.query.total;
    console.log("TOTAL >>> ", total);
    console.log('Payment Request received BOOM !!! for this amount >>>', total);

    const paymentIntent = await stripe.paymentIntents.create({
        amount: total, //subunit of the currency
        currency: 'usd',
    });

    // ok - create
    res.status(201).send({
        clientSecret: paymentIntent.client_secret
    });
});

// Listen command
exports.api = functions.https.onRequest(app);

// Example endpoint (to add in baseUrl of axios)
// http://localhost:5001/fir-82e13/us-central1/api
// http://localhost:5001/fir-82e13/us-central1/api/nilesh

