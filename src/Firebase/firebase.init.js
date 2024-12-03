import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyBfJBDvlL8ovZk-s5vUV85ikVo-ANj3CRc",
  authDomain: "chillgamerauth.firebaseapp.com",
  projectId: "chillgamerauth",
  storageBucket: "chillgamerauth.firebasestorage.app",
  messagingSenderId: "742487416110",
  appId: "1:742487416110:web:e3127f8beea831a0d1aebf"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);