import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyD1R42aCn7r2_283cXODzpZ96g2HtLrdFk",
    authDomain: "react-app-cursos-efb94.firebaseapp.com",
    projectId: "react-app-cursos-efb94",
    storageBucket: "react-app-cursos-efb94.appspot.com",
    messagingSenderId: "800454288855",
    appId: "1:800454288855:web:fba656eddba947e8839792"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export {
    db,
    googleAuthProvider,
    firebase
}