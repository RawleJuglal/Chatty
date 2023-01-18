// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {getAuth} from 'firebase/auth';
import {getFirestore} from 'firebase/firestore'

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDz04nBEbZ1KR-F2MVLUPLItJBYdrR6byI",
  authDomain: "farmers-say.firebaseapp.com",
  projectId: "farmers-say",
  storageBucket: "farmers-say.appspot.com",
  messagingSenderId: "23878965921",
  appId: "1:23878965921:web:4e4c4730537a442ee52ee0",
  measurementId: "G-BYXEC5X69Q"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const db = getFirestore(app);