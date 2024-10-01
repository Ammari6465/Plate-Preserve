// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore"; // Import Firestore

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCZccGmgn5LPQCfcPSNTFXdGBoaqq0c-34",
  authDomain: "plate-preserve.firebaseapp.com",
  projectId: "plate-preserve",
  storageBucket: "plate-preserve.appspot.com",
  messagingSenderId: "9305585462",
  appId: "1:9305585462:web:a888a56206d4d65e86a597",
  measurementId: "G-5S8GLCBMJ5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Initialize Firestore
const db = getFirestore(app);

export { db };
