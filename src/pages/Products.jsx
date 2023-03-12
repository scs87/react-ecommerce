import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ProductItem } from "../components/ProductItem/ProductItem";


export const Products = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getData = async () => {
      setIsLoading(true);
      const res = await fetch("http://localhost:3000/products");
      const data = await res.json();
      setProducts(data);
      setIsLoading(false);
    };
    getData();
  }, []);

  return (
    <div>
      <Link to="/cart">Go to cart!</Link>
      {isLoading && <p>Loading...</p>}
      <div
        style={{
          width: "100%",
          display: "grid",
          gridTemplateColumns: "auto auto auto",
          gap:"3rem"
        }}
      >
        {products.length &&
          products.map((product) => {
            return (
              <ProductItem key={product.id} product={product}/>
            );
          })}
      </div>
    </div>
  );
};
