
const products = [
    { id: '1', name: 'Conjunto Encaje', price: 45.99, description: 'Conjunto de encaje rojo.', stock: 10 },
    { id: '2', name: 'Bóxer Algodón', price: 19.99, description: 'Bóxer de algodón suave.', stock: 20 },
    { id: '3', name: 'Brasier Deportivo', price: 25.50, description: 'Ideal para entrenar.', stock: 15 },
    { id: '4', name: 'Panty Invisible', price: 9.99, description: 'Panty sin costuras, cómodo y discreto.', stock: 30 },
    { id: '5', name: 'Conjunto Satén', price: 49.99, description: 'Conjunto elegante de satén azul.', stock: 12 },
    { id: '6', name: 'Bóxer Microfibra', price: 22.90, description: 'Bóxer ultra ligero y fresco.', stock: 18 },
    { id: '7', name: 'Brasier Push-Up', price: 27.99, description: 'Con realce para mayor volumen.', stock: 16 },
    { id: '8', name: 'Panty Encaje', price: 12.50, description: 'Panty de encaje floral.', stock: 25 },
    { id: '9', name: 'Conjunto Deportivo', price: 39.99, description: 'Conjunto cómodo para actividades físicas.', stock: 14 },
    { id: '10', name: 'Bóxer Clásico', price: 17.99, description: 'Diseño tradicional en algodón.', stock: 22 },
    { id: '11', name: 'Brasier Strapless', price: 26.00, description: 'Ideal para ropa sin tirantes.', stock: 13 },
    { id: '12', name: 'Panty Algodón', price: 8.99, description: 'Panty básico 100% algodón.', stock: 40 },
    { id: '13', name: 'Conjunto Transparente', price: 52.00, description: 'Diseño atrevido y sexy.', stock: 9 },
    { id: '14', name: 'Bóxer Deportivo', price: 20.50, description: 'Especial para entrenamiento.', stock: 19 },
    { id: '15', name: 'Brasier Balconet', price: 28.90, description: 'Realza el busto con estilo.', stock: 12 },
    { id: '16', name: 'Panty Tanga', price: 10.50, description: 'Corte sensual y moderno.', stock: 28 },
    { id: '17', name: 'Conjunto Estampado', price: 44.99, description: 'Diseño colorido y juvenil.', stock: 11 },
    { id: '18', name: 'Bóxer Sin Costuras', price: 23.99, description: 'Comodidad sin marcas.', stock: 17 },
    { id: '19', name: 'Brasier Encaje', price: 29.50, description: 'Estilo romántico con encaje.', stock: 15 },
    { id: '20', name: 'Panty Alta Cintura', price: 13.99, description: 'Moldea y estiliza la figura.', stock: 21 }
  ];
  
  export const getProducts = () => {
    return new Promise((resolve) => {
      setTimeout(() => resolve(products), 1000);
    });
  };
  
  export const getProductById = (id) => {
    return new Promise((resolve) => {
      setTimeout(() => resolve(products.find((p) => p.id === id)), 1000);
    });
  };
  