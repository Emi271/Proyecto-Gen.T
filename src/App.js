
import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import Home from './components/Home/Home';
import Navegation from './components/Navegation/Navegation';
import CardProduct from './components/Card/Card';
import Contact from './components/Contact/Contact';
import 'bootstrap/dist/css/bootstrap.min.css';
import ShoppingCart from './components/ShoppingCart/ShoppingCart';
import GlobalState from './components/Context/Context';

function App() {
  return (
    <GlobalState>
    <div className="App">
      <Navegation/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/productos" element={<CardProduct />} />
        <Route path="/contacto" element={<Contact />} />
        <Route path="/shoppingCard" element={<ShoppingCart />} />
      </Routes>
    </div>
    </GlobalState>

  );
}

export default App;