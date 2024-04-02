// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyABeQpx29fdTR9HRRiHhPB8iABVSUIwoak",
  authDomain: "fir-auth-e7db5.firebaseapp.com",
  projectId: "fir-auth-e7db5",
  storageBucket: "fir-auth-e7db5.appspot.com",
  messagingSenderId: "503902284344",
  appId: "1:503902284344:web:c7b6318e8641acea0dd4cd",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
