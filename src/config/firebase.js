// Import the functions you need from the SDKs you need

import { getFirestore } from "firebase/firestore";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCYvQK-_oHc2YsJAf6FmPOz_JJqSq3q4SA",
  authDomain: "sampleapp-2d62c.firebaseapp.com",
  projectId: "sampleapp-2d62c",
  storageBucket: "sampleapp-2d62c.appspot.com",
  messagingSenderId: "22578881656",
  appId: "1:22578881656:web:54118035cf92c59692398d",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default db = getFirestore(app);
