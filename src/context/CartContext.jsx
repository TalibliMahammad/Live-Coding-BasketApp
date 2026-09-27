import { createContext, useState } from "react";
import Productsİtem from "../Pages/Products/Productsİtem";

const CartContext = createContext();

function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  const addToCart = (products) => {
    const exsits = cart.some((item) => item.id === products.id);
    if (exsits) {
      setCart(cart.filter((item) => item.id !== products.id));
    } else {
      setCart((prev) => [...prev, products]);
    }
  };
  console.log(cart);

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export { CartContext, CartProvider };
