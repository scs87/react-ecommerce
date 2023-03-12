import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

export const ProductItem = ({ product }) => {
  const { name, url, price} = product;
  const {cart, setCart} = useContext(CartContext)

  const addProduct = () => {
    setCart([...cart, product])
  };

  return (
    <div>
      <img alt="" src={url} />
      <p>{name}</p>
      <p>{price}</p>
      <button onClick={addProduct}>Buy</button>
    </div>
  );
};
