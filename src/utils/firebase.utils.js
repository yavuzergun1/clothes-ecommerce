import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC7jFUtKi1bj7n621yr9uqxD8l4C20NDaI",
  authDomain: "clothes-ecommerce-15c65.firebaseapp.com",
  projectId: "clothes-ecommerce-15c65",
  storageBucket: "clothes-ecommerce-15c65.appspot.com",
  messagingSenderId: "785231638718",
  appId: "1:785231638718:web:ea6c29969c3b0f2731aeef",
  measurementId: "G-0ED3J61K2S",
};

const firebaseApp = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
export const db = getFirestore();
export const createUserDocumentFromAuth = async (userAuth) => {

}