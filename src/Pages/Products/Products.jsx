import React, { useEffect, useState } from "react";
import Productsİtem from "./Productsİtem";

export default function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
      });
  }, []);


  return (
    <div className=" flex justify-center mt-10  ">
        <div className="w-[80%] flex  flex-wrap  gap-10 justify-center shadow-2xl">

      {products.map((item) => (
        <Productsİtem key={item.id} product={item} />
      ))}
        </div>
    </div>
  );
}
