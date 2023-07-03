// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import firebase from 'firebase/app';
import 'firebase/firestore';
import {
  getFirestore,
  doc,
  getDoc,
  setDoc,
  getDocs,
  collection,
  deleteDoc,
  updateDoc,
} from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyB9_oqKC_2E62fRLDtV4kL8GMiPlRMPK-o',
  authDomain: 'nextjs-client-side-db43a.firebaseapp.com',
  databaseURL:
    'https://nextjs-client-side-db43a-default-rtdb.europe-west1.firebasedatabase.app',
  projectId: 'nextjs-client-side-db43a',
  storageBucket: 'nextjs-client-side-db43a.appspot.com',
  messagingSenderId: '173114243076',
  appId: '1:173114243076:web:a4df148983aff541445d51',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore();
