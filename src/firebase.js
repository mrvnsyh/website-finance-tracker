// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore, doc, setDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDoqb6ZuN_Jq5W7h3y1-LHOqH-CofrOPVE",
  authDomain: "personal-finance-tracker-4d908.firebaseapp.com",
  projectId: "personal-finance-tracker-4d908",
  storageBucket: "personal-finance-tracker-4d908.appspot.com",
  messagingSenderId: "620581379935",
  appId: "1:620581379935:web:0ae5e5cea133fe62e060ea",
  measurementId: "G-T1KXZX3HD4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
export { db, auth, provider, doc, setDoc };