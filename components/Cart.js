import React, {useState, useEffect} from "react"

const Cart =(props)=> {
  const [cartItems, updateCart] = useState(props.cart);
  const[realCart, updateRealCart] = useState([]);
  useEffect(()=>{
    fetchItems();
  }, [])
  const fetchItems = async() =>{
  
    for(let item in cartItems){
      const data = await fetch(`https://fakestoreapi.com/products/${item}`)
      const itemInfo = await data.json();
      itemInfo.count=cartItems[item];
      updateRealCart([
        itemInfo,
        ...realCart
        
      ])
    }
  }
    return (
      <div className="App">
        <h1>cartItems</h1>
        {console.log(realCart)}
      </div>
    );
  }
  
  export default Cart;