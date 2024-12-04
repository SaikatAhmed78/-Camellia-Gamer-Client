
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD9n1Ve3AZ6GAGdlaDUsN0OwwTj_EoT28k",
  authDomain: "cheaking-f60b4.firebaseapp.com",
  projectId: "cheaking-f60b4",
  storageBucket: "cheaking-f60b4.firebasestorage.app",
  messagingSenderId: "458550096756",
  appId: "1:458550096756:web:6b5d70ae802827c3b67221"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);