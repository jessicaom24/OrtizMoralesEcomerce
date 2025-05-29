import React, { useState } from 'react';
import { useCart } from './CartContext';
import { db } from '../utils/configFirebase';
import { collection, addDoc, Timestamp } from 'firebase/firestore';

const CartView = () => {
  const { cart, totalPrice, clearCart, deleteProduct } = useCart();
  const [form, setForm] = useState({ name: '', email: '', phone: '' });
  const [orderId, setOrderId] = useState(null);

  const handleInput = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleOrder = async () => {
    if (!form.name || !form.email || !form.phone) return alert('Completa todos los campos');

    const order = {
      buyer: { ...form },
      items: cart.map(({ product, quantity }) => ({
        id: product.id,
        title: product.name,
        price: product.price,
        quantity
      })),
      total: totalPrice,
      date: Timestamp.fromDate(new Date())
    };

    try {
      const docRef = await addDoc(collection(db, 'orders'), order);
      setOrderId(docRef.id);
      clearCart();
    } catch (error) {
      console.error("Error al generar orden", error);
    }
  };

  if (orderId) {
    return <h2>¡Gracias por tu compra! Tu número de orden es: {orderId}</h2>;
  }

  return (
    <div>
      <h2>Resumen del Carrito</h2>
      {cart.length === 0 ? (
        <p>No hay productos en el carrito.</p>
      ) : (
        <>
          <ul>
            {cart.map(({ product, quantity }) => (
              <li key={product.id}>
                {product.name} - ${product.price} x {quantity}
                <button onClick={() => deleteProduct(product.id)}>Eliminar</button>
              </li>
            ))}
          </ul>
          <h3>Total: ${totalPrice}</h3>

          <button onClick={clearCart}>Vaciar carrito</button>

          <h3>Finalizar compra</h3>
          <form>
            <input
              type="text"
              name="name"
              placeholder="Nombre"
              value={form.name}
              onChange={handleInput}
            />
            <input
              type="email"
              name="email"
              placeholder="Correo electrónico"
              value={form.email}
              onChange={handleInput}
            />
            <input
              type="tel"
              name="phone"
              placeholder="Teléfono"
              value={form.phone}
              onChange={handleInput}
            />
          </form>
          <button onClick={handleOrder}>Confirmar Compra</button>
        </>
      )}
    </div>
  );
};

export default CartView;




