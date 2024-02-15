// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCymX4E1gOK08qk8xBaZtq1TgsiB71_sTU",
  authDomain: "three-938f1.firebaseapp.com",
  projectId: "three-938f1",
  storageBucket: "three-938f1.appspot.com",
  messagingSenderId: "173933522190",
  appId: "1:173933522190:web:ff7d974ec00b116cf27b5f",
  measurementId: "G-828D996S7F"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);