// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDGBFwoJnI-MAeaPqnYPRyIzRVPokh2_i8",
  authDomain: "mobilesm2025.firebaseapp.com",
  projectId: "mobilesm2025",
  storageBucket: "mobilesm2025.firebasestorage.app",
  messagingSenderId: "993226695738",
  appId: "1:993226695738:web:4f7b9c5f467d5ccd128103"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);