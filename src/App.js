import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import { Provider } from 'react-redux';
import Home from './components/Home/Home';
import Navegation from './components/Navegation/Nategation';
import CardProduct from './components/Card/Card';
import CardMaquillaje from './components/CardMaquillaje/CardMaquillaje';
import CardPerfHombre from './components/CardPerfumeHombre/PerfumeHombre';
import CardAccesorios from './components/CardAccesorios/CardAccesorios';
import CardCapilar from './components/CardCapilar/CardCapilar';
import Contact from './components/Contact/Contact';
import Contact2 from './components/Contact2/Contact2';
import 'bootstrap/dist/css/bootstrap.min.css';
import ShoppingCart from './components/ShoppingCart/ShoppingCart';
import store from "./store/index";
/* import store2 from './store/index2';  */
import ProductDetalle from './components/Item/Item';
import Footer from './components/Footer/Footer';
import Terms from './components/Terms/Terms';
import Politicas from './components/politicas/politicas';
import Envio from './components/Envio/Envio';
import LocalesInfo from './components/NuestrosLocales/LocalesInfo';
import Capilar from './components/Card/Capilar/Capilar';
import CardCapilar2 from './components/CardCapilar2/CardCapilar2';
import CardMascaraCapilar from './components/MascarasCapilar/productos';
import Trabajo from './components/OfertaLaboral/Trabajo';
import MisFavoritos from './components/MisFavoritos/MisFavoritos';
import FormasdePago from './components/Métodos de pago/FormasdePago';
/* var mysql = require('mysql');

var conexion = mysql.createConnection({
  host: 'localhost',
  database: 'users',
  user: 'root', 
  password:'',

});

conexion.connect(function(error){
  if(error){
    throw error;
  }else{
    console-log('CONEXION EXITOSA')
  }

});
conexion.end();
  */

function App() {
  return (
    
    <div className="App">
      
      <Provider store={store}>
   {/*     <Provider store2={store2}>  */}
      <Navegation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/productos" element={<CardProduct />} />
        <Route path="/contacto" element={<Contact />} />
        <Route path="/MisFavoritos" element={<MisFavoritos />} />
        <Route path="/item/:id" element={<ProductDetalle />} />
        <Route path="/shoppingCard" element={<ShoppingCart />} />
        <Route path="/IniciarSesion" element={<Contact2 />} />
        <Route path="/TerminosyCondiciones" element={<Terms />} />
        <Route path="/Maquillaje" element={<CardMaquillaje />} />
        <Route path="/FraganciasHombres" element={<CardPerfHombre />} />
        <Route path="/Capilar" element={<CardCapilar />} />
        <Route path="/Accesorios" element={<CardAccesorios />} />
        <Route path="/politicasdevoluciones" element={<Politicas/>} />
        <Route path="/envios" element={<Envio/>} />
        <Route path="/Nuestroslocales" element={<LocalesInfo/>} />
        <Route path="/prueba" element={<Capilar/>} />
        <Route path="/acondicionadores" element={<CardCapilar2/>} />
        <Route path="/mascarasCapilar" element={<CardMascaraCapilar/>} />
        <Route path="/Trabajo" element={<Trabajo/>} />
        <Route path="/FormasDePago" element={<FormasdePago/>} />


      </Routes>
      <br></br>
      <Footer></Footer>
    
     {/*    <ShoppingCart /> */}
      </Provider>
{/*       </Provider>  */}
    </div>

 
  );
}
 
export default App;
