import React, { useState, useEffect, createContext } from 'react';

export const CartContext = createContext({});

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const localCart = localStorage.getItem('cart');
    if (localCart) {
      setCart(JSON.parse(localCart));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  const addToCart = item => {
    setCart(prevCart => {
      const existingItem = prevCart.find(i => i.id === item.id);

      if (existingItem) {
        return prevCart.map(i =>
          i.id === item.id
            ? { ...i, quantity: i.quantity + item.quantity }
            : i
        );
      } else {
        return [...prevCart, item];
      }
    });
  };

  const removeFromCart = id => {
    setCart(prevCart => prevCart.filter(i => i.id !== id));
  };

  const updateQuantity = (id, quantity) => {
    setCart(prevCart =>
      prevCart.map(i => (i.id === id ? { ...i, quantity } : i))
    );
  };

  const totalQuantity = () => cart.reduce((acc, cur) => acc + cur.quantity, 0);

  const totalValue = () =>
    cart.reduce((acc, cur) => acc + cur.quantity * cur.price, 0);

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        updateQuantity,
        totalQuantity,
        totalValue
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;