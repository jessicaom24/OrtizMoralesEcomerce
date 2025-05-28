import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ItemList from './ItemList';
import { getProducts } from '../utils/firebaseServices';


const ItemListContainer = () => {
  const [products, setProducts] = useState([]);
  const { categoryId } = useParams(); // Obtiene la categoría desde la URL

  useEffect(() => {
    getProducts().then((data) => {
      if (categoryId) {
        const filtered = data.filter((product) => product.category === categoryId);
        setProducts(filtered);
      } else {
        setProducts(data);
      }
    });
  }, [categoryId]);

  return (
    <section>
      <h2>Catálogo de Ropa Interior</h2>
      {categoryId && <h3>Categoría: {categoryId}</h3>}
      <ItemList products={products} />
    </section>
  );
};

export default ItemListContainer;

