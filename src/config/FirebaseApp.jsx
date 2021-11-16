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
  apiKey: "AIzaSyCKo7KdQwBXhmk5Ck4UNzSkEH-3xi8XF8o",
  authDomain: "mypmsbase.firebaseapp.com",
  projectId: "mypmsbase",
  storageBucket: "mypmsbase.appspot.com",
  messagingSenderId: "374940275287",
  appId: "1:374940275287:web:4d962cdf3865aeb7478912",
  measurementId: "G-P3CL27XN3J"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);


