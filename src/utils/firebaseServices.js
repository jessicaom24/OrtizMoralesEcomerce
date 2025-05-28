// src/utils/firebaseServices.js
import { collection, getDocs, doc, getDoc } from 'firebase/firestore';
import { db } from './configFirebase';

// Obtener todos los productos
export const getProducts = async () => {
    const productosRef = collection(db, "products");
    const snapshot = await getDocs(productosRef);
    return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
};

// Obtener producto por ID
export const getProductById = async (id) => {
    const docRef = doc(db, "products", id);
    const snapshot = await getDoc(docRef);
    if (snapshot.exists()) {
        return { id: snapshot.id, ...snapshot.data() };
    } else {
        throw new Error("Producto no encontrado");
    }
};

