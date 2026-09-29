import { createContext, useEffect, useState } from "react";

const CartContext = createContext();

function CartProvider({ children }) {
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem("cart");
    return savedCart ? JSON.parse(savedCart) : [];
  });

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const addToCart = (products) => {
    const exsits = cart.some((item) => item.id === products.id);
    if (exsits) {
      increaseQuantity(products.id);
    } else {
      const newProduct = {
        ...products,
        quantity: 1,
      };
      setCart((prev) => [...prev, newProduct]);
    }
  };

  const increaseQuantity = (productId) => {
    setCart((prev) =>
      prev.map((item) =>
        item.id === productId ? { ...item, quantity: item.quantity + 1 } : item,
      ),
    );
  };

  const decreaseQuantity = (productId) => {
    setCart((prev) =>
      prev.map((item) =>
        item.id === productId && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item,
      ),
    );
  };

  const totalSum = (cart) => {
    return cart.reduce((total, item) => {
     return  total + item.price * item.quantity;
    }, 0);
  };

  const totalQuantity = (cart) => {
    return cart.reduce((total, item) => {
     return  total + item.quantity;
    }, 0);
  };


  const total = totalSum(cart);
  const totalPiece =totalQuantity(cart)

  console.log(cart);
  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        increaseQuantity,
        decreaseQuantity,
        total,
        totalPiece
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export { CartContext, CartProvider };
