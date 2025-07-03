import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBzQmAjXs4JCzm4cvypcsSQveLkP_7JH2o",
  authDomain: "food-delivery-website-8e806.firebaseapp.com",
  projectId: "food-delivery-website-8e806",
  storageBucket: "food-delivery-website-8e806.firebasestorage.app",
  messagingSenderId: "928401568398",
  appId: "1:928401568398:web:55e14e060e3b1e6461cfdf"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth()
