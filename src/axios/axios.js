import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://localhost:5001/fir-82e13/us-central1/api' //the api )cloud function) url
});

// baseUrl ends with /api because of exports.api which is in functions/index

export default instance;