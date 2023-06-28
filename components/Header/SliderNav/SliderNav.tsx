import { useRef, useEffect, use } from 'react';
import styled from 'styled-components';
type BurgerProps = {
  isOpen: boolean;
  className?: string;
  setIsOpen: any;
};
const SliderNav = ({ isOpen, setIsOpen }) => {
  const sliderRef = useRef(null);
  const divRef = useRef(null);
  useEffect(() => {
    const handleOutsideClick = (event: any) => {
      if (isOpen) {
        if (sliderRef?.current?.contains(event.target)) {
          return document.removeEventListener('mousedown', handleOutsideClick);
        }
        if (divRef?.current?.contains(event.target)) {
          console.log('test');
          setIsOpen(false);
        }
      }
    };
    document.addEventListener('mousedown', handleOutsideClick);

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, [isOpen, setIsOpen]);

  return (
    <SliderNavContainer isOpen={isOpen}>
      <div className="background" ref={divRef}></div>
      <ul ref={sliderRef}>
        <li>Menu Item 1</li>
        <li>Menu Item 2</li>
        <li>Menu Item 3</li>
      </ul>
    </SliderNavContainer>
  );
};

const SliderNavContainer = styled.nav`
  .background {
    position: absolute;
    top: 0px;
    left: 0px;
    width: 100vw;
    height: 100vh;
    opacity: 0.5;
    z-index: 10;
  }
  position: fixed;
  top: 76px;
  left: 0px;
  width: 320px;
  height: 100vh;
  background-color: ${({ theme }) => theme.colors.whitePrimary};
  z-index: 100;
  transition: transform 0.3s ease-in-out;
  transform: ${({ isOpen }) =>
    isOpen ? 'translateX(0)' : 'translateX(-100%)'};
`;
export default SliderNav;
