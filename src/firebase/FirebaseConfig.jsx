// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBY0A8LG6AgrX1YuSDba3NlXN-6srsnMl8",
  authDomain: "auth-prac-50f0f.firebaseapp.com",
  projectId: "auth-prac-50f0f",
  storageBucket: "auth-prac-50f0f.appspot.com",
  messagingSenderId: "873163586395",
  appId: "1:873163586395:web:6eae642b3cb4857628387e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);