// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBnw1v0b-hBKprRbSTrM-rMF2FnvTYTnnY",
  authDomain: "gdsc-cert-generator.firebaseapp.com",
  projectId: "gdsc-cert-generator",
  storageBucket: "gdsc-cert-generator.appspot.com",
  messagingSenderId: "250996670250",
  appId: "1:250996670250:web:c081f8b7be099d84c16853",
  measurementId: "G-2GWF019CD5",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);
const storage = getStorage(app);

export { db, storage };
