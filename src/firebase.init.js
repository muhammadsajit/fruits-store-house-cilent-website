// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    
        // apiKey: "AIzaSyDgGpaxpmvHkJ4eWhAH_0lX7xYUsOmZ6DQ",
        // authDomain: "fruits-store-house.firebaseapp.com",
        // projectId: "fruits-store-house",
        // storageBucket: "fruits-store-house.appspot.com",
        // messagingSenderId: "544401191617",
        // appId: "1:544401191617:web:a6cc707368d4c60886da40"
      
    
        apiKey:process.env.REACT_APP_apiKey,
        authDomain:process.env.REACT_APP_authDomain,
        projectId:process.env.REACT_APP_projectId,
        storageBucket:process.env.REACT_APP_storageBucket,
        messagingSenderId:process.env.REACT_APP_messagingSenderId,
        appId:process.env.REACT_APP_appId,
      
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth =getAuth (app);
export default auth;