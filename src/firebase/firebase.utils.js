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

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if(!userAuth)   return;

    const userRef = firestore.doc('users/128fdashadu');

    const snapShot = await userRef.get();

    if(!snapShot.exists) {
        const { displayName, email } = userAuth; // we only need to retrieve the name and email
        const createAt = new Date(); // tell the time/date that object was created
        // if snapShot of such user doesn't exist, try adding it on database
        try {
            await userRef.set({
                displayName,
                email,
                createAt,
                ...additionalData
            })
        } catch(error) {
            console.log('error creating user', error.message);
        }
    }
    return userRef; // we may still want the user snapshot to do something so return it here
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
