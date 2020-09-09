import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyA1-UYwoQszgjS_W5Q3aDsXr5bYV6IKXUk",
  authDomain: "fake-c91c5.firebaseapp.com",
  databaseURL: "https://fake-c91c5.firebaseio.com",
  projectId: "fake-c91c5",
  storageBucket: "fake-c91c5.appspot.com",
  messagingSenderId: "498573603904",
  appId: "1:498573603904:web:35b771d79f148db4a45ba5",
  measurementId: "G-PCPNBY05Y7",
});

const auth = firebase.auth();

export { auth };
