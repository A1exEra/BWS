import { useRef, useEffect, useState, useContext } from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import Image from 'next/image';
import { useCart } from '@/helpers/cartContext';
import { deleteIcon } from '@/public/icons/deleteIcon';
import arrow from '@/public/icons/ArrowIcon.svg';
import MainButton from '../shared/MainButton';
import { BWS_DATA } from '@/helpers/types';
import NotificationContext from '@/helpers/Notificationcontext';
type SliderProps = {
  iscartopen: boolean;
  setIsCartOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setQuantity: React.Dispatch<React.SetStateAction<number>>;
};
const Cart = ({ iscartopen, setIsCartOpen, setQuantity }: SliderProps) => {
  console.log({ iscartopen });
  const notificationCtx = useContext(NotificationContext);
  const { cartItems, removeFromCart, incrementItem, decrementItem, clearCart } =
    useCart();
  const [totalPrice, setTotalPrice] = useState<number>(0);
  const sliderRef = useRef<HTMLUListElement>(null);
  const divRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (iscartopen) {
        if (divRef.current?.contains(event.target as Node)) {
          setIsCartOpen(false);
        }
      }
    };
    document.addEventListener('mousedown', handleOutsideClick);

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, [iscartopen, setIsCartOpen]);
  ////
  useEffect(() => {
    const calculateTotalQuantity = () => {
      let totalPrice = 0;
      let quantity = 0;
      const totalQuantity = cartItems.forEach((curr) => {
        totalPrice += curr.totalItemPrice;
        quantity += curr.quantity;
      }, 0);
      setQuantity(quantity);
      setTotalPrice(+totalPrice.toFixed(2));
    };

    calculateTotalQuantity();
  }, [cartItems, setQuantity]);
  const handleRemoveItem = (productId: string) => {
    removeFromCart(productId);
    notificationCtx.setNotification({
      title: 'Items removed...',
      message: `All items were removed from shopping cart!`,
      status: 'error',
    });
  };

  const handleClearCart = () => {
    clearCart();
    notificationCtx.setNotification({
      title: 'Items removed...',
      message: `Your Shopping Cart Is Empty!`,
      status: 'error',
    });
  };
  const handleIncrementItem = (productId: string, productTitle: string) => {
    incrementItem(productId);
    notificationCtx.setNotification({
      title: 'Item added...',
      message: `${productTitle} is in your shopping cart`,
      status: 'success',
    });
  };

  const handleDecrementItem = (productId: string, productTitle: string) => {
    decrementItem(productId);
    notificationCtx.setNotification({
      title: 'Item removed...',
      message: `${productTitle} was removed from shopping cart!`,
      status: 'success',
    });
  };

  const handleCheckout = () => {
    console.log({ ...cartItems, totalPrice });
  };
  return (
    <SliderCartContainer $iscartopen={iscartopen}>
      <div className="background" ref={divRef}></div>
      <ul ref={sliderRef}>
        {cartItems.map((item) => (
          <li key={item.id}>
            <p>{item.title}</p>
            <div className="item_icons">
              <Image
                src={arrow}
                alt="arrow"
                onClick={() => handleDecrementItem(item.id, item.title)}
              />
              <p>{item.quantity}</p>
              <Image
                className="img2"
                src={arrow}
                alt="arrow"
                onClick={() => handleIncrementItem(item.id, item.title)}
              />
              <span onClick={() => handleRemoveItem(item.id)}>
                {deleteIcon}
              </span>
            </div>
          </li>
        ))}
      </ul>
      <h2>Total: {totalPrice}</h2>
      <div className="btn_container">
        <MainButton
          onClick={handleClearCart}
          label="Clear Cart"
          backgroundColor="#536758"></MainButton>
        <MainButton
          onClick={handleCheckout}
          backgroundColor="#2a2a2a"
          label="Checkout"></MainButton>
      </div>
    </SliderCartContainer>
  );
};
const SliderCartContainer = styled.nav<{ $iscartopen: boolean }>`
  .background {
    position: absolute;
    top: 0px;
    right: 320px;
    width: 100vw;
    height: 100vh;
    opacity: 0.8;
    z-index: 998;
    background-color: rgba(0, 0, 0, 0.5);
    display: ${({ $iscartopen }) => ($iscartopen ? 'block' : 'none')};
  }
  position: fixed;
  top: 76px;
  right: -320px;
  width: 320px;
  height: 100vh;
  background-color: ${({ theme }) => theme.colors.whiteSecondary};
  z-index: 999;
  padding: 16px;
  transition: transform 0.3s ease-in-out;
  transform: ${({ $iscartopen }) =>
    !$iscartopen ? 'translateX(0)' : 'translateX(-100%)'};

  h2 {
    ${({ theme }) => theme.mixins.primaryComponentTitle};
    color: ${({ theme }) => theme.colors.third};
    font-weight: bold;
    margin: 16px 0px;
    text
  }
  ul {
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: start;
    li {
      cursor: pointer;
      width: 100%;
      padding: 8px;
      margin-bottom: 8px;
      border:2px solid ${({ theme }) => theme.colors.grey};
      border-radius: 4px;
      background-color: ${({ theme }) => theme.colors.whitePrimary};
      &:hover{
        box-shadow: 0px 2px 12px 2px rgba(0, 0, 0, 0.2);
      }
      p{
        ${({ theme }) => theme.mixins.primaryComponentTitle};
        color: ${({ theme }) => theme.colors.third};
        font-weight: bold;
      }
      .item_icons {
        display: flex;
        flex-direction: row;
        justify-content: start;
        gap: 16px;
        align-items: center;
        & .img2 {
          transform: rotate(180deg);
        }
      }
    }
  }
  .btn_container{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    gap: 16px;
    align-items: center;
  }
`;
export default Cart;
