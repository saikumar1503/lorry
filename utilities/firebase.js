// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBzbSg5eVoO5aWxNlZjt-sWv7xkjHdHLYo",
  authDomain: "truckapplication-938a3.firebaseapp.com",
  projectId: "truckapplication-938a3",
  storageBucket: "truckapplication-938a3.appspot.com",
  messagingSenderId: "266668337377",
  appId: "1:266668337377:web:5b784acf75b368ac0bafa0",
  measurementId: "G-QJFNKGCMMR",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
