import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
const firebaseConfig = {
  apiKey: "AIzaSyA1WR8SsXKaGRjh3PnNdDEfOhw7V_O9zjQ",
  authDomain: "cleaner-co-8a869.firebaseapp.com",
  projectId: "cleaner-co-8a869",
  storageBucket: "cleaner-co-8a869.appspot.com",
  messagingSenderId: "679891519397",
  appId: "1:679891519397:web:70a01078e3c96aebde8a4c",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)

