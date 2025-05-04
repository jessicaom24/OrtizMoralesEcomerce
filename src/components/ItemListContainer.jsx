import React, { useEffect, useState } from 'react';
import { getProducts } from '../utils/getProducts';
import ItemList from './ItemList';

const ItemListContainer = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts().then((data) => setProducts(data));
  }, []);

  return (
    <section>
      <h2>Catálogo de Ropa Interior</h2>
      <ItemList products={products} />
    </section>
  );
};

export default ItemListContainer;