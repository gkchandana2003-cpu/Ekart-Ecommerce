// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import {getAuth}  from 'firebase/auth'
import {getFirestore}  from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDJdt-Out-cI8oBbyt5fTgKe-qu-cR3iP8",
  authDomain: "ecart-6ad53.firebaseapp.com",
  projectId: "ecart-6ad53",
  storageBucket: "ecart-6ad53.firebasestorage.app",
  messagingSenderId: "538560589058",
  appId: "1:538560589058:web:9cb2fec578781b4a35261b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const _Auth = getAuth(app)
export const _DB = getFirestore(app)
