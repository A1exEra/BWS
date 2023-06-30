import { BWS_DATA } from '@/helpers/api-util';
import Link from 'next/link';
import Image from 'next/image';
import { StyledProductCard } from './ProductCard.styled';
import heart from '../../components/icons/heart.svg';
import cart from '../../public/images/mdi-light_cart.svg';

const ProductCard = (props: any) => {
  const products = props.products;

  return (
    <StyledProductCard>
      {products.map((el: BWS_DATA) => (
        <Link key={el.id} href={`/products/${el.id}`}>
          <div className="product">
            {/* <p>{el.description}</p> */}

            <Image
              src={`${el.image}`}
              alt={el.title}
              width={304}
              height={320}
            />
            <h3>{el.title}</h3>
            <div className="priceContainer">
              <p>${el.price}</p>
              <div className="heart">
                <Image src={heart} alt="heart" />
              </div>
              <div className="cart">
                <Image src={cart} alt="cart" />
              </div>
            </div>
          </div>
        </Link>
      ))}
    </StyledProductCard>
  );
};

export default ProductCard;
