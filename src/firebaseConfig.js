// src/firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Configurações do seu projeto Firebase
const firebaseConfig = {
    apiKey: "AIzaSyCYPxEzO9-uxZ7GPr2wjpjh_MgjWtqOjoo",
    authDomain: "lr-project-cd862.firebaseapp.com",
    projectId: "lr-project-cd862",
    storageBucket: "lr-project-cd862.appspot.com",
    messagingSenderId: "466498883870",
    appId: "1:466498883870:web:2a458b003feb7df397b90f"
  };

// Inicializa o Firebase
const app = initializeApp(firebaseConfig);

// Inicializa o Firestore
const db = getFirestore(app);

export { db };
