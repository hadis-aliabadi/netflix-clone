// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
console.log(process.env)
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCJLYAqhcm9OH9fX37dlZgpUlFzSD035Ho",
  authDomain: "netflix-react-ee882.firebaseapp.com",
  projectId: "netflix-react-ee882",
  storageBucket: "netflix-react-ee882.appspot.com",
  messagingSenderId: "309901598058",
  appId: "1:309901598058:web:d98029c3bb96cc96ef9913",
  measurementId:"G-39RT2ET52C"
};

// #   apiKey: "AIzaSyCJLYAqhcm9OH9fX37dlZgpUlFzSD035Ho",
// #   authDomain: "netflix-react-ee882.firebaseapp.com",
// #   projectId: "netflix-react-ee882",
// #   storageBucket: "netflix-react-ee882.appspot.com",
// #   messagingSenderId: "309901598058",
// #   appId: "1:309901598058:web:d98029c3bb96cc96ef9913",
// #   measurementId: "G-39RT2ET52C"


// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app)
