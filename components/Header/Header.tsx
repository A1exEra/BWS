import styled, { css } from 'styled-components';
import Burger from './Burger';
import SliderNav from './SliderNav';
import { useState, useEffect } from 'react';
import ShoppingCartIcon from '@/public/icons/shopping_cart.svg';
import Image from 'next/image';
import Link from 'next/link';
import Cart from './Cart';
const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const isCartOpenHandler = () => {
    setIsCartOpen(!isCartOpen);
  };
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
  }, [isOpen]);
  return (
    <StyledHeader>
      <SliderNav isOpen={isOpen} setIsOpen={setIsOpen} />
      <Burger setIsOpen={setIsOpen} isOpen={isOpen} />

      <Link href="/">
        <h3>BWS</h3>
      </Link>
      <Image
        src={ShoppingCartIcon}
        alt="shopping-cart-icon"
        onClick={isCartOpenHandler}
      />
      <Cart isCartOpen={isCartOpen} setIsCartOpen={setIsCartOpen} />
    </StyledHeader>
  );
};

export const StyledHeader = styled.div`
  position: sticky;
  top: 0;
  background-color: ${({ theme }) => theme.colors.primary};
  //   opacity: 0.5;
  padding: 18px 64px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  h3 {
    font-size: 32px;
    font-family: ${({ theme }) => theme.fonts.secondary};
    font-weight: 500;
    letter-spacing: 10px;
    color: ${({ theme }) => theme.colors.whitePrimary};
  }
  img {
    cursor: pointer;
  }
  @media (max-width: 768px) {
    padding: 16px;
  }
`;
export default Header;
