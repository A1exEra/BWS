import Link from 'next/link';
import Image from 'next/image';
import { BWS_DATA } from '@/helpers/types';
import ProductId from './Product.styled';
import downarrow from '../../public/images/color-options/downarrow.svg';
import heart from '../../public/icons/heart.svg';
import { useCart } from '@/helpers/cartContext';
import NotificationContext from '@/helpers/Notificationcontext';
import { useContext, useState } from 'react';
import ColorChoises from '../shared/Colors/ColorChoises';

const Product = (props: { product: BWS_DATA }) => {
  const { product } = props;
  const [chosenColor, setColor] = useState<string | null>(null);
  const notificationCtx = useContext(NotificationContext);
  const { addToCart } = useCart();
  const onAddItemHandler = () => {
    addToCart(product, chosenColor);
    //////////////
    notificationCtx.setNotification({
      title: 'Item Added...',
      message: `${product.title} is in your shopping cart!`,
      status: 'success',
    });
  };
  return (
    <ProductId bg="purple">
      <div className="imageContainer">
        <img src={product.image} alt="img" className="image" />
      </div>
      <div className="productDetails">
        <h5>interlocking pavers</h5>
        <h2>{product.title}</h2>
        <h4>${product.price} per sqm</h4>
        <p>{product.description}</p>
        <div className="optionSelector">
          <ColorChoises setColor={setColor} />
          <div className="border">
            <p>Border Shortways</p>
            <Image src={downarrow} alt="down arrow" />
          </div>
        </div>
        <div className="buyComponent">
          <button className="btn" onClick={onAddItemHandler}>
            Add To Cart
          </button>
          <div className="wish">
            <Image src={heart} alt="heart" />
          </div>
        </div>
        <div className="additionalInfo">
          <div className="singleInfo">
            <p>Additional information</p>
            <img src={downarrow.src} alt="down arrow" className="small-arrow" />
          </div>
          <div className="singleInfo">
            <p>Units</p>
            <img src={downarrow.src} alt="down arrow" className="small-arrow" />
          </div>
        </div>
        <Link href="/products">Products</Link>
      </div>
    </ProductId>
  );
};

export default Product;
