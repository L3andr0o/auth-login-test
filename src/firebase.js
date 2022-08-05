// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDTkLRMMpp1xJZ6btkUx5afqPzc95fRETw",
  authDomain: "auth-test-93492.firebaseapp.com",
  projectId: "auth-test-93492",
  storageBucket: "auth-test-93492.appspot.com",
  messagingSenderId: "877318480064",
  appId: "1:877318480064:web:461f422fcacce6e76c8d25"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);