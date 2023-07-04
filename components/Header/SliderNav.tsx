import { useRef, useEffect } from 'react';
import styled from 'styled-components';
import Link from 'next/link';
type SliderProps = {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};
const SliderNav = ({ isOpen, setIsOpen }: SliderProps) => {
  const sliderRef = useRef<HTMLUListElement>(null);
  const divRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (isOpen) {
        if (divRef.current?.contains(event.target as Node)) {
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
        <li>
          <Link href="/">
            <h3>HOME</h3>
          </Link>
        </li>
        <li>
          <Link href="/products">
            <h3>PRODUCTS</h3>
          </Link>
        </li>
      </ul>
    </SliderNavContainer>
  );
};

const SliderNavContainer = styled.nav<{ isOpen: boolean }>`
  z-index: 100000;
  .background {
    position: absolute;
    top: 0px;
    left: 320px;
    width: 100vw;
    height: 100vh;
    opacity: 0.8;
    z-index: 99;
    background-color: rgba(0, 0, 0, 0.5);
    display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};
  }
  a {
    h3 {
      font-size: 32px;
      font-family: ${({ theme }) => theme.fontSizes.text20};
      font-weight: 500;
      letter-spacing: 10px;
      color: ${({ theme }) => theme.colors.third};
    }
  }
  position: fixed;
  top: 76px;
  left: 0px;
  width: 320px;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.whiteSecondary};
  z-index: 99;
  transition: transform 0.3s ease-in-out;
  transform: ${({ isOpen }) =>
    isOpen ? 'translateX(0)' : 'translateX(-100%)'};
`;
export default SliderNav;
