import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";

export const Cart = () => {
  const { cart, setCart } = useContext(CartContext);
 
 const removeProduct = (product) =>{
    const filteredProducts = cart.filter((prd)=>{
        return product.id !== prd.id
    })
    setCart(filteredProducts)
 }

  return (
    <div>
      <Link to="/">Go to Products!</Link>
      {cart.map((product, index) => {
        const {name, price, id} = product
        return (
          <div key={`${id}-${index}`}>
            <p>{name}</p>
            <p>{price}</p>
            <button onClick={()=>removeProduct(product)}>Remove</button>
          </div>
        );
      })}
    </div>
  );
};

