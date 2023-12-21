
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Component/Home';

import Products from './Component/Products';
import Product from './Component/Product';
import Cart from './Component/Cart';
import Login from './Component/Login';
import Register from './Component/Register';

import Update from './Component/Update';
import About from './Component/About';
import View from './Component/View';
import Addproduct from './Component/Addproduct';


function App() {
  
  return (
    <>
    
    <Routes>
   
      <Route path="/home" element={<Home />} />
      <Route path="/products" element={<Products/>} />
      <Route path="/products/:id" element={<Product/>} />
      <Route path="/about" element={<About/>} />
      <Route path="/view/:id" element={<View/>} />
      <Route path="/update/:id" element={<Update/>} />
      <Route path="/cart" element={<Cart/>} />
      <Route path="/" element={<Login/>} />
      <Route path="/register" element={<Register/>} />
      <Route path="/addproduct" element={<Addproduct/>} />
      
    </Routes>

    </>
  );
}

export default App;
