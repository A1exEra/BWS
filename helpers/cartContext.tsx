import {
  createContext,
  useState,
  useContext,
  useEffect,
  ReactNode,
  useCallback,
} from 'react';
import { BWS_DATA } from './types';

interface CartItem extends BWS_DATA {
  quantity: number;
  totalItemPrice: number;
  chosenColor: string;
}

interface CartContextType {
  cartItems: CartItem[];
  children?: ReactNode;
  addToCart: (product: BWS_DATA, chosenColor: string) => void;
  removeFromCart: (productId: string) => void;
  clearCart: () => void;
  incrementItem: (productId: string) => void;
  decrementItem: (productId: string) => void;
}

const CartContext = createContext<CartContextType>({
  cartItems: [],
  addToCart: () => {},
  removeFromCart: () => {},
  clearCart: () => {},
  incrementItem: () => {},
  decrementItem: () => {},
});
interface CartProviderProps {
  children: React.ReactNode;
}
export function useCart() {
  return useContext(CartContext);
}
export const CartProvider: React.FC<CartProviderProps> = ({ children }) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  useEffect(() => {
    const storedCartItems = localStorage.getItem('cartItems');
    if (storedCartItems) {
      setCartItems(JSON.parse(storedCartItems));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  }, [cartItems]);

  // const addToCart = (product: BWS_DATA, chosenColor: string) => {
  //   const existingItem = cartItems.find((item) => item.id === product.id);
  //   if (existingItem) {
  //     if (existingItem.chosenColor !== chosenColor) {
  //       setCartItems((prevItems) => [
  //         ...prevItems,
  //         {
  //           ...product,
  //           quantity: 1,
  //           totalItemPrice: product.price,
  //           chosenColor: chosenColor,
  //         },
  //       ]);
  //       return;
  //     }
  //     setCartItems((prevItems) =>
  //       prevItems.map((item) =>
  //         item.id === product.id && item.chosenColor === chosenColor
  //           ? {
  //               ...item,
  //               quantity: item.quantity + 1,
  //               totalItemPrice: +(product.price * (item.quantity + 1)).toFixed(
  //                 2
  //               ),
  //             }
  //           : item
  //       )
  //     );
  //   } else {
  //     setCartItems((prevItems) => [
  //       ...prevItems,
  //       {
  //         ...product,
  //         quantity: 1,
  //         totalItemPrice: product.price,
  //         chosenColor: chosenColor,
  //       },
  //     ]);
  //   }
  // };
  const addToCart = (product: BWS_DATA, chosenColor: string) => {
    const existingItemIndex = cartItems.findIndex(
      (item) => item.id === product.id && item.chosenColor === chosenColor
    );

    if (existingItemIndex !== -1) {
      // Item with the same name and color exists in the cart
      setCartItems((prevItems) =>
        prevItems.map((item, index) => {
          if (index === existingItemIndex) {
            // Increment the quantity and update the totalItemPrice
            return {
              ...item,
              quantity: item.quantity + 1,
              totalItemPrice: +(product.price * (item.quantity + 1)).toFixed(2),
            };
          }
          return item;
        })
      );
    } else {
      // Item with the same name and color does not exist in the cart
      setCartItems((prevItems) => [
        ...prevItems,
        {
          ...product,
          quantity: 1,
          totalItemPrice: product.price,
          chosenColor: chosenColor,
        },
      ]);
    }
  };
  const removeFromCart = useCallback((productId: string) => {
    setCartItems((prevItems) =>
      prevItems.filter((item) => item.id !== productId)
    );
  }, []);
  const clearCart = () => {
    setCartItems([]);
  };
  const incrementItem = useCallback((productId: string) => {
    setCartItems((prevItems) => {
      return prevItems.map((item) => {
        if (item.id === productId) {
          return {
            ...item,
            quantity: item.quantity + 1,
            totalItemPrice: (item.quantity + 1) * item.price,
          };
        }
        return item;
      });
    });
  }, []);

  const decrementItem = useCallback((productId: string) => {
    setCartItems((prevItems: any) => {
      return prevItems
        .map((item: CartItem) => {
          if (item.id === productId) {
            const updatedQuantity = Math.max(item.quantity - 1, 0);
            if (updatedQuantity === 0) {
              return null;
            }
            return {
              ...item,
              quantity: updatedQuantity,
              totalItemPrice: updatedQuantity * item.price,
            };
          }
          return item;
        })
        .filter(Boolean);
    });
  }, []);
  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        clearCart,
        removeFromCart,
        incrementItem,
        decrementItem,
      }}>
      {children}
    </CartContext.Provider>
  );
};
