import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyACl-UbKr22xPxGveKvJQru91uzKPp19TE",
    authDomain: "fir-82e13.firebaseapp.com",
    databaseURL: "https://fir-82e13.firebaseio.com",
    projectId: "fir-82e13",
    storageBucket: "fir-82e13.appspot.com",
    messagingSenderId: "496860980487",
    appId: "1:496860980487:web:7627524c258f39148f11a2"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };