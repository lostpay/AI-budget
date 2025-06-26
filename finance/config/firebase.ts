// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { initializeAuth, getReactNativePersistence } from "firebase/auth";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { getFirestore, collection } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAdMis3YfyAqeXyppBDa3adrzU5fuOlPqQ",
  authDomain: "zhuanti2-1a744.firebaseapp.com",
  projectId: "zhuanti2-1a744",
  storageBucket: "zhuanti2-1a744.firebasestorage.app",
  messagingSenderId: "143502277569",
  appId: "1:143502277569:web:51b2daf7d79c8c7516cd40",
  measurementId: "G-E2ZF5DLQYM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = initializeAuth(app, {
    persistence: getReactNativePersistence(AsyncStorage),
  });
  // export const auth = initializeAuth(app);
export const firestore = getFirestore(app);