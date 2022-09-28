import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import {getFirestore} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyAIHFivOZIDpRolNoK9nuKnlFObWRy-Mgk",
  authDomain: "donton-eba20.firebaseapp.com",
  projectId: "donton-eba20",
  storageBucket: "donton-eba20.appspot.com",
  messagingSenderId: "489614812895",
  appId: "1:489614812895:web:1b5e7d7fcb6e4c66b1eb6a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app)