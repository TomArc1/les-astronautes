import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';


const firebaseConfig = {
  apiKey: "AIzaSyDpk7rKbAm9zKOC25EN3e_eekUAn6s7Tvc",
  authDomain: "les-astronautes.firebaseapp.com",
  projectId: "les-astronautes",
  storageBucket: "les-astronautes.appspot.com",
  messagingSenderId: "421933675466",
  appId: "1:421933675466:web:36b39f31e98e1a57d9d533"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore (app);
