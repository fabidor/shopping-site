import React, {useState, useEffect} from "react";
import {useParams} from "react-router-dom"

const ItemDetail =(props) =>{
  const[item, updateItem] = useState({});
  const m = useParams();
  const addItem = props.addToCart;
  useEffect(() => {
    fetchItem();
    console.log(m)
  }, [])
   const fetchItem = async () => {
      const data = await fetch(`https://fakestoreapi.com/products/${m.id}`)
      const product = await data.json();
      updateItem(product)
     
   }
    return (
      <div id={item.id}>
        <h1>{item.title}</h1>
        <img src={item.image} alt="Product"></img>
        <div>{item.description}</div>
        <div>Price: ${item.price}</div>
        <button onClick={addItem} id={item.id}>Add To Cart</button>
      </div>

    );
  }

  export default ItemDetail