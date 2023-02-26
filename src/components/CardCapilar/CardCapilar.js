import React, { useState, useEffect } from 'react';
import { addToCart } from '../Actions/ShoppingAcctions';
import { useDispatch, useSelector } from 'react-redux';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import CardHeader from 'react-bootstrap/esm/CardHeader';
import { data } from '../assets/db/data';

function CardCapilar() {
  const [products, setProducts, categoria] = useState([]);
  const [productosFiltrados, setProductosFiltrados] = useState([]);
  const [filtroPrecio, setFiltroPrecio] = useState([0, Infinity]);
  const [filtroMarca, setFiltroMarca] = useState('');
  const [busqueda, setBusqueda] = useState('');

  useEffect(() => {
    setProducts(data.filter((x) => x.categoria === 'shampoo'));
  }, []);

  useEffect(() => {
/*     const productosFiltradosSinBusqueda = filtrarProductos(products, filtroPrecio, filtroMarca); */
    const productosFiltrados = filtrarProductos(products, filtroPrecio, filtroMarca, busqueda);
    setProductosFiltrados(productosFiltrados);
  }, [products, filtroPrecio, filtroMarca]);

  const shampoo = data.filter(x => x.categoria ==='shampoo')
  console.log(shampoo);
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  const { cart } = state.shopping;

 
  function filtrarProductos(productos, rangoPrecio, marca, busqueda) {
    const [precioMinimo, precioMaximo] = rangoPrecio;
    const filtroPrecio = productos.filter((producto) => {
      const precio = parseFloat(producto.price);
      return precio >= precioMinimo && precio <= precioMaximo;
    });

    const filtroMarca = filtroPrecio.filter((producto) => {
      return marca === '' || producto.marca === marca;
    });

    /* const filtroBusqueda = filtroMarca.filter((producto) => {
      return (
        producto.name.toLowerCase().includes(busqueda.toLowerCase()) ||
        producto.marca.toLowerCase().includes(busqueda.toLowerCase())
      );
    });
 */
    return filtroMarca;
  }
  function handleFiltrarClick(e) {
    e.preventDefault();
    const productosFiltrados = filtrarProductos(products, filtroPrecio, filtroMarca, busqueda);
    setProductosFiltrados(productosFiltrados);
  }
  
  function handleLimpiarClick() {
    setProductosFiltrados(products);
    setFiltroPrecio([0, Infinity]);
    setFiltroMarca('');
    setBusqueda('');
  }

  return (
    <>
      <h3>Shampoos, Acondicionadores y demás</h3>
      <br />
      <div>Filtros de búsqueda</div>
      <br />
      <form onSubmit={handleFiltrarClick}>
        <div>
          <label htmlFor="precio-minimo">Precio mínimo:</label>
          <input
            type="number"
            id="precio-minimo"
            value={filtroPrecio[0]}
            onChange={(e) => setFiltroPrecio([Number(e.target.value), filtroPrecio[1]])}
          />
        </div>
        <div>
          <label htmlFor="precio-maximo">Precio máximo:</label>
          <input
            type="number"
            id="precio-maximo"
            value={filtroPrecio[1]}
            onChange={(e) => setFiltroPrecio([filtroPrecio[0], Number(e.target
.value)])
            }
          />
        </div>
        <div>
          <label htmlFor="marca">Marca:</label>
          <input
            type="text"
            id="marca"
            value={filtroMarca}
            onChange={(e) => setFiltroMarca(e.target.value)}
          />
        </div>
        <button onClick={handleFiltrarClick}  type="submit" >Filtrar</button>
        <button onClick={handleLimpiarClick}>Limpiar filtros</button>
      </form>
            <div className='grid'>
           
              {products.filter(x => x.categoria ==='shampoo').map((p) => {
                return (<Card 
                  style={{ width: '18rem' }}>
                    <article key={p.id} >
                    <Link to={`/item/${p.id}`}>
                    <Card.Img className='imgn' variant="top" src={p.image} />
                    </Link>
                    <Card.Body>
                      <Card.Title className='text-truncate'>{p.name}</Card.Title>
                      <CardHeader>{p.marca}</CardHeader>
                      <Card.Text>
                        {p.price}
                      </Card.Text>
                      <Button onClick={() =>  dispatch(addToCart(p.id))} variant="primary"><p>Comprar</p></Button>
                    </Card.Body>
                    </article>
                  </Card>
                  ) 
              })
              }
            </div>
         
          </>
        )}

export default CardCapilar