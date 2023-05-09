import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const firebaseConfig = {
  apiKey: "AIzaSyBCbS7IEOvDACm-S1qn145bjpfTW6G_EYI",
  authDomain: "clone-7d0bf.firebaseapp.com",
  projectId: "clone-7d0bf",
  storageBucket: "clone-7d0bf.appspot.com",
  messagingSenderId: "151382470742",
  appId: "1:151382470742:web:1bc4416c6c3fc10ebb8bf7"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };

