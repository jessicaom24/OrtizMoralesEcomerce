import React from 'react';

const ItemDetail = ({ product, onAdd, onRemove, quantity }) => {
  if (!product) return <p>Cargando...</p>;

  return (
    <div className="item-detail">
      <img src={product.pictureUrl} alt={product.name} style={{ width: '100%', height: 'auto' }} />
      <h2>{product.name}</h2>
      <p>Precio: ${product.price}</p>
      <p>{product.description}</p>

      <button onClick={() => onAdd(product)}>+</button>
      <h1>{quantity}</h1>
      <button onClick={() => onRemove(product.id)}>-</button>
    </div>
  );
};

export default ItemDetail;
