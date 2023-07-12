import { useState, useEffect } from 'react';
import { BWS_DATA } from './types';

interface CartItem extends BWS_DATA {
  quantity: number;
  totalItemPrice: number;
}

const ManageCart = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  useEffect(() => {
    const loadCartItemsFromLocalStorage = () => {
      const storedItems = localStorage.getItem('BWS_Cart_Items');
      if (storedItems) {
        setCartItems(JSON.parse(storedItems));
      }
    };

    loadCartItemsFromLocalStorage();
  }, []);

  // Save cart items to local storage whenever the cartItems state changes
  useEffect(() => {
    localStorage.setItem('BWS_Cart_Items', JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = (item: BWS_DATA) => {
    // Check if the item already exists in the cart
    const existingItem = cartItems.find(
      (cartItem: CartItem) => cartItem.id === item.id
    );
    if (existingItem) {
      // If the item exists, update the quantity and totalItemPrice
      const updatedCartItems = cartItems.map((cartItem: CartItem) =>
        cartItem.id === item.id
          ? {
              ...cartItem,
              quantity: cartItem.quantity + 1,
              totalItemPrice: (cartItem.quantity + 1) * cartItem.price,
            }
          : cartItem
      );
      setCartItems(updatedCartItems);
    } else {
      // If the item doesn't exist, add it to the cart with quantity 1 and calculate totalItemPrice
      const newItem: CartItem = {
        ...item,
        quantity: 1,
        totalItemPrice: item.price,
      };
      setCartItems((prevCartItems) => [...prevCartItems, newItem]); // Use functional update to preserve existing items
    }
  };

  const removeFromCart = (itemId: string) => {
    const updatedCartItems = cartItems.filter((item) => item.id !== itemId);
    setCartItems(updatedCartItems);
  };

  return { cartItems, addToCart, removeFromCart };
};

export default ManageCart;
