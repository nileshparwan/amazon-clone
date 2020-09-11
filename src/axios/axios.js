import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://us-central1-fir-82e13.cloudfunctions.net/api' //the api )cloud function) url
});
//https://us-central1-fir-82e13.cloudfunctions.net/api => now this is our deploy app api (
    //go to firebase > functions and copy the request link
//)

// http://localhost:5001/fir-82e13/us-central1/api => we use this only for local test

// baseUrl ends with /api because of exports.api which is in functions/index

export default instance;