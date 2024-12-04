// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDlHMw27XL26PYx7BW_8a4JNJuD3jilWYE",
  authDomain: "sports-equipment-online-81309.firebaseapp.com",
  projectId: "sports-equipment-online-81309",
  storageBucket: "sports-equipment-online-81309.firebasestorage.app",
  messagingSenderId: "539163701394",
  appId: "1:539163701394:web:c5782381021d417422b64b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);