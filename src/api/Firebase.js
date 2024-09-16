import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {

  apiKey: "AIzaSyDfrrZm6Nh5CUFJtGv66BYmdvewGv69GJs",

  authDomain: "frogeapp.firebaseapp.com",

  databaseURL: "https://frogeapp-default-rtdb.europe-west1.firebasedatabase.app",

  projectId: "frogeapp",

  storageBucket: "frogeapp.appspot.com",

  messagingSenderId: "49615055382",

  appId: "1:49615055382:web:0ea3d4663bf58e0c44a337",

  measurementId: "G-KBPPVQQ57L"

};

const app = initializeApp(firebaseConfig);
const db = getFirestore();

export default db;