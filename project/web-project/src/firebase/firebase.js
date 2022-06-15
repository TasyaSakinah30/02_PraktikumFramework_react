import { initializeApp } from 'firebase/app'

const firebaseConfig = {
    apiKey: "AIzaSyBmX0umkYGIxGD3jqSQeLCr-sgPOMJpUt8",
    authDomain: "praktikum11-42d97.firebaseapp.com",
    projectId: "praktikum11-42d97",
    storageBucket: "praktikum11-42d97.appspot.com",
    messagingSenderId: "691600500060",
    appId: "1:691600500060:web:729d7b8b23b0a8d1d44d99",
    measurementId: "G-5M1F4H070V"
};

export const myFirebase = initializeApp(firebaseConfig);
