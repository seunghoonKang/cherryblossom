// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import 'firebase/auth';
import { getStorage } from 'firebase/storage';

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyAHGx6kjGXxZZl_NiZuGw1P_rwPX9Sz0P4',
  authDomain: 'cherryblossom-f61a7.firebaseapp.com',
  projectId: 'cherryblossom-f61a7',
  storageBucket: 'cherryblossom-f61a7.appspot.com',
  messagingSenderId: '289191663871',
  appId: '1:289191663871:web:bc08dd47d053091d93d4ca',
  measurementId: 'G-2VE7Z123RQ',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore();
const storage = getStorage(app);

export { app, db, storage };
