
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { getStorage } from 'firebase/storage';
import { getFirestore } from 'firebase/firestore/lite';

const firebaseConfig = {
  apiKey: "AIzaSyBDbz0O2peykO7Zn4oyP-UhKpAo5C6ud9Q",
  authDomain: "portfolio-binsmyth.firebaseapp.com",
  projectId: "portfolio-binsmyth",
  storageBucket: "portfolio-binsmyth.appspot.com",
  messagingSenderId: "83256690922",
  appId: "1:83256690922:web:f7619cb66f36ba9767af93",
  measurementId: "G-NDT5GSJX8Z"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth();
const provider = new GoogleAuthProvider();
export const db = getFirestore(app);
export const storage = getStorage(app);


export const signInWithGoogle = () => signInWithPopup(auth, provider);