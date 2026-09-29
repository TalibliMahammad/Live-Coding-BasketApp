import  { useContext } from "react";
import { CartContext } from "../../context/CartContext";

export default function Productsİtem({ product }) {
  


const { addToCart ,cart} = useContext(CartContext);

const isAdded = cart.some((item)=>item.id === product.id)

  return (
    <div className="w-64  overflow-hidden rounded-xl border  border-gray-200 bg-white shadow-2xl">
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

        <p className="mb-4 text-xl font-bold text-gray-900">${product.price}</p>

        <button onClick={()=>addToCart(product)}  className={`w-full rounded-lg bg-black px-4 py-2 text-white transition  ${isAdded ? "bg-orange-500 " : ""}`}>
         { isAdded ? "Added " : "Add to Cart" }
        </button>
      </div>
    </div>
  );
}
