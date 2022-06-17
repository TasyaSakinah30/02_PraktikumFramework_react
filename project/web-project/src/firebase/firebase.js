import { initializeApp } from 'firebase/app'
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


const firebaseConfig = {
    apiKey: "AIzaSyD_ihbXMiR8KjEDhm1vvM7d2VVBTelMmyE",
    authDomain: "tugasakhirpbf.firebaseapp.com",
    databaseURL: "https://tugasakhirpbf-default-rtdb.firebaseio.com",
    projectId: "tugasakhirpbf",
    storageBucket: "tugasakhirpbf.appspot.com",
    messagingSenderId: "799472338393",
    appId: "1:799472338393:web:7dc62363e57a175cd5c5c8",
    measurementId: "G-F2Z87R0EQK"
};

export const myFirebase = initializeApp(firebaseConfig);
