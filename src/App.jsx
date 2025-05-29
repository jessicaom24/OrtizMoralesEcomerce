import './index.css';
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import { db } from './utils/configFirebase';
import { useCart, CartProvider } from './components/CartContext';
import CartView from './components/CartView';


const App = () => {
  
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<ItemListContainer />} />
        <Route path="/item/:id" element={<ItemDetailContainer />} />
        <Route path="/category/:categoryId" element={<ItemListContainer />} />
        {/*<Route path="/tipos" element={<h2>Tipos</h2>} />
        <Route path="/modelos" element={<h2>Modelos</h2>} />*/}
        <Route path="/category/:Panty" element={<h2>Panty</h2>} />
        <Route path="/category/:Brasier" element={<h2>Brasier</h2>} />
        <Route path="/category/:Conjunto" element={<h2>Conjunto</h2>} />
        <Route path="/cart" element={<CartView />} />
      </Routes>
    </>
  );
};

export default App;