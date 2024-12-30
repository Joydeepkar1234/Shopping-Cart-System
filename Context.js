import React, { createContext, useState, useEffect } from 'react';

export const CartContext = createContext();

const Context = ({ children }) => {

  const [cart, setCart] = useState([]);

  useEffect(() => {
    console.log('Cart updated:', cart);
  }, [cart]);

  const addToCart = (product) => {
    const existingProduct = cart.find((item) => item.id === product.id);
    if (existingProduct) {
      setCart(
        cart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  const removeFromCart = (product) => {
    const existingProduct = cart.find((item) => item.id === product.id);
    if (existingProduct.quantity > 1) {
      setCart(
        cart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
      );
    } else {
      setCart(cart.filter((item) => item.id !== product.id));
    }
  };

  return (
    <CartContext.Provider value={{ cart, setCart, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};

export default Context;
