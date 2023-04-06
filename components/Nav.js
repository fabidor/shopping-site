import React from "react";
import {Link} from "react-router-dom"

const Nav=(props) => {
    const cartItems = props.cartSize;
    return (
        <nav>
        <ul className="options">
            <Link to="/">
                <li>Calico Cut Pants</li>
            </Link>
            <Link to="/shop">
                <li>Shop</li>
            </Link>
            <Link to="/cart">
                <li>Cart {cartItems}</li>
            </Link>
            
        </ul>
        </nav>
      
    );
  }
  
  export default Nav;