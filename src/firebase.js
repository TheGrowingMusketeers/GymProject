import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";


const firebaseConfig = {
  apiKey:process.env.REACT_APP_FIREBASE_KEY,
  authDomain: "test-app-9258e.firebaseapp.com",
  projectId: "test-app-9258e",
  storageBucket: "test-app-9258e.appspot.com",
  messagingSenderId: "307926094644",
  appId: "1:307926094644:web:21a23e379ae68bc6640b61",
  measurementId: "G-JKNWT7HPGW"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth();
export const storage = getStorage(app);
