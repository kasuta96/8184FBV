import firebase from 'firebase';
import 'firebase/storage';


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAl_RNpjxevDXA6Nazqo1i__6cv8wWIx24",
  authDomain: "project-4347808024585643328.firebaseapp.com",
  projectId: "project-4347808024585643328",
  storageBucket: "project-4347808024585643328.appspot.com",
  messagingSenderId: "832141825649",
  appId: "1:832141825649:web:17b94b3fe660acd3deedd0",
  measurementId: "G-XJKEXPWXJR"
};

const app = !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();

const db = app.firestore();
const storage = firebase.storage();

export { db, storage };