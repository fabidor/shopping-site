import React, {useState, useEffect} from "react";
import {useParams} from "react-router-dom"

const ItemDetail =(props) =>{
  const[item, updateItem] = useState({});
  const m = useParams();
  const addItem = props.addToCart;
  useEffect(() => {
    fetchItem();
  }, [])
   const fetchItem = async () => {
      const data = await fetch(`https://fakestoreapi.com/products/${m.id}`)
      const product = await data.json();
      product.price = product.price.toFixed(2);
      updateItem(product)
     
   }
    return (
      <div id={item.id} className="itemPage">
        <h1 className="itemTitle">{item.title}</h1>
        <img  className="itemImage" src={item.image} alt="Product"></img>
        <div className="itemDescription">{item.description}</div>
        <div className="itemPrice">Price: ${item.price}</div>
        <button onClick={addItem} id={item.id} className="addButton">Add To Cart</button>
      </div>

    );
  }

  export default ItemDetail