// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
import { getFirestore } from "firebase/firestore";
import {getStorage} from 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyBR-9PImnYLMpUwQyAdey83Cg3aMf-aMr0",
    authDomain: "ktmbees-8a096.firebaseapp.com",
    projectId: "ktmbees-8a096",
    storageBucket: "ktmbees-8a096.appspot.com",
    messagingSenderId: "202979915764",
    appId: "1:202979915764:web:1aa594a4f54998368feba1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth= getAuth(app);
export const db = getFirestore(app);
export const storage=getStorage(app);
