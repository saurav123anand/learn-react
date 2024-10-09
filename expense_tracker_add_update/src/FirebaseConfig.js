// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDahEcfxNI1e1WSA84k8c2znhgtqX_4SRk",
  authDomain: "react-demo-3b1a4.firebaseapp.com",
  projectId: "react-demo-3b1a4",
  storageBucket: "react-demo-3b1a4.appspot.com",
  messagingSenderId: "1016798441382",
  appId: "1:1016798441382:web:ef615cffe2ae421cb1e967",
  measurementId: "G-BSB5R1EB2F"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
