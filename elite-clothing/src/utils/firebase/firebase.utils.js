import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword
} from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";
//doc from firebase
const firebaseConfig = {
  apiKey: "AIzaSyAHDdWAp9VlVytNhpwzpsXt6wq-IWLqrgI",
  authDomain: "elite-clothing-db-2c3a0.firebaseapp.com",
  projectId: "elite-clothing-db-2c3a0",
  storageBucket: "elite-clothing-db-2c3a0.appspot.com",
  messagingSenderId: "959056130076",
  appId: "1:959056130076:web:a9ee5696c72265ac7bafd9",
};

//
const firebaseApp = initializeApp(firebaseConfig);

const googleProvider = new GoogleAuthProvider();

googleProvider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, googleProvider);
export const signInWithGoogleRedirect = () => signInWithRedirect(auth, googleProvider);


export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {

    if (!userAuth) return;

  const userDocRef = doc(db, "users", userAuth.uid);

  const userSnapShot = await getDoc(userDocRef);

  if (!userSnapShot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
      });
    } catch (error) {
      console.log("error creating the user", error.message);
    }
  }
  return userDocRef;
};

export const createAuthUserWithEmailAndPassword = async (email, password) => {

    if( !email || !password) return;

    return await createUserWithEmailAndPassword(auth, email, password);

};