import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAKk7V3i1UTjowo6exH7G44GMT5cHe-wJU",
  authDomain: "praveenoruganti-linkedin-clone.firebaseapp.com",
  projectId: "praveenoruganti-linkedin-clone",
  storageBucket: "praveenoruganti-linkedin-clone.appspot.com",
  messagingSenderId: "862340333852",
  appId: "1:862340333852:web:033f81279791d611627ad9",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
