import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyD3AKS1AWVNDnvKFFgnjaEgT1JyPLkNs7s",
    authDomain: "react-ecommerce-800f9.firebaseapp.com",
    databaseURL: "https://react-ecommerce-800f9.firebaseio.com",
    projectId: "react-ecommerce-800f9",
    storageBucket: "react-ecommerce-800f9.appspot.com",
    messagingSenderId: "973846889727",
    appId: "1:973846889727:web:c6b24026ab7619c854f8ca"
  };

  firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
