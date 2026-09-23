import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
// 
// AIzaSyD0OBAU653BesdB2S_PxKDTckXlmHygGow
const firebaseConfig = {
  apiKey: "AIzaSyAozWpK7ElvBCV3b5masa00hVSL5VuGKoc",
  authDomain: "clone-c0c70.firebaseapp.com",
  projectId: "clone-c0c70",
  storageBucket: "clone-c0c70.firebasestorage.app",
  messagingSenderId: "951283183899",
  appId: "1:951283183899:web:ffcdfb3a96a7f029d2e3be"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const db = app.firestore();