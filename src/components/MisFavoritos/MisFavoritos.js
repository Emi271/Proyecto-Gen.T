import { useSelector, useDispatch } from "react-redux";
import { addToFavorites, delFromFavorites, ClearFavorites } from '../Actions/FavoritesActions';
import Card from 'react-bootstrap/Card';
import { Button } from 'react-bootstrap';

const MisFavoritos = () => {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  const { favs } = state.favs; 

  return (
    <>
      <div className='cart' > 
        <article className='box' >
          <h3 className='texto'>Mis Favoritos</h3>
          {favs.map((item, index) => {
            return (
              <Card key={index} data={item}
              addToFavorites={() => dispatch(addToFavorites(item.id))}>
                <Card.Body>
                  <Card.Title>{item.name}</Card.Title>
                  <Card.Img className='imgn' variant="top" src={item.image} />
                  <Card.Text>Cantidad :{item.quantity}</Card.Text>
                  <Card.Text>Precio: ${item.price} x {item.quantity} = ${item.price * item.quantity}</Card.Text>
                  <Button onClick={() => dispatch(delFromFavorites(item.id))}>Eliminar de Favoritos</Button>
                </Card.Body>
              </Card> 
            );
          })}
        </article>
        <Button onClick={() => dispatch(ClearFavorites())}>Limpiar Favoritos</Button>
      </div>
    </>
  );
}

            
export default MisFavoritos

 
