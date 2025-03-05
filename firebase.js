// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAfZILUrMR6d1Y-d5uEOHcWM-7wp4HefPE",
  authDomain: "my-react-238f7.firebaseapp.com",
  projectId: "my-react-238f7",
  storageBucket: "my-react-238f7.firebasestorage.app",
  messagingSenderId: "757091010143",
  appId: "1:757091010143:web:7fda8b4f73b551c6bbfdea",
  measurementId: "G-HV1GPP973V"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);