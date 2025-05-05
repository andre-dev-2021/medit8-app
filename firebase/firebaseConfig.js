// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';


// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB_GIvyxaCLY-vzrNLpL_XKAR0p8MR6YeY",
  authDomain: "medit8-app.firebaseapp.com",
  projectId: "medit8-app",
  storageBucket: "medit8-app.firebasestorage.app",
  messagingSenderId: "118671147645",
  appId: "1:118671147645:web:a247f05ffd3a7ef3ad2714",
  measurementId: "G-3X0K2JZ5F7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export { getAuth }