import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import {
  getFirestore,
  doc,
  getDoc,
  setDoc,
  collection,
  writeBatch,
  query,
  getDocs,
} from "firebase/firestore";

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
const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
console.log("auth", auth);
export const signInWithGooglePopup = () =>
  signInWithPopup(auth, googleProvider);

export const signInWithGoogleRedirect = () =>
  signInWithRedirect(auth, googleProvider);

export const db = getFirestore();

// VAR OLAN BİR JSON DOSYASINI FIREBASE'E ATMA
export const addCollectionDocuments = async (collectionkey, objectsToAdd) => {
  const collectionRef = collection(db, collectionkey);
  const batch = writeBatch(db);

  objectsToAdd.map((object) => {
    const docRef = doc(collectionRef, object.title.toLowerCase());
    batch.set(docRef, object);
  });

  await batch.commit();
  console.log("done");
};

// FIRESTORE'DAN VERİ ÇEKME
export const getCategoriesAndDocuments = async () => {
  const collectionRef = collection(db, "categories");
  const q = query(collectionRef);

  const querySnapShot = await getDocs(q);
  const categoryMap = querySnapShot.docs.reduce((acc, docSnapShot) => {
    const { title, items } = docSnapShot.data();
    acc[title.toLowerCase()] = items;
    return acc;
  }, {});
  return categoryMap;
};

export const getUserData = async (uid) => {
  const docRef = doc(db, "users", uid);
  const docSnap = await getDoc(docRef);
  const data = docSnap.data();
  console.log("UTİLS USER DATA",data);
  return data;
};

export const createUserDocumentFromAuth = async (
  userAuth,
  additionalInformation = {}
) => {
  console.log("FIRSTADD",additionalInformation);
  // there are 3 things inside doc: database, collection, identifier
  const userDocRef = doc(db, "users", userAuth.uid);
  // console.log("userDocRef", userDocRef);

  const userSnapShot = await getDoc(userDocRef);
  // console.log("isExist", userSnapShot.exists());

  if (!userSnapShot.exists()) {
    const { displayName, email } = userAuth;
    console.log(displayName);
    const createdAt = new Date(); /* this'll show as when was data set */
    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        ...additionalInformation,
      });
      console.log("ADDITIONALINFO", additionalInformation);
    } catch (err) {
      console.log(err);
    }
    console.log("user", userAuth);
  }
  console.log("userDocref2", userDocRef);
  // if snapShot exist
  return userDocRef;
};

export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;

  return await createUserWithEmailAndPassword(auth, email, password);
};

export const signInAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;

  return await signInWithEmailAndPassword(auth, email, password);
};

export const signOutUser = async () => await signOut(auth);

// this function provides us to watch user signed in or not
export const onAuthStateChangedListener = (callback) =>
  onAuthStateChanged(auth, callback);
