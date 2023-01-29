import React from 'react';
import'../Reducers/FavoritosReducer';
import { useSelector, useDispatch } from "react-redux";
import { addToFavorites, delFromFavorites, ClearFavorites } from '../Actions/FavoritesActions';
import Card from 'react-bootstrap/Card';

 
const MisFavoritos = () => {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  const favs = state.favs? state.favs.favs : []; 
  const products = favs.map(fav => fav.product);

  return (
    <>
      <div className='cart' > 
        <article className='box' >
          <h3 className='texto'>Mis Favoritos</h3>
          {products.map((item, index) => {
            return (
              <Card key={index} data={item}
              addToFavorites={() => dispatch(addToFavorites(item.id))}>
                <Card.Body>
                  <Card.Title>{item.name}</Card.Title>
                  <Card.Img className='imgn' variant="top" src={item.image} />
                  <Card.Text>Cantidad :{item.quantity}</Card.Text>
                  <Card.Text>Precio: ${item.price} x {item.quantity} = ${item.price * item.quantity}</Card.Text>
                  <button onClick={() => dispatch(delFromFavorites(item.id))}>Eliminar de Favoritos</button>
                </Card.Body>
              </Card> 
            );
          })}
        </article>
        <button onClick={() => dispatch(ClearFavorites())}>Limpiar Favoritos</button>
      </div>
    </>
  );
}

            
export default MisFavoritos

 
