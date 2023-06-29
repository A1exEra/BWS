import { useRef, useEffect } from 'react';
import styled from 'styled-components';
type SliderProps = {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};
const SliderNav = ({ isOpen, setIsOpen }: SliderProps) => {
  const sliderRef = useRef<HTMLUListElement>(null);
  const divRef = useRef<HTMLUListElement>(null);
  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (isOpen) {
        if (divRef.current?.contains(event.target)) {
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

const SliderNavContainer = styled.nav<{ isOpen: boolean }>`
  .background {
    position: absolute;
    top: 0px;
    left: 0px;
    width: 100vw;
    height: 100vh;
    opacity: 0.8;
    z-index: 99;
    display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};
  }
  position: fixed;
  top: 76px;
  left: 0px;
  width: 320px;
  height: 100vh;
  background-color: ${({ theme }) => theme.colors.primary};
  z-index: 100;
  transition: transform 0.3s ease-in-out;
  transform: ${({ isOpen }) =>
    isOpen ? 'translateX(0)' : 'translateX(-100%)'};
`;
export default SliderNav;
