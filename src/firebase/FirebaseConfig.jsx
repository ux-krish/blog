import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyA9t3f_pVlWvJhb7CJFlEb7HBZXrDU6o4w",
    authDomain: "myblog-1a476.firebaseapp.com",
    projectId: "myblog-1a476",
    storageBucket: "myblog-1a476.appspot.com",
    messagingSenderId: "338807493386",
    appId: "1:338807493386:web:55781a0a0f04054ea8e0f3"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const fireDB = getFirestore(app);
const auth = getAuth(app)
const storage = getStorage(app);
export { fireDB, auth, storage };