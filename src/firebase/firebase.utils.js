import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyDeecv8Ph4mn38hgK6P8Elc9_ooUDCFpM8",
  authDomain: "online-shop-store-db.firebaseapp.com",
  databaseURL: "https://online-shop-store-db.firebaseio.com",
  projectId: "online-shop-store-db",
  storageBucket: "online-shop-store-db.appspot.com",
  messagingSenderId: "137369322143",
  appId: "1:137369322143:web:c862e8e5b39b497b6dd8aa",

  measurementId: "G-P7FPSY5N27"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;