import React from 'react';
import { Link } from 'react-router-dom';

const Item = ({ product }) => {
  console.log(product);


  return (
    <div className="item">
      <img src={product.pictureUrl} alt={product.name} style={{ width: '100%', height: 'auto' }} />
      <h3>{product.name}</h3>
      <p>${product.price}</p>
      <Link to={`/item/${product.id}`}>Ver Detalle</Link>
    </div>
  );
};

export default Item;
