// import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCUMctwa0lbZxu3phJi8AF7DSzmuknnpa8",
  authDomain: "imoney-9d49f.firebaseapp.com",
  projectId: "imoney-9d49f",
  storageBucket: "imoney-9d49f.appspot.com",
  messagingSenderId: "1013156495129",
  appId: "1:1013156495129:web:06d6736f64cd8212c64f88",
  measurementId: "G-07WE8PXZ4G",
};

const app = initializeApp(firebaseConfig);
const projectAuth = getAuth(app);
const projectStorage = getStorage(app);
const projectFirestore = getFirestore(app);
// const timestore = firebase.firestore.FieldValue.serverTimestamp;
export { projectAuth, projectFirestore, projectStorage };
