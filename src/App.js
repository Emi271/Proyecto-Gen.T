import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import { Provider } from 'react-redux';
import Home from './components/Home/Home';
import Navegation from './components/Navegation/Nategation';
import CardProduct from './components/Card/Card';
import Contact from './components/Contact/Contact';
import 'bootstrap/dist/css/bootstrap.min.css';
import ShoppingCart from './components/ShoppingCart/ShoppingCart';
import store from "./store/index";
import Item from './components/Item/Item';
import Footer from './components/Footer/Footer';


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
      </Routes>
      <br></br>
      <Footer></Footer>
    
     {/*    <ShoppingCart /> */}
      </Provider>
    </div>

 
  );
}
 
export default App;
