import { useRef, useEffect, useState, useContext } from 'react';
import styled from 'styled-components';
import { useCart } from '@/helpers/cartContext';
import MainButton from '../../shared/MainButton';
import NotificationContext from '@/helpers/Notificationcontext';
import CartItem from './CartItem';
type CartProps = {
  iscartopen: boolean;
  setIsCartOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setQuantity: React.Dispatch<React.SetStateAction<number>>;
};
const Cart = ({ iscartopen, setIsCartOpen, setQuantity }: CartProps) => {
  const notificationCtx = useContext(NotificationContext);
  const { cartItems, removeFromCart, incrementItem, decrementItem, clearCart } =
    useCart();
  const [totalPrice, setTotalPrice] = useState<number>(0);
  const [totalItems, setTotalItems] = useState<number>(0);
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
      cartItems.forEach((curr) => {
        totalPrice += curr.totalItemPrice;
        quantity += curr.quantity;
      }, 0);
      setQuantity(quantity);
      setTotalItems(quantity);
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
    console.log('Item was purchased!!! - ', {
      ...cartItems,
      totalItems,
      totalPrice,
    });
  };
  return (
    <SliderCartContainer $iscartopen={iscartopen}>
      <div className="background" ref={divRef}></div>
      <h1>Shopping Cart</h1>
      <CartItem
        cartItems={cartItems}
        increment={handleIncrementItem}
        decrement={handleDecrementItem}
        remove={handleRemoveItem}
      />
      <div className="subtotal">
        <div className="left">
          <h2>Subtotal</h2>
          <p>
            ({totalItems} {totalItems === 1 ? 'item' : 'items'})
          </p>
        </div>
        <h2>$ {totalPrice}</h2>
      </div>
      <div className="btn_container">
        <MainButton
          onClick={handleClearCart}
          label="Clear Cart"
          className="btn"
          backgroundColor="#536758"></MainButton>
        <MainButton
          onClick={handleCheckout}
          backgroundColor="#2a2a2a"
          className="btn"
          label="Checkout"></MainButton>
        <p>Psst, get it now before it sells out.</p>
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
  h1 {
    ${({ theme }) => theme.mixins.primaryHeroRegular};
    color: ${({ theme }) => theme.colors.third};
    font-weight: bold;
    margin: 16px 0px;
    text-align: center;
    padding-bottom: 16px;
    border-bottom: 1px solid ${({ theme }) => theme.colors.third};
  }
  position: absolute;
  top: 76px;
  right: -320px;
  width: 320px;
  height: 100vh;
  background-color: ${({ theme }) => theme.colors.whiteSecondary};
  z-index: 9;
  padding: 16px;
  transition: transform 0.3s ease-in-out;
  transform: ${({ $iscartopen }) =>
    !$iscartopen ? 'translateX(0)' : 'translateX(-100%)'};

  h2 {
    ${({ theme }) => theme.mixins.primaryComponentTitle};
    color: ${({ theme }) => theme.colors.third};
    font-weight: bold;
    margin: 16px 0px;
  }
  p {
    ${({ theme }) => theme.mixins.primaryProductCard};
    color: ${({ theme }) => theme.colors.grey};
  }
  .btn_container {
    display: flex;
    flex-direction: column;
    gap: 16px;
    .btn {
      width: 100%;
    }
    p {
      text-align: center;
    }
  }
  .subtotal {
    .left {
      display: flex;
      flex-direction: row;
      gap: 8px;
      align-items: center;
    }
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
`;
export default Cart;
