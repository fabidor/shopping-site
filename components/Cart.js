import React, {useState, useEffect} from "react"
import ItemThumbnail from "./ItemThumbnail.js"

const Cart =(props)=> {
  const cartItems=props.cart;
  const cartPrice = (cartItems) =>{
    let sum = 0;
    cartItems.map(item =>(
      sum = sum+(item['price']*item['count'])
    ))
    return sum;
  }
  const price = cartPrice(cartItems);
    return (
      <div className="App">
        <h1>Cart Items</h1>
        <div className="cartList">
          {cartItems.map(item =>(
            <div key={cartItems.indexOf(item)} className="thumbnailWithButton" >
              <ItemThumbnail itemDetails = {item} /> 
              <button onClick = {props.reduceItem} id={cartItems.indexOf(item)}>-</button>
              <div>{item.count}</div>
              <button onClick={props.removeFromCart} id={cartItems.indexOf(item)}>Remove From Cart</button>
            </div>
          )
      
            
          )}
        </div>
        <div>Cart Total: {price.toFixed(2)}</div>
      </div>
    );
  }
  
  export default Cart;