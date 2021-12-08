// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore"
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC0IIKHA1F28eNiqqxS88X4-xlv_ZaB57g",
  authDomain: "databaseega.firebaseapp.com",
  projectId: "databaseega",
  storageBucket: "databaseega.appspot.com",
  messagingSenderId: "583638244131",
  appId: "1:583638244131:web:6b8b44bb38836128864a96",
  measurementId: "G-ZB56HEVMD1"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);


