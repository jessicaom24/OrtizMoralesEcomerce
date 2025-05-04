import React from 'react';

const Button = ({ onClick, text, className = '' }) => {
  return (
    <button onClick={onClick} className={`btn ${className}`}>
      {text}
    </button>
  );
};

export default Button;
