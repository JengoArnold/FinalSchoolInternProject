import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDK8dNpNNzwm0jIL-EREuxZsRo200N2Syo",
  authDomain: "finalinternproject.firebaseapp.com",
  projectId: "finalinternproject",
  storageBucket: "finalinternproject.firebasestorage.app",
  messagingSenderId: "467581506353",
  appId: "1:467581506353:web:e8a265bb761511b110d610"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export {
  auth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile
};