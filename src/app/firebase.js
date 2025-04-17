// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from 'firebase/auth';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyChiWkfRukDr87yyaQmTQJbadXtCKG_Hic",
    authDomain: "webnexus-fd20c.firebaseapp.com",
    projectId: "webnexus-fd20c",
    storageBucket: "webnexus-fd20c.firebasestorage.app",
    messagingSenderId: "940440554172",
    appId: "1:940440554172:web:ac43672402c6aaa7951eb9",
    measurementId: "G-W9Y5YQXYLE"
  };


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

// Initialize Storage
const storage = getStorage(app);

export { db, auth, storage };




