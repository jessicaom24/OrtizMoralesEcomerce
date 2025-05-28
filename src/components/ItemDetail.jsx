import React from 'react';

const ItemDetail = ({ product }) => {
  if (!product) return <p>Cargando...</p>;

  return (
    <div className="item-detail">
      <img src={product.pictureUrl} alt={product.name} style={{ width: '100%', height: 'auto' }} />
      <h2>{product.name}</h2>
      <p>Precio: ${product.price}</p>
      <p>{product.description}</p>
    </div>
  );
};

export default ItemDetail;
