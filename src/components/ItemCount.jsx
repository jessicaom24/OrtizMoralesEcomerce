import React, { useState } from 'react';
import Button from './Button';

const ItemCount = ({ stock, initial = 1, onAdd }) => {
  const [count, setCount] = useState(initial);

  const increment = () => {
    if (count < stock) setCount(count + 1);
  };

  const decrement = () => {
    if (count > 1) setCount(count - 1);
  };

  return (
    <div className="item-count">
      <Button onClick={decrement} text="-" />
      <span>{count}</span>
      <Button onClick={increment} text="+" />
      <Button onClick={() => onAdd(count)} text="Agregar al carrito" />
    </div>
  );
};

export default ItemCount;