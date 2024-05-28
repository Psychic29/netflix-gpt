// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAgd_XLsYdro1ncF_-g-_6llfia-mXYyk0",
    authDomain: "netflix-gpt-7947f.firebaseapp.com",
    projectId: "netflix-gpt-7947f",
    storageBucket: "netflix-gpt-7947f.appspot.com",
    messagingSenderId: "349539897924",
    appId: "1:349539897924:web:f3f59687fea27682ee2211",
    measurementId: "G-5W92GNT9T7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const analytics = getAnalytics(app);

export const auth = getAuth(app);