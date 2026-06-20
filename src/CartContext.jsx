import { useState, useEffect } from "react";
import { CartContext } from "./CartContextInstance";

export function CartProvider({ children }) {
  const [cart, setCart] = useState(() => {
    try {
      const saved = localStorage.getItem("cart");
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const addToCart = (product) => {
    setCart((prev) => {
      const exists = prev.some((item) => item.id === product.id);
      const next = exists ? prev : [...prev, product];
      localStorage.setItem("cart", JSON.stringify(next));
      return next;
    });
  };

  const removeFromCart = (id) => {
    setCart((prev) => {
      const next = prev.filter((item) => item.id !== id);
      localStorage.setItem("cart", JSON.stringify(next));
      return next;
    });
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
}