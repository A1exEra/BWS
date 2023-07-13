import Link from 'next/link';
import { useState, useContext, useEffect } from 'react';
import Image from 'next/image';
import { StyledProductCard } from './ProductCard.styled';
import heart from '../../public/icons/heart.svg';
import cart from '@/public/icons/mdi-light_cart.svg';
import { BWS_DATA } from '../../helpers/types';
import { useCart } from '@/helpers/cartContext';
import NotificationContext from '@/helpers/Notificationcontext';

interface CartItem extends BWS_DATA {
  quantity: number;
  totalItemPrice: number;
}
const ProductCard = (props: { product: BWS_DATA }) => {
  const notificationCtx = useContext(NotificationContext);
  const { addToCart } = useCart();
  const product = props.product;
  const onAddItemHandler = () => {
    addToCart(product);
    //////////////
    notificationCtx.setNotification({
      title: 'Item Added...',
      message: `${product.title} is in your shopping cart!`,
      status: 'success',
    });
    /////////////
  };
  return (
    <StyledProductCard>
      <div className="product">
        <Link href={`/products/${product.id}`}>
          {/* <p>{el.description}</p> */}
          <Image
            src={`${product.image}`}
            alt={product.title}
            width={304}
            height={320}
          />
          <h3>{product.title}</h3>
        </Link>
        <div className="priceContainer">
          <p>${product.price}</p>
          <div className="heart">
            {/* <Image src={heart} alt="heart" /> */}
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="mdi-light:heart">
                <path
                  id="Vector"
                  d="M4.24355 12.2519C3.8152 11.8235 3.4834 11.3084 3.27042 10.7412C3.05743 10.174 2.96817 9.56783 3.00863 8.96332C3.04908 8.35882 3.21831 7.76995 3.50498 7.2362C3.79164 6.70245 4.18911 6.23616 4.67074 5.8686C5.15236 5.50104 5.707 5.24069 6.29748 5.10503C6.88795 4.96936 7.5006 4.96151 8.09436 5.082C8.68812 5.20249 9.24925 5.44854 9.74013 5.80364C10.231 6.15874 10.6403 6.6147 10.9405 7.14092H12.0585C12.3588 6.6147 12.7681 6.15874 13.259 5.80364C13.7498 5.44854 14.311 5.20249 14.9047 5.082C15.4985 4.96151 16.1111 4.96936 16.7016 5.10503C17.2921 5.24069 17.8467 5.50104 18.3284 5.8686C18.81 6.23616 19.2074 6.70245 19.4941 7.2362C19.7808 7.76995 19.95 8.35882 19.9905 8.96332C20.0309 9.56783 19.9417 10.174 19.7287 10.7412C19.5157 11.3084 19.1839 11.8235 18.7555 12.2519L11.4995 19.5099L4.24355 12.2529V12.2519ZM19.4615 12.9619C19.9737 12.4497 20.3743 11.8371 20.6382 11.1626C20.9021 10.4881 21.0236 9.76629 20.995 9.04255C20.9664 8.31882 20.7884 7.60882 20.4721 6.95723C20.1558 6.30563 19.7081 5.72653 19.1572 5.25634C18.6062 4.78615 17.964 4.43505 17.2708 4.22512C16.5776 4.01518 15.8484 3.95096 15.1292 4.03648C14.4099 4.12201 13.7162 4.35543 13.0915 4.72208C12.4669 5.08872 11.9249 5.58065 11.4995 6.16692C11.0742 5.58065 10.5322 5.08872 9.90756 4.72208C9.28291 4.35543 8.58915 4.12201 7.86992 4.03648C7.15069 3.95096 6.42154 4.01518 5.72833 4.22512C5.03512 4.43505 4.39284 4.78615 3.8419 5.25634C3.29096 5.72653 2.84327 6.30563 2.52699 6.95723C2.21071 7.60882 2.03268 8.31882 2.00409 9.04255C1.9755 9.76629 2.09698 10.4881 2.36089 11.1626C2.62479 11.8371 3.02541 12.4497 3.53755 12.9619L11.4995 20.9229L19.4615 12.9629V12.9619Z"
                  fill={product.isLiked ? 'red' : '#939393'}
                />
              </g>
            </svg>
          </div>
          <div className="cart" onClick={onAddItemHandler}>
            <Image src={cart} alt="cart" />
          </div>
        </div>
      </div>
    </StyledProductCard>
  );
};

export default ProductCard;
