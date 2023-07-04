import { useRef, useEffect, useContext } from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import { useCart } from '@/helpers/cartContext';
import { BWS_DATA } from '@/helpers/api-util';
type SliderProps = {
  isCartOpen: boolean;
  setIsCartOpen: React.Dispatch<React.SetStateAction<boolean>>;
};
const Cart = ({ isCartOpen, setIsCartOpen }: SliderProps) => {
  // const { cartItems, setCartItems } = useContext(CartContext);
  const { cartItems, removeFromCart, incrementItem, decrementItem, clearCart } =
    useCart();
  const sliderRef = useRef<HTMLUListElement>(null);
  const divRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (isCartOpen) {
        if (divRef.current?.contains(event.target as Node)) {
          setIsCartOpen(false);
        }
      }
    };
    document.addEventListener('mousedown', handleOutsideClick);

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, [isCartOpen, setIsCartOpen]);
  ////
  const handleRemoveItem = (productId: string) => {
    removeFromCart(productId);
  };

  const handleClearCart = () => {
    clearCart();
  };
  const handleIncrementItem = (productId: string) => {
    incrementItem(productId);
  };

  const handleDecrementItem = (productId: string) => {
    decrementItem(productId);
  };
  ////
  return (
    <SliderCartContainer isCartOpen={isCartOpen}>
      <div className="background" ref={divRef}></div>
      <ul ref={sliderRef}>
        {cartItems.map((item: BWS_DATA) => (
          <li key={item.id}>
            {item.title}
            <button onClick={() => handleIncrementItem(item.id)}>+1</button>
            <button onClick={() => handleDecrementItem(item.id)}>-1</button>
            <button onClick={() => handleRemoveItem(item.id)}>Remove</button>
          </li>
        ))}
      </ul>
      <button onClick={handleClearCart}>Clear Cart</button>
    </SliderCartContainer>
  );
};
const SliderCartContainer = styled.nav<{ isCartOpen: boolean }>`
  .background {
    position: absolute;
    top: 0px;
    right: 320px;
    width: 100vw;
    height: 100vh;
    opacity: 0.8;
    z-index: 99;
    display: ${({ isCartOpen }) => (isCartOpen ? 'block' : 'none')};
  }
  position: fixed;
  top: 76px;
  right: 0px;
  width: 320px;
  height: 100vh;
  background-color: ${({ theme }) => theme.colors.whiteSecondary};
  z-index: 100;
  transition: transform 0.3s ease-in-out;
  transform: ${({ isCartOpen }) =>
    isCartOpen ? 'translateX(0)' : 'translateX(100%)'};
`;
export default Cart;
