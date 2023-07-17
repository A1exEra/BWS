import 'firebase/firestore';
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
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
const app = initializeApp(firebaseConfig);
export const firestore = getFirestore(app);
export const auth = getAuth(app);
