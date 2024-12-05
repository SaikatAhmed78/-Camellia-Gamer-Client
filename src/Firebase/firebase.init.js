// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBfJBDvlL8ovZk-s5vUV85ikVo-ANj3CRc",
  authDomain: "chillgamerauth.firebaseapp.com",
  projectId: "chillgamerauth",
  storageBucket: "chillgamerauth.firebasestorage.app",
  messagingSenderId: "742487416110",
  appId: "1:742487416110:web:e3127f8beea831a0d1aebf"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)