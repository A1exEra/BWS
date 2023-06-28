import { StyledHeader } from './Header.styled';
import Burger from './Burger/Burger';
import SliderNav from './SliderNav/SliderNav';
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
      <Burger setIsOpen={setIsOpen} isOpen={isOpen} className="burger-hidden" />
      <h3>BSW</h3>
      <Image src={ShoppingCartIcon} alt="shopping-cart-icon" />
    </StyledHeader>
  );
};

export default Header;
