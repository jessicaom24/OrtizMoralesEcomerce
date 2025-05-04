import React from 'react';

const ItemDetail = ({ product }) => {
  if (!product) return <p>Cargando...</p>;

  return (
    <div className="item-detail">
      <h2>{product.name}</h2>
      <p>Precio: ${product.price}</p>
      <p>{product.description}</p>
    </div>
  );
};

export default ItemDetail;
