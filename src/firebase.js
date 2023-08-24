import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCoFE055Dapmyv3kZJoFRAKBg_arjd0_9c",
    authDomain: "clone-516fd.firebaseapp.com",
    projectId: "clone-516fd",
    storageBucket: "clone-516fd.appspot.com",
    messagingSenderId: "686143289527",
    appId: "1:686143289527:web:7b744a860c8c8533bb3532",
    measurementId: "G-SKJ06SX809"
};


const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export {db, auth};