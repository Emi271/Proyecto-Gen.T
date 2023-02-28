import React, { useState, useEffect } from 'react';
import './Item.css'
import { useDispatch, useSelector } from 'react-redux';
import { addToFavorites } from '../Actions/FavoritesActions';
import { useParams } from 'react-router-dom';
import { addToCart } from '../Actions/ShoppingAcctions';
import { data } from '../assets/db/data';
import Card from 'react-bootstrap/Card';
import { Alert } from 'react-bootstrap';
import CardHeader from 'react-bootstrap/CardHeader';
import { Button } from 'react-bootstrap';

const ProductDetalle = () => {
  const params = useParams();
  const id = params?.id;
  const [product, setProduct] = useState(null);
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  const { favs } = state.favs;

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
    <div className='container'>
      <Alert>
        <Alert.Heading variant='success' >Envíos Gratis en compras a partir de $4.000</Alert.Heading>
      </Alert>
      <article key={product.id}>
        <img className="card-item" alt="imagencard" src={product.image}></img>
        <div className='card-titulo'>
          <h4 className='card-nombre'>{product.name}</h4>
          <h5 className='card-marca'>{product.marca}</h5>
        </div>
        <div className='precio'>
          <h5 className='card-precio'>Precio: {product.price}</h5>
        </div>
      </article>
      <br></br>
      <div className='card-texto'>
        <p>{product.description}</p>
      </div>
      <div className='botun'>
        <Button onClick={() => dispatch(addToCart(product.id))} variant="primary">Comprar</Button>
        <br></br><br></br>
      <Button  onClick={() => dispatch(addToFavorites(product.id))} variant="primary">Agregar a favoritos</Button>
      </div>

    </div>
  );
};

export default ProductDetalle;
