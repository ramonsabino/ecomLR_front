import React, { createContext, useContext, useState } from 'react';

interface CartItem {
  id: number;
  name: string;
  quantity: number;
  price: number;
}

interface CartContextType {
  cartItems: CartItem[];
  addToCart: (item: CartItem) => void;
  removeFromCart: (id: number) => void;
  clearCart: () => void;
  incrementQuantity: (id: number) => void;
  decrementQuantity: (id: number) => void;
}

const CartContext = createContext<CartContextType>({
  cartItems: [],
  addToCart: () => {},
  removeFromCart: () => {},
  clearCart: () => {},
  incrementQuantity: () => {},
  decrementQuantity: () => {},
});

export const useCart = () => useContext(CartContext);

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  const addToCart = (item: CartItem) => {
    setCartItems(prevItems => [...prevItems, item]);
  };

  const removeFromCart = (id: number) => {
    setCartItems(prevItems => prevItems.filter(item => item.id !== id));
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const incrementQuantity = (id: number) => {
    setCartItems(prevItems =>
      prevItems.map(item => {
        if (item.id === id) {
          return { ...item, quantity: item.quantity + 1 };
        }
        return item;
      })
    );
  };

  const decrementQuantity = (id: number) => {
    setCartItems(prevItems =>
      prevItems.map(item => {
        if (item.id === id && item.quantity > 1) {
          return { ...item, quantity: item.quantity - 1 };
        }
        return item;
      })
    );
  };

  return (
    <CartContext.Provider
      value={{ cartItems, addToCart, removeFromCart, clearCart, incrementQuantity, decrementQuantity }}
    >
      {children}
    </CartContext.Provider>
  );
};
