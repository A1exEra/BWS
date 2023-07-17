import styled, { css } from 'styled-components';
import Burger from './Burger';
import SliderNav from './SliderNav';
import { useState, useEffect } from 'react';
import ShoppingCartIcon from '@/public/icons/shopping_cart.svg';
import Image from 'next/image';
import Link from 'next/link';
import Cart from './Cart/Cart';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [quantity, setQuantity] = useState(0);
  const isCartOpenHandler = () => {
    setIsCartOpen(!isCartOpen);
  };
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    if (isOpen) {
      setIsCartOpen(false);
    }
    if (isCartOpen) {
      setIsOpen(false);
    }
  }, [isOpen, isCartOpen]);
  return (
    <StyledHeader>
      <SliderNav isopen={isOpen} setIsOpen={setIsOpen} />
      <Burger setIsOpen={setIsOpen} isopen={isOpen} />

      <Link href="/">
        <h3>BWS</h3>
      </Link>
      <div className="cart_container">
        {quantity > 0 && <span className="indicator">{quantity}</span>}
        <Image
          src={ShoppingCartIcon}
          alt="shopping-cart-icon"
          onClick={isCartOpenHandler}
        />
      </div>
      <Cart
        iscartopen={isCartOpen}
        setIsCartOpen={setIsCartOpen}
        setQuantity={setQuantity}
      />
    </StyledHeader>
  );
};

export const StyledHeader = styled.div`
  position: sticky;
  z-index: 1000;
  width: 100%;
  height: 76px;
  top: 0;
  background-color: ${({ theme }) => theme.colors.third};
  padding: 18px 64px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0px 2px 12px 2px rgba(0, 0, 0, 0.2);
  h3 {
    font-size: 32px;
    font-family: ${({ theme }) => theme.fontSizes.text2xl};
    font-weight: 500;
    letter-spacing: 10px;
    color: ${({ theme }) => theme.colors.whitePrimary};
  }
  img {
    cursor: pointer;
  }
  .cart_container {
    position: relative;
    .indicator {
      position: absolute;
      top: 0px;
      right: 0px;
      background-color: red;
      color: white;
      font-size: 12px;
      width: 20px;
      height: 20px;
      border-radius: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }

  @media (max-width: 768px) {
    padding: 16px;
  }
`;
export default Header;
