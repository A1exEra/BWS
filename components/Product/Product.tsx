import Link from 'next/link';
import Image from 'next/image';
import { BWS_DATA } from '@/helpers/types';
import Button from '@/components/shared/Button/Button';
import ProductId from './Product.styled';
import downarrow from '../../public/images/color-options/downarrow.svg';
import heart from '../../public/icons/heart.svg';
import ColorPicker from '../shared/Colors/ColorPicker';
// import { choices } from './choices';
const Product = (props: { product: BWS_DATA }) => {
  const { product } = props;

  // const choices = [choice1, choice2, choice3, choice4, choice5];
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
          {/* <ColorPicker choices={choices} /> */}
          <ColorPicker />

          <div className="border">
            <p>Border Shortways</p>
            <Image src={downarrow} alt="down arrow" />
          </div>
        </div>
        <div className="buyComponent">
          <Button />
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
