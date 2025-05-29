import React from 'react';
import { useCart } from './CartContext';
import { useNavigate } from 'react-router-dom';

const CarWidget = () => {
  const { totalQuantity } = useCart();
  const navigate = useNavigate();

  return (
    <div className="car-widget" onClick={() => navigate('/cart')} style={{ cursor: 'pointer' }}>
      🛒 <span>{totalQuantity}</span>
    </div>
  );
};

export default CarWidget;



