import React, {useState, useEffect} from "react";
import {Link} from "react-router-dom"
import ItemDetail from "./ItemDetail.js"

const Shop =() =>{
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
      <div className="App"> 
        <h1>Shop</h1>
        {shoppingList.map(item => (
          <div key={item.id}>
            <Link to={`/shop/${item.id}`}>{item.title}</Link>
          </div>
          
        ))}
      </div>
    );
  }
  
  export default Shop;