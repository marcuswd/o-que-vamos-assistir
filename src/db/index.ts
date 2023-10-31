// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAC3xOmp07bypFsMdbBNHqNabG-05-5yQY",
  authDomain: "o-que-vamos-assistir.firebaseapp.com",
  projectId: "o-que-vamos-assistir",
  storageBucket: "o-que-vamos-assistir.appspot.com",
  messagingSenderId: "564622609675",
  appId: "1:564622609675:web:54c52d2bcd29ebf95ca60e",
  measurementId: "G-MPLFT4GRXV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);
export const db = getFirestore(app);
