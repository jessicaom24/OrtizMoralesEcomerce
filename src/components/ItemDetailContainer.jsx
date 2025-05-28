import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import ItemDetail from './ItemDetail';
// ItemDetailContainer.jsx
import { getProductById } from '../utils/firebaseServices';


const ItemDetailContainer = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    getProductById(id).then((data) => setProduct(data));
  }, [id]);

  return (
    <section>
      <ItemDetail product={product} />
    </section>
  );
};

export default ItemDetailContainer;
