import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
import {getFirestore} from "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyB9_KJ6wEU5eQoraTl6lSzfulmY1lOvKLU",
    authDomain: "itumsms20it-47e60.firebaseapp.com",
    projectId: "itumsms20it-47e60",
    storageBucket: "itumsms20it-47e60.appspot.com",
    messagingSenderId: "762974680694",
    appId: "1:762974680694:web:a34c73d1d1cb6cab1c9157"
  };
  
const app = initializeApp(firebaseConfig); 
export const db = getFirestore(app)
export const auth = getAuth(app);   