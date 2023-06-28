// import styles from './Burger.module.scss';
// import { useState, useEffect } from 'react';
// import Button from '@/helpers/Button/Button';
// import { StyledBurger } from './Burger.styled';
// type BurgerProps = {
//   isOpened: boolean;
//   onBurgerClick: (isActive: boolean) => void;
//   className?: string;
// };
// const Burger = ({ isOpened, onBurgerClick, className }: BurgerProps) => {
//   const [isActive, setIsActive] = useState(false);

//   const handleClick = () => {
//     setIsActive(!isActive);
//     onBurgerClick(isActive);
//   };
//   useEffect(() => {
//     if (isOpened) setIsActive(false);
//   }, [isOpened]);
//   return (
//     <StyledBurger>
//       <Button
//         className={`${styles.burger_menu} ${className}`}
//         onClick={handleClick}>
//         <div className={`stripe ${isActive ? 'stripe-top' : ''}`}></div>
//         <div className={`stripe ${isActive ? 'stripe-middle' : ''}`}></div>
//         <div className={`stripe ${isActive ? 'stripe-bottom' : ''}`}></div>
//       </Button>
//     </StyledBurger>
//   );
// };

// export default Burger;
import { useState, useEffect } from 'react';
import styled, { css } from 'styled-components';

const StyledBurger = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 30px;
  height: 30px;
  cursor: pointer;
  z-index: 100;
  background: none;
  .stripe {
    margin-bottom: 0.3rem;
    width: 100%;
    height: 3px;
    border-top-left-radius: 50%;
    border-radius: 2px;
    background-color: ${({ theme }) => theme.colors.whitePrimary};
    transition: 0.7s all ease-in-out;
  }

  .stripe-top {
    transform: translateY(12.5px) rotateZ(45deg);
    height: 3px;
    opacity: 0.8;
  }

  .stripe-middle {
    box-shadow: 0 0 0 0px rgba(222, 192, 222, 0);
    background-color: rgba(222, 192, 222, 0);
  }

  .stripe-bottom {
    transform: translateY(-9px) rotateZ(-45deg);
    height: 3px;
    opacity: 0.8;
  }
`;
type BurgerProps = {
  isOpen: boolean;
  className?: string;
  setIsOpen: any;
};

const Burger = ({ isOpen, setIsOpen }: BurgerProps) => {
  //   const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    // setIsActive(!isActive);
    setIsOpen((prev: boolean) => !prev);
    // console.log(isActive);
  };
  return (
    <StyledBurger onClick={handleClick}>
      <div className={`stripe ${isOpen ? 'stripe-top' : ''}`}></div>
      <div className={`stripe ${isOpen ? 'stripe-middle' : ''}`}></div>
      <div className={`stripe ${isOpen ? 'stripe-bottom' : ''}`}></div>
    </StyledBurger>
  );
};

export default Burger;
