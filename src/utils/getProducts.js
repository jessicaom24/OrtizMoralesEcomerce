{/*}
const products = [
    { id: '1', name: 'Conjunto Encaje', pictureUrl: 'https://www.ilusion.com/dw/image/v2/BHGD_PRD/on/demandware.static/-/Sites-catalog-ilusion/default/dw9bbf5cdc/images/hi-res/5143419.jpg', price: 45.99,category: 'Conjunto', description: 'Conjunto de encaje rojo.', stock: 10 },
    { id: '2', name: 'Bóxer Algodón', pictureUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlL6fbrjwGY0NEtWevhOer3h1KisM8wYQ4qA&s', price: 19.99,category: 'Boxer', description: 'Bóxer de algodón suave.', stock: 20 },
    { id: '3', name: 'Brasier Deportivo', pictureUrl: 'https://www.victoriassecret.com/p/874x1165/png/zz/24/09/06/03/112374312HX4_OM_F.jpg', price: 25.50,category: 'Brasier', description: 'Ideal para entrenar.', stock: 15 },
    { id: '4', name: 'Panty Invisible', pictureUrl: 'https://leonisa.mx/cdn/shop/files/012949-802-1200x1500-2024-03_480x.jpg?v=1735218447', price: 9.99, category: 'Panty',description: 'Panty sin costuras, cómodo y discreto.', stock: 30 },
    { id: '5', name: 'Conjunto Satén', pictureUrl: 'https://img.kwcdn.com/product/fancy/fa601eb4-c95e-4851-bfea-d52e4aa77a60.jpg?imageMogr2/auto-orient%7CimageView2/2/w/800/q/70/format/webp', price: 49.99,category: 'Conjunto', description: 'Conjunto elegante de satén azul.', stock: 12 },
    { id: '6', name: 'Bóxer Microfibra', pictureUrl: 'https://i5-mx.walmartimages.com/samsmx/images/product-images/img_large/981013221-1l.jpg?odnHeight=612&odnWidth=612&odnBg=FFFFFF', price: 22.90, category: 'Boxer',description: 'Bóxer ultra ligero y fresco.', stock: 18 },
    { id: '7', name: 'Brasier Push-Up', pictureUrl: 'https://resources.claroshop.com/medios-plazavip-sears/fotos/productos_sears1/original/3503395.jpg', price: 27.99,category: 'Brasier', description: 'Con realce para mayor volumen.', stock: 16 },
    { id: '8', name: 'Panty Encaje', pictureUrl: 'https://img.ltwebstatic.com/images3_pi/2020/12/16/1608089886c16b5d333cfa9793ff05c85737577d60_thumbnail_720x.jpg', price: 12.50, category: 'Panty',description: 'Panty de encaje floral.', stock: 25 },
    { id: '9', name: 'Conjunto Deportivo', pictureUrl: 'https://img.kwcdn.com/product/fancy/9277a418-0d2a-4f97-916b-2a739b19e561.jpg?imageView2/2/w/500/q/60/format/webp', price: 39.99,category: 'Conjunto', description: 'Conjunto cómodo para actividades físicas.', stock: 14 },
    { id: '10', name: 'Bóxer Clásico', pictureUrl: 'https://ss504.liverpool.com.mx/sm/1115068659.jpg', price: 17.99, category: 'Boxer',description: 'Diseño tradicional en algodón.', stock: 22 },
    { id: '11', name: 'Brasier Strapless', pictureUrl: 'https://lenceriaascen.com/img/cms/FOTOS%20BLOG/Sujetador%20Sin%20Tirantes%20I%20Do%20PrimaDonna%20Twist.jpg', price: 26.00,category: 'Brasier', description: 'Ideal para ropa sin tirantes.', stock: 13 },
    { id: '12', name: 'Panty Algodón', pictureUrl: 'https://resources.claroshop.com/medios-plazavip/publicidad/63892218c6c1c_0152214png.jpg', price: 8.99,category: 'Panty', description: 'Panty básico 100% algodón.', stock: 40 },
    { id: '13', name: 'Conjunto Transparente', pictureUrl: 'https://m.media-amazon.com/images/I/61y78Tk2QdL._AC_UY1000_.jpg', price: 52.00,category: 'Conjunto', description: 'Diseño atrevido y sexy.', stock: 9 },
    { id: '14', name: 'Bóxer Deportivo', pictureUrl: 'https://s3-us-west-1.amazonaws.com/calzzapato/zoom/09HPE7-2.jpg', price: 20.50,category: 'Boxer', description: 'Especial para entrenamiento.', stock: 19 },
    { id: '15', name: 'Brasier Balconet', pictureUrl: 'https://leonisa.mx/cdn/shop/files/011877_700_1200x1500_2025_01_480x.jpg?v=1741894521', price: 28.90,category: 'Brasier', description: 'Realza el busto con estilo.', stock: 12 },
    { id: '16', name: 'Panty Tanga', pictureUrl: 'https://www.ilusion.com/dw/image/v2/BHGD_PRD/on/demandware.static/-/Sites-catalog-ilusion/default/dw9cb587b2/images/hi-res/5427052.jpg', price: 10.50,category: 'Panty', description: 'Corte sensual y moderno.', stock: 28 },
    { id: '17', name: 'Conjunto Estampado', pictureUrl: 'https://colegiata.es/media/products/bd6fd20524553da5f0504d31e4134500/z14270-promise-conjunto-mujer-sujetador-push-up-estampado-01.jpg', price: 44.99,category: 'Conjunto', description: 'Diseño colorido y juvenil.', stock: 11 },
    { id: '18', name: 'Bóxer Sin Costuras', pictureUrl: 'https://s.alicdn.com/@sc04/kf/Hb0cbb7e3f64e40a4ae44cde738462e0bb.jpg', price: 23.99,category: 'Boxer', description: 'Comodidad sin marcas.', stock: 17 },
    { id: '19', name: 'Brasier Encaje', pictureUrl: 'https://sydney.pe/wp-content/uploads/2023/09/576-1.jpg', price: 29.50,category: 'Brasier', description: 'Estilo romántico con encaje.', stock: 15 },
    { id: '20', name: 'Panty Alta Cintura', pictureUrl: 'https://www.ilusion.com/on/demandware.static/-/Sites-catalog-ilusion/default/dw64ba134d/images/hi-res/4274714.jpg', price: 13.99,category: 'Panty', description: 'Moldea y estiliza la figura.', stock: 21 }
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
  */}