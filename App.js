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
  const [cart, updateCart]=useState([]);
  const [cartSize, updateCartSize] = useState(0);
  const addToCart=(e) =>{
    let itemId = e.target.id;
    fetchItem(itemId);
    console.log(cart);
  }
  const removeFromCart = (e) =>{
    let newCart = [...cart];
    newCart.splice(e.target.id, 1);
    updateCart(newCart);
  }
const fetchItem = async (id) =>{
  const item = id;
  const data = await fetch(`https://fakestoreapi.com/products/${item}`)
  const itemInfo = await data.json();
  let editCart = [...cart];
  for(let i = 0; i< editCart.length; i++){
    if(editCart[i].id === itemInfo.id){
      editCart[i].count = editCart[i].count + 1;
      updateCart([...editCart])
      return;
    }
  }
  itemInfo.count = 1;
  editCart.push(itemInfo);
  updateCart([...editCart]);
  
}
  useEffect(() =>{
   updateCartSize(cart.length);
  }, [cart]) 
  return (
    <BrowserRouter>
      <Nav cartSize = {cartSize}/>
      <Routes>
        <Route path= "/" element={<About />} />
        <Route path = "/shop" element = {<Shop addToCart={addToCart}/>} />
        <Route path = "/cart" element = {<Cart cart = {cart} removeFromCart={removeFromCart}/>} />
        <Route path="/shop/:id" element = {<ItemDetail addToCart={addToCart}/>} />
      </Routes>
    </BrowserRouter>
    
  );
}

export default App;
