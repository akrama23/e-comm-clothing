import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAHDdWAp9VlVytNhpwzpsXt6wq-IWLqrgI",
  authDomain: "elite-clothing-db-2c3a0.firebaseapp.com",
  projectId: "elite-clothing-db-2c3a0",
  storageBucket: "elite-clothing-db-2c3a0.appspot.com",
  messagingSenderId: "959056130076",
  appId: "1:959056130076:web:a9ee5696c72265ac7bafd9",
};

const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
    prompt: "select_account"
});

export const auth = getAuth();
export const signInWithGooglepopup = () => signInWithPopup(auth, provider);
