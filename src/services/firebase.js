import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCaoeBsopm0_AAxOQuHcYS2a34roV7H4-o",
  authDomain: "react-firebase-a7c9f.firebaseapp.com",
  projectId: "react-firebase-a7c9f",
  storageBucket: "react-firebase-a7c9f.appspot.com",
  messagingSenderId: "588255183514",
  appId: "1:588255183514:web:ff15bac22f698aeb715523",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
