import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: "fake-c91c5.firebaseapp.com",
  databaseURL: "https://fake-c91c5.firebaseio.com",
  projectId: "fake-c91c5",
  storageBucket: "fake-c91c5.appspot.com",
  messagingSenderId: "498573603904",
  appId: "1:498573603904:web:35b771d79f148db4a45ba5",
  measurementId: "G-PCPNBY05Y7",
});

const db = firebaseApp.firestore();
const auth = firebaseApp.auth();

export { db, auth };
