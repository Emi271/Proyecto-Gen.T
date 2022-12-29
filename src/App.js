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
import Item from './components/Item/Item';
import Footer from './components/Footer/Footer';
import Terms from './components/Terms/Terms';
import Politicas from './components/politicas/politicas';
import Envio from './components/Envio/Envio';

function App() {
  return (
    
    <div className="App">
      
      <Provider store={store}>
      <Navegation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/productos" element={<CardProduct />} />
        <Route path="/contacto" element={<Contact />} />
        <Route path="/item/:id" element={<Item />} />
        <Route path="/shoppingCard" element={<ShoppingCart />} />
        <Route path="/IniciarSesion" element={<Contact2 />} />
        <Route path="/TerminosyCondiciones" element={<Terms />} />
        <Route path="/Maquillaje" element={<CardMaquillaje />} />
        <Route path="/FraganciasHombres" element={<CardPerfHombre />} />
        <Route path="/Capilar" element={<CardCapilar />} />
        <Route path="/Accesorios" element={<CardAccesorios />} />
        <Route path="/politicasdevoluciones" element={<Politicas/>} />
        <Route path="/envios" element={<Envio/>} />
      </Routes>
      <br></br>
      <Footer></Footer>
    
     {/*    <ShoppingCart /> */}
      </Provider>
    </div>

 
  );
}
 
export default App;
