import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";


const firebaseConfig = {
  apiKey: "AIzaSyBYhMlxq6CCs6KIi0pjlLL043_1MiTTHpA",
  authDomain: "appclass-profile.firebaseapp.com",
  projectId: "appclass-profile",
  storageBucket: "appclass-profile.firebasestorage.app",
  messagingSenderId: "668121759587",
  appId: "1:668121759587:web:a18d00a12d821c0523dd56"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage(app);