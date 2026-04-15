import React, { createContext, useState, useEffect, useContext } from 'react';
import { authUser } from './AuthuserContext';

export const MyCart = createContext();

const CartProvider = ({ children }) => {
  const { userData } = useContext(authUser);

  const [cart, setCart] = useState(() => {
    const storedCart = localStorage.getItem("cart");
    return storedCart ? JSON.parse(storedCart) : [];
  });

  // Update localStorage whenever cart changes
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  // Update quantity
  const updateQuantity = (index, amount) => {
    setCart((prevCart) =>
      prevCart.map((item, i) =>
        i === index
          ? { ...item, quantity: Math.max(1, (item.quantity || 1) + amount) }
          : item
      )
    );
  };

  // Add to cart
  const addToCart = (product) => {
    if (!userData) return false;

    const existingItemIndex = cart.findIndex((item) => item.id === product.id);

    if (existingItemIndex !== -1) {
      updateQuantity(existingItemIndex, 1);
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
    return true;
  };

  const removeCart = (index) => setCart(cart.filter((_, i) => i !== index));

  const clearCart = () => {
    setCart([]);
    localStorage.removeItem("cart");
  };

  return (
    <MyCart.Provider value={{ cart, addToCart, removeCart, updateQuantity, clearCart }}>
      {children}
    </MyCart.Provider>
  );
};

export default CartProvider;