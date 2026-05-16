import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDrRL7BkyejSooFNx0pD5hBSMsgkfM8MpM",
  authDomain: "database-f0aee.firebaseapp.com",
  projectId: "database-f0aee",
  storageBucket: "database-f0aee.firebasestorage.app",
  messagingSenderId: "1025759093694",
  appId: "1:1025759093694:web:debbf45afc5f0241e88fef",
  measurementId: "G-SHZT2QC2NK"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
export const analytics = typeof window !== 'undefined' ? getAnalytics(app) : null;

export default app;
