import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDdWl4U8wh01hAVfh2kKYRYPZPmlfvxZZ8",
  authDomain: "netflix-clone-783ba.firebaseapp.com",
  projectId: "netflix-clone-783ba",
  storageBucket: "netflix-clone-783ba.appspot.com",
  messagingSenderId: "982861489395",
  appId: "1:982861489395:web:fc0849044761fd1109c386",
  measurementId: "G-TMSZBFK82M"
};

const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);
