import { createContext, useState, useEffect } from "react";

export const CartContext = createContext({
  isCartOpen: false,
  setIsOpen: () => {},
  cartItems: [],
  addItemToCart: () => {},
  removeItemFromCart: () => {},
});

export const CartProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [cartCount, setCartCount] = useState();

  useEffect(() => {
    const itemCount = cartItems.reduce(
      (total, cartItem) => (total = total + cartItem.quantity),
      0
    );
    setCartCount(itemCount);
  }, [cartItems]);

  console.log(cartCount);
  const addItemToCart = (product) => {
    setCartItems(addControl(cartItems, product));
  };
  const removeItemFromCart = (cartItemToRemove) => {
    setCartItems(removeControl(cartItems, cartItemToRemove));
  };
  console.log("cart items", cartItems);
  const values = {
    isCartOpen,
    setIsCartOpen,
    cartItems,
    addItemToCart,
    removeItemFromCart,
    cartCount,
    setCartCount,
  };
  return <CartContext.Provider value={values}>{children}</CartContext.Provider>;
};

const addControl = (cartItems, productToAdd) => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === productToAdd.id
  );
  if (existingCartItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === productToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }

  return [...cartItems, { ...productToAdd, quantity: 1 }];
};

const removeControl = (cartItems, cartItemToRemove) => {
  const cartItemToDecrement = cartItems.find(
    (cartItem) => cartItem.id === cartItemToRemove.id
    )
    console.log("DEC",cartItemToDecrement)
  if (cartItemToDecrement.quantity === 1) {
    return cartItems.filter((cartItem) => cartItem.id !== cartItemToDecrement.id); 
  }
 return cartItems.map((cartItem) =>
   cartItem.id === cartItemToRemove.id
     ? { ...cartItem, quantity: cartItem.quantity - 1 }
     : cartItem
 );
};
