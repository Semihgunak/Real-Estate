// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-6c7ec.firebaseapp.com",
  projectId: "mern-estate-6c7ec",
  storageBucket: "mern-estate-6c7ec.appspot.com",
  messagingSenderId: "91185738427",
  appId: "1:91185738427:web:12d5b58e053fd1efb5ef9e",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
