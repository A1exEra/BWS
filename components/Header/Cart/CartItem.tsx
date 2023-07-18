import { useState } from 'react';
import { styled } from 'styled-components';
import Image from 'next/image';
import { deleteIcon } from '@/public/icons/deleteIcon';
interface CartItemProps {
  cartItems: any[];
  remove: (productId: string) => void;
  increment: (id: string, title: string) => void;
  decrement: (id: string, title: string) => void;
}
const CartItem = (props: CartItemProps) => {
  const [totalItemPrice, setTotalItemPrice] = useState<number>(0);
  return (
    <StyledcartItem>
      {props.cartItems.map((item) => (
        <li key={item.id}>
          <Image src={item.image} width={80} height={120} alt={item.title} />
          <div className="text_container">
            <div className="text_top">
              <div className="left">
                <h4>{item.title}</h4>
                <p>Color: {item.chosenColor}</p>
              </div>
              <span onClick={() => props.remove(item.id)}>{deleteIcon}</span>
            </div>
            <div className="item_icons">
              <h4>$ {+(totalItemPrice + item.price).toFixed(2)}</h4>
              <div className="qnty">
                <h4
                  onClick={() => {
                    props.decrement(item.id, item.title);
                    setTotalItemPrice((prev) => prev - item.price);
                  }}>
                  -
                </h4>
                <p>{item.quantity}</p>
                <h4
                  onClick={() => {
                    props.increment(item.id, item.title);
                    setTotalItemPrice((prev) => prev + item.price);
                  }}>
                  +
                </h4>
              </div>
            </div>
          </div>
        </li>
      ))}
    </StyledcartItem>
  );
};

const StyledcartItem = styled.ul`
  list-style: none;
  margin: 16px 0px;
  li {
    cursor: pointer;
    width: 100%;
    margin-bottom: 8px;
    display: flex;
    flex-direction: row;
    border-radius: 8px;
    border: 1px solid #ccc;
    background-color: ${({ theme }) => theme.colors.whitePrimary};
    &:hover {
      box-shadow: 0px 2px 12px 2px rgba(0, 0, 0, 0.2);
    }
    img {
      border-radius: 8px 0 0 8px;
    }
    .text_container {
      margin: 8px;
      height: 102px;
      width: 100%;
      display: flex;
      flex-direction: column;
      justify-content: space-between;

      .text_top {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
      }
      .item_icons {
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        gap: 16px;
        align-items: center;
        .qnty {
          display: flex;
          flex-direction: row;
          justify-content: space-evenly;
          gap: 8px;
          border: 1px solid ${({ theme }) => theme.colors.grey};
          border-radius: 8px;
          padding: 4px 8px;
        }
      }
      h4 {
        ${({ theme }) => theme.mixins.primaryProductCard};
        color: ${({ theme }) => theme.colors.third};
        font-weight: bold;
      }
      p {
        ${({ theme }) => theme.mixins.primaryProductCard};
        color: ${({ theme }) => theme.colors.grey};
        font-weight: bold;
      }
    }
  }
`;
export default CartItem;
