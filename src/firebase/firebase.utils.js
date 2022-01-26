import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const config = {
    apiKey: "AIzaSyDHxn0DyQm5_9vWYxl__xWaSBmeqm1p_nA",
    authDomain: "crwn-db-2be34.firebaseapp.com",
    projectId: "crwn-db-2be34",
    storageBucket: "crwn-db-2be34.appspot.com",
    messagingSenderId: "783244591407",
    appId: "1:783244591407:web:b079249d9c1385bfb921da",
    measurementId: "G-XSS01V7HGN"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
