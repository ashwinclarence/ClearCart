import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
import {getFirestore,collection} from 'firebase/firestore'
import {getStorage,ref} from 'firebase/storage'

const firebaseConfig = {
    apiKey:import.meta.env.VITE_REACT_APP_FIREBASE_API_KEY,
    authDomain: import.meta.env.VITE_REACT_APP_FIREBASE_AUTH_DOMAIN,
    projectId: import.meta.env.VITE_REACT_APP_FIREBASE_PROJECT_ID,
    storageBucket: import.meta.env.VITE_REACT_APP_FIREBASE_STORAGE_BUCKET,
    messagingSenderId:import.meta.env.VITE_REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
    appId: import.meta.env.VITE_REACT_APP_FIREBASE_APP_ID,
    measurementId: import.meta.env.VITE_REACT_APP_FIREBASE_MEASUREMENT_ID
  };

 // initialize firebase app
const app=initializeApp(firebaseConfig);

// initialize services
export const db=getFirestore(app)
export const auth=getAuth()
export const storage = getStorage(app);

// collection reference
export const itemRef=collection(db,"item")
export const userRef=collection(db,"User")
export const storageRef=ref(storage)
