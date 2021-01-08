
import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDcbloI9IQSdUYEpB471hf0QdF_k6f4Q6s",
  authDomain: "praveenoruganti-whatsapp.firebaseapp.com",
  projectId: "praveenoruganti-whatsapp",
  storageBucket: "praveenoruganti-whatsapp.appspot.com",
  messagingSenderId: "126872686437",
  appId: "1:126872686437:web:f1b3f632c0979c8aea5b8c"
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const database = firebaseApp.firestore();
const authentication = firebaseApp.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { database, authentication, provider };
