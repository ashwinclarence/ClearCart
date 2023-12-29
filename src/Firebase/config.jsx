import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
import {getFirestore,collection} from 'firebase/firestore'
import {getStorage,ref} from 'firebase/storage'

const firebaseConfig = {
    apiKey:process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
    storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
    messagingSenderId:process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_FIREBASE_APP_ID,
    measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID
  };

 // initialize firebase app
const app=initializeApp(firebaseConfig);

// initialize services
export const db=getFirestore()
export const auth=getAuth()
export const storage = getStorage(app);

// collection reference
export const itemRef=collection(db,"item")
export const userRef=collection(db,"User")
export const storageRef=ref(storage)
