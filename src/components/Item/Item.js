import  { useState, useEffect } from 'react';
import './Item.css'
import { useDispatch, useSelector } from 'react-redux';
import { addToFavorites } from '../Actions/FavoritesActions';
import { useParams } from 'react-router-dom';
import { addToCart } from '../Actions/ShoppingAcctions';
import { data } from '../assets/db/data';
import { Alert } from 'react-bootstrap';
import { Button } from 'react-bootstrap';

const ProductDetalle = () => {
  const params = useParams();
  const id = params?.id;
  const [product, setProduct] = useState(null);
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  const { } = state.favs;

  useEffect(() => {
    if (!id) return;
    const products = [...data];
    const selectedProduct = products.find(product => product.id === id);
    setProduct(selectedProduct);
  }, [id]);


  if (!product) {
    return <div>Loading...</div>;
  }
 
  return (
    <div className='container main-product-section'>
    {/* El Alert puede quedar arriba solo */}
    <Alert variant='success' className="text-center mb-4">
        <Alert.Heading style={{fontSize: '1rem', margin: 0}}>
            Envíos Gratis en compras a partir de $4.000
        </Alert.Heading>
    </Alert>

    <article className="product-layout" key={product.id}>
        
        {/* COLUMNA IZQUIERDA: IMAGEN */}
        <div className="product-image-container">
            <img className="product-img" alt={product.name} src={product.image} />
        </div>

        {/* COLUMNA DERECHA: INFO */}
        <div className="product-info-container">
            <div className='header-info'>
                <h2 className='card-nombre'>{product.name}</h2>
                <h3 className='card-marca'>{product.marca}</h3>
            </div>

            <div className='price-tag'>
                <span>Precio: ${product.price}</span>
            </div>

            <div className='description-box'>
                <p>{product.description}</p>
            </div>

            <div className='action-buttons'>
                <Button 
                    onClick={() => dispatch(addToCart(product.id))} 
                    className="btn-comprar" 
                    variant="primary">
                    Comprar
                </Button>
                <Button 
                    onClick={() => dispatch(addToFavorites(product.id))} 
                    className="btn-fav" 
                    variant="outline-primary"> {/* Sugiero outline para diferenciar */}
                    Agregar a favoritos
                </Button>
            </div>
        </div>

    </article>
</div>
  );
};

export default ProductDetalle;
