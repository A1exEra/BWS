import { useRef, useEffect } from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import FirebaseTesting from './FirebaseTesting';
type SliderProps = {
  $isopen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};
const SliderNav = ({ $isopen, setIsOpen }: SliderProps) => {
  const sliderRef = useRef<HTMLUListElement>(null);
  const divRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if ($isopen) {
        if (divRef.current?.contains(event.target as Node)) {
          setIsOpen(false);
        }
      }
    };
    document.addEventListener('mousedown', handleOutsideClick);

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, [$isopen, setIsOpen]);

  return (
    <SliderNavContainer $isopen={$isopen}>
      <div className="background" ref={divRef}></div>
      <h2>BWS</h2>
      <ul ref={sliderRef}>
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
      <h4>Send your feedback to Alex & Razvan</h4>
      <FirebaseTesting />
    </SliderNavContainer>
  );
};

const SliderNavContainer = styled.nav<{ $isopen: boolean }>`
  .background {
    position: absolute;
    top: 0px;
    left: 320px;
    width: 100vw;
    height: 100vh;
    z-index: 998;
    background-color: rgba(0, 0, 0, 0.5);
    display: ${({ $isopen }) => ($isopen ? 'block' : 'none')};
  }
  h2 {
    text-align: center;
    margin-top: 16px;
    font-size: 32px;
    font-family: ${({ theme }) => theme.fontSizes.text2xl};
    font-weight: 500;
    letter-spacing: 10px;
    color: ${({ theme }) => theme.colors.secondary};
  }
  ul {
    display: flex;
    flex-direction: column;
    gap: 16px;
    margin: 24px;
    padding: 16px;
    border-top: 2px solid ${({ theme }) => theme.colors.third};
    border-bottom: 2px solid ${({ theme }) => theme.colors.third};
  }
  a {
    h3 {
      font-size: 24px;
      font-family: ${({ theme }) => theme.fontSizes.textBase};
      font-weight: 500;
      letter-spacing: 10px;
      color: ${({ theme }) => theme.colors.third};
    }
  }
  h4 {
    text-align: center;
    margin: 16px 0px;
  }
  position: fixed;
  top: 76px;
  left: -320px;
  width: 320px;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.whiteSecondary};
  z-index: 999;
  transition: transform 0.3s ease-in-out;
  transform: ${({ $isopen }) =>
    !$isopen ? 'translateX(0)' : 'translateX(100%)'};
`;
export default SliderNav;
