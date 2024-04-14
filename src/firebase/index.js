// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";

import { getFirestore } from "firebase/firestore";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDuCdLV9hhiELrybkbnKZkfbHL5VnYCbI4",
  authDomain: "interview-scheduled-app.firebaseapp.com",
  projectId: "interview-scheduled-app",
  storageBucket: "interview-scheduled-app.appspot.com",
  messagingSenderId: "996292952905",
  appId: "1:996292952905:web:fb2fc610bcaf5ef4145098",
  measurementId: "G-LSEKKWF04H"
};

// const analytics = getAnalytics(app);

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
console.log(import.meta.env) 
// console.log(app);
