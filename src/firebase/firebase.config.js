// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDwIg_N1B_VMuQdNnVw7jtsWMUoWQGzuSA",
  authDomain: "authentech-firebase-practice.firebaseapp.com",
  projectId: "authentech-firebase-practice",
  storageBucket: "authentech-firebase-practice.appspot.com",
  messagingSenderId: "401996972397",
  appId: "1:401996972397:web:c2d543dbe42229cd2e9a64"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;