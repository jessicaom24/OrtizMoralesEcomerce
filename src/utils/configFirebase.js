// src/utils/configFirebase.js
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

// Tu configuración
const firebaseConfig = {
    apiKey: "AIzaSyCBxb8qiJ96qKGZ3Osw5WNKRko0MPM2iW4",
    authDomain: "ecomerce-84943.firebaseapp.com",
    projectId: "ecomerce-84943",
    storageBucket: "ecomerce-84943.appspot.com",
    messagingSenderId: "405339151272",
    appId: "1:405339151272:web:1a9af4e25af0211d265b9d"
};

// Inicializa Firebase solo una vez
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };

