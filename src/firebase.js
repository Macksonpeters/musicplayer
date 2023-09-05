// Import the functions you need from the SDKs you need
import firebase from "firebase/app";
import "firebase/auth";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDU99aOAH1W0cJFuTjN27vqfcCqmkGEhp4",
  authDomain: "database-312f0.firebaseapp.com",
  databaseURL: "https://database-312f0-default-rtdb.firebaseio.com",
  projectId: "database-312f0",
  storageBucket: "database-312f0.appspot.com",
  messagingSenderId: "254981216444",
  appId: "1:254981216444:web:45219cc93db730429618b9",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize firebase Authentication and get a reference to the service
const auth = getAuth(app);
export default auth;
