import { BWS_DATA } from '@/helpers/api-util';
import Link from 'next/link';
import Image from 'next/image';
import { StyledProductCard } from './ProductCard.styled';
import heart from '../../components/icons/heart.svg';
import cart from '../../public/images/mdi-light_cart.svg';
import { useEffect } from 'react';

const ProductCard = (props: any) => {
  const product = props.product;

  return (
    <StyledProductCard>
      <Link href={`/products/${product.id}`}>
        <div className="product">
          {/* <p>{el.description}</p> */}

          <Image
            src={`${product.image}`}
            alt={product.title}
            width={304}
            height={320}
          />
          <h3>{product.title}</h3>
          <div className="priceContainer">
            <p>${product.price}</p>
            <div className="heart">
              <Image src={heart} alt="heart" />
            </div>
            <div className="cart">
              <Image src={cart} alt="cart" />
            </div>
          </div>
        </div>
      </Link>
    </StyledProductCard>
  );
};

export default ProductCard;
