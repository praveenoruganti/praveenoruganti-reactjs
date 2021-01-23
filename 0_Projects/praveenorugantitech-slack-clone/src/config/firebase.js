import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyD-rmN67bLf-NIwGdUkfsvZNEx-UNwXWXw",
  authDomain: "praveenoruganti-slack-clone.firebaseapp.com",
  projectId: "praveenoruganti-slack-clone",
  storageBucket: "praveenoruganti-slack-clone.appspot.com",
  messagingSenderId: "147569992946",
  appId: "1:147569992946:web:c86013b2ea2216ab18dc6b"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };

export default db;
