import firebase from "firebase/app";
import "firebase/firestore";

const Config = {
  apiKey: "AIzaSyCpM9zxzdqwVQ9JuskPJiMcFvIA7lUXd1w",
  authDomain: "seoul-nari.firebaseapp.com",
  databaseURL: "https://seoul-nari.firebaseio.com",
  projectId: "seoul-nari",
  storageBucket: "seoul-nari.appspot.com",
  messagingSenderId: "694593628839",
  appId: "1:694593628839:web:30dedfce8587183d274982",
  measurementId: "G-X5DXX9FSRC"
};

firebase.initializeApp(Config);
// firebase.analytics();

const firestore = new firebase.firestore();

export { firestore };
