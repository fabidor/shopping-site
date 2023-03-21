import React, {useState, useEffect} from "react"

const Cart =(props)=> {
  const [cartItems, updateCart] = useState(props.cart);
  const[realCart, updateRealCart] = useState({});
  useEffect(()=>{
    fetchItems(cartItems);
  }, [cartItems])
  const fetchItems = async(cartItems) =>{
    for(let item in cartItems){
      const data = await fetch(`https://fakestoreapi.com/products/${item}`)
      const itemInfo = await data.json();
      itemInfo.count=cartItems[item];
      console.log(itemInfo);
      updateRealCart({
        ...realCart,
        itemInfo
    })
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