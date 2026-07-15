import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";

// Firestore
import {
  getFirestore,
  collection,
  addDoc,
  serverTimestamp
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDK8dNpNNzwm0jIL-EREuxZsRo200N2Syo",
  authDomain: "finalinternproject.firebaseapp.com",
  projectId: "finalinternproject",
  storageBucket: "finalinternproject.firebasestorage.app",
  messagingSenderId: "467581506353",
  appId: "1:467581506353:web:e8a265bb761511b110d610"
};






const app = initializeApp(firebaseConfig);
// Authentication
export const auth = getAuth(app);
// Firestore
export const db = getFirestore(app);


export {
  collection,
  addDoc,
  serverTimestamp,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile
};