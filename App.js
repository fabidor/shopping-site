import logo from './logo.svg';
import React, {useState, useEffect} from "react";
import './App.css';
import Nav from "./components/Nav.js"
import About from "./components/About.js"
import Shop from "./components/Shop.js"
import Cart from "./components/Cart.js"
import ItemDetail from "./components/ItemDetail.js"
import {BrowserRouter, Routes, Route} from "react-router-dom";

function App() {
  const [cart, updateCart]=useState({});
  const [cartSize, updateCartSize] = useState(0);
  const addToCart=(e) =>{
    let item = e.target.id;
    if(item in cart){
      let itemCount = cart[item];
      itemCount ++;
      updateCart({
       ...cart,
        [item]: itemCount
    })
    } else{
      updateCart({
        ...cart,
        [item]:1
      }
     )
    }
    console.log(cart);
}
  useEffect(() =>{
    let cartCount = 0;
    for(let item in cart){
      cartCount += cart[item];
    }
    updateCartSize(
      cartCount
    )
    console.log(cartSize);
  }, [cart])
  return (
    <BrowserRouter>
      <Nav cartSize = {cartSize}/>
      <Routes>
        <Route path= "/" element={<About />} />
        <Route path = "/shop" element = {<Shop />} />
        <Route path = "/cart" element = {<Cart cart = {cart}/>} />
        <Route path="/shop/:id" element = {<ItemDetail addToCart={addToCart}/>} />
      </Routes>
    </BrowserRouter>
    
  );
}

export default App;
