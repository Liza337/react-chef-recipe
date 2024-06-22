// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  // apiKey: import.meta.env.VITE_API_KEY,
  // authDomain: import.meta.env.VITE_AUTH_DOMAIN,
  // projectId: import.meta.env.VITE_PROJECT_ID,
  // storageBucket: import.meta.env.VITE_STORAGE_BUCKET,
  // messagingSenderId: import.meta.env.VITE_MESSAGING_SENDER_ID,
  // appId: import.meta.env.VITE_APP_ID
  apiKey: "AIzaSyB4uZJ74hloEtK-oXH-ADmPo6IPOLEPCc4",
  authDomain: "react-chef-recipe.firebaseapp.com",
  projectId: "react-chef-recipe",
  storageBucket: "react-chef-recipe.appspot.com",
  messagingSenderId: "872917729420",
  appId: "1:872917729420:web:03559b6ab52f75aafd3ba9"

};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;