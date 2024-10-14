// src/firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  // Your Firebase config
 
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
