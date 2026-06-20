import { useState } from "react";

export function useWishlist() {
  const [wishlist, setWishlist] = useState(() => {
    try {
      const saved = localStorage.getItem("wishlist");
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const addToWishlist = (item) => {
    setWishlist((prev) => {
      const exists = prev.some((p) => p.id === item.id);
      const next = exists ? prev : [...prev, item];
      localStorage.setItem("wishlist", JSON.stringify(next));
      return next;
    });
  };

  const removeFromWishlist = (id) => {
    setWishlist((prev) => {
      const next = prev.filter((item) => item.id !== id);
      localStorage.setItem("wishlist", JSON.stringify(next));
      return next;
    });
  };

  return { wishlist, addToWishlist, removeFromWishlist };
}
