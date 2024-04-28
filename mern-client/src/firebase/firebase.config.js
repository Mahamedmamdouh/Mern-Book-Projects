// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCnN_SgatN1blVtbhLX8nvgjs59-C0d-kU",
  authDomain: "mern-book-store-eb910.firebaseapp.com",
  projectId: "mern-book-store-eb910",
  storageBucket: "mern-book-store-eb910.appspot.com",
  messagingSenderId: "990706726930",
  appId: "1:990706726930:web:dce813c5700d5a93f140cb",
  measurementId: "G-7MWV4VV8ST"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


export default app;