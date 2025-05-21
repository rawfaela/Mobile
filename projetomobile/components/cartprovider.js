import { createContext, useContext, useState } from "react";

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  function addToCart(product, amount = 1) {
    setCart(prevCart => {
      const existing = prevCart.find(item => item.id === product.id);
      if (existing) {
        // Atualiza a quantidade somando amount
        return prevCart.map(item =>
          item.id === product.id
            ? { ...item, quantidade: item.quantidade + amount }
            : item
        );
      } else {
        // Adiciona produto com quantidade inicial
        return [...prevCart, { ...product, quantidade: amount }];
      }
    });
  }

  function decreaseQuantity(id) {
    setCart(prevCart => {
      return prevCart
        .map(item =>
          item.id === id ? { ...item, quantidade: item.quantidade - 1 } : item
        )
        .filter(item => item.quantidade > 0); // Remove se quantidade 0
    });
  }

  function removeFromCart(id) {
    setCart(prevCart => prevCart.filter(item => item.id !== id));
  }

  function clearCart() {
    setCart([]);
  }

  return (
    <CartContext.Provider
      value={{ cart, addToCart, decreaseQuantity, removeFromCart, clearCart }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}
