import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from "react-router-dom";
import { Provider } from 'react-redux';
import store from "./store/index";
import Home from './components/Home/Home';
import Navegation from './components/Navegation/Nategation';
import CardProduct from './components/Card/Card';
import CardPerfHombre from './components/CardPerfumeHombre/PerfumeHombre';
import Contact from './components/Contact/Contact';
import Contact2 from './components/Contact2/Contact2';
import ShoppingCart from './components/ShoppingCart/ShoppingCart';
import MisFavoritos from './components/MisFavoritos/MisFavoritos';
import ProductDetalle from './components/Item/Item';


function App() {
  return (
    
    <div className="App">
      
      <Provider store={store}>
      <Navegation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/productos" element={<CardProduct />} />
        <Route path="/contacto" element={<Contact />} />
        <Route path="/MisFavoritos" element={<MisFavoritos />} />
        <Route path="/item/:id" element={<ProductDetalle />} />
        <Route path="/shoppingCard" element={<ShoppingCart />} />
        <Route path="/IniciarSesion" element={<Contact2 />} />
        <Route path="/FraganciasHombres" element={<CardPerfHombre />} />
      </Routes>
      </Provider>
    </div>

 
  );
}
 
export default App;
