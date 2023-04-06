import React, {useState, useEffect} from "react";
import {Link} from "react-router-dom"
import ItemDetail from "./ItemDetail.js"
import ItemThumbnail from "./ItemThumbnail.js"

const Shop =(props) =>{
  const[shoppingList, updateList] = useState([]);
  useEffect(() => {
    fetchItems();
  }, [])
   const fetchItems = async () => {
      const itemList = await fetch('https://fakestoreapi.com/products')
      const parsedItems = await itemList.json()
      updateList(parsedItems)
   }
    return (
      <div className="shop"> 
        <h1>Shop</h1>
        <div className="shoppingList">
          {shoppingList.map(item => (
            <div key={item.id} className="thumbnailWithButton">
              <Link to={`/shop/${item.id}`} id={item.id}><ItemThumbnail itemDetails = {item}/></Link>
              <button onClick={props.addToCart} id={item.id}>Add To Cart</button>
            </div>
            
          ))}
        </div>
      </div>
    );
  }
  
  export default Shop;