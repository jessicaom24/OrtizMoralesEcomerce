import React from 'react';

const Input = ({ label, value, onChange, type = 'text', placeholder }) => {
  return (
    <div className="input-group">
      <label>{label}</label>
      <input
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
    </div>
  );
};

export default Input;
