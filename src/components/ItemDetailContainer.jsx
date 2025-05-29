import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from './ItemDetail';
import { getProductById } from '../utils/firebaseServices';
import { useCart } from './CartContext'; // Ajusta según ruta real

const ItemDetailContainer = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const { addToCart, removeFromCart, cart } = useCart();

  useEffect(() => {
    getProductById(id).then((data) => setProduct(data));
  }, [id]);

  const quantityInCart = cart.find(item => item.product.id === product?.id)?.quantity || 0;

  return (
    <section>
      <ItemDetail
        product={product}
        onAdd={addToCart}
        onRemove={removeFromCart}
        quantity={quantityInCart}
      />
    </section>
  );
};

export default ItemDetailContainer;
