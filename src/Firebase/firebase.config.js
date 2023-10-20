// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBLjKznoGrZVJZztxnfW5EoG91g5H570Zw",
  authDomain: "electro-mart-electronics.firebaseapp.com",
  projectId: "electro-mart-electronics",
  storageBucket: "electro-mart-electronics.appspot.com",
  messagingSenderId: "371247667778",
  appId: "1:371247667778:web:a296704ed2467adb0a6bdb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;