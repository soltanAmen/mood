import { createContext, useEffect, useState } from "react";
export const CartContext = createContext({});

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];

    setCartCount(cart.length);
    setCart(cart);
  }, [cart.length]);

  return (
    <CartContext.Provider
      value={{
        cartCount,
        setCartCount,
        setCart,
        cart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
