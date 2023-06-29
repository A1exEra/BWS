import styled, { css } from 'styled-components';
import Burger from './Burger';
import SliderNav from './SliderNav';
import { useState, useEffect } from 'react';
import ShoppingCartIcon from '../icons/shopping_cart.svg';
import Image from 'next/image';
const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
  }, [isOpen]);
  return (
    <StyledHeader>
      <SliderNav isOpen={isOpen} setIsOpen={setIsOpen} />
      <Burger setIsOpen={setIsOpen} isOpen={isOpen} />
      <h3>BSW</h3>

      <Image src={ShoppingCartIcon} alt="shopping-cart-icon" />
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
  @media (max-width: 768px) {
    padding: 16px;
  }
`;
export default Header;
