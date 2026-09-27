import React from "react";

export default function Productsİtem({ product }) {

  return (
    <div className="w-64  overflow-hidden rounded-xl border border-gray-200 bg-white shadow-2xl">
  <img
    src={product.image}
    alt={product.name}
    className="h-48 w-full object-cover"
  />



  <div className="p-4">


  <h3 className="mb-2 text-lg font-semibold text-gray-800">
      {product.name}
    </h3>

    <h3 className="mb-2 text-sm  font-light text-gray-800">
      {product.description}
    </h3>

    <p className="mb-4 text-xl font-bold text-gray-900">
      ${product.price}
    </p>

    <button className="w-full rounded-lg bg-black px-4 py-2 text-white transition hover:bg-gray-800">
      Add to Cart
    </button>
  </div>
</div>
  );
}
