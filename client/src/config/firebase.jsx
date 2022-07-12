import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// const firebaseConfig = {
//   apiKey: process.env.REACT_APP_ApiKey,
//   authDomain: process.env.REACT_APP_AuthDomain,
//   projectId: process.env.REACT_APP_ProjectId,
//   storageBucket: process.env.REACT_APP_StorageBucket,
//   messagingSenderId: process.env.REACT_APP_MessagingSenderId,
//   appId: process.env.REACT_APP_AppId,
//   measurementId: process.env.REACT_APP_MeasurementId,
// };

const firebaseConfig = {
  apiKey: "AIzaSyAJ29VfX4rVhnn9jPEy1yvgYuTEVVfOyqw",
  authDomain: "doan-ff0c5.firebaseapp.com",
  projectId: "doan-ff0c5",
  storageBucket: "doan-ff0c5.appspot.com",
  messagingSenderId: "339014368168",
  appId: "1:339014368168:web:1d2b218098465cbb5dbb9d",
  measurementId: "G-RSWJ3MEDNF",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth };
