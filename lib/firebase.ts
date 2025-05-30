// lib/firebase.ts
import { initializeApp } from "firebase/app"
import { getAuth } from "firebase/auth"
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyAeyIFK0sFlQW1YkKUobpV7YCLRXplaH6A",
  authDomain: "genrev-web.firebaseapp.com",
  projectId: "genrev-web",
  storageBucket: "genrev-web.firebasestorage.app",
  messagingSenderId: "143678102995",
  appId: "1:143678102995:web:2848f431c26450097e6326"
};

const app = initializeApp(firebaseConfig)

export const auth = getAuth(app)
export const db = getFirestore(app)
