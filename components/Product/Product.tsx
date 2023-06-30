import Link from 'next/link';
import Image from 'next/image';
import { BWS_DATA } from '@/helpers/api-util';
import Button from '@/components/shared/Button/Button';
import ProductId from './Product.styled';
import choice1 from '../../public/images/color-options/oval 1.png';
import choice2 from '../../public/images/color-options/oval 2.png';
import choice3 from '../../public/images/color-options/oval 3.png';
import choice4 from '../../public/images/color-options/oval 4.png';
import choice5 from '../../public/images/color-options/oval 5.png';
import downarrow from '../../public/images/color-options/downarrow.svg';
import heart from '../../components/icons/heart.svg';
import ColorPicker from '../shared/Colors/ColorPicker';
import { choices } from './choices';
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
          <ColorPicker choices={choices} />

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
