import { BWS_DATA, getAllData, getItemById } from '@/helpers/api-util';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import Button from '@/components/shared/Button/Button';
import { ProductId } from '../../styles/productId.styled';
import choice1 from '../../public/images/color-options/oval 1.png';
import choice2 from '../../public/images/color-options/oval 2.png';
import choice3 from '../../public/images/color-options/oval 3.png';
import choice4 from '../../public/images/color-options/oval 4.png';
import choice5 from '../../public/images/color-options/oval 5.png';
import downarrow from '../../public/images/color-options/downarrow.svg';
import heart from '../../components/icons/heart.svg';

const ProductDetailPage = (props: { product: BWS_DATA }) => {
  const { product } = props;
  const choices = [choice1, choice2, choice3, choice4, choice5];

  if (!product) {
    return (
      <>
        <div>
          <p>Loading...</p>
          <Link href="/products">Show All Products</Link>
        </div>
      </>
    );
  }

  return (
    <>
      <Head>
        <title>{product.title}</title>
        <meta name="description" content={product.description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ProductId bg="purple">
        <div className="imageContainer">
          <Image
            key={1}
            src={product.image}
            alt="img"
            width={640}
            height={457}
          />
        </div>
        <div className="productDetails">
          <h5>interlocking pavers</h5>
          <h2>{product.title}</h2>
          <h4>${product.price} per sqm</h4>
          <p>{product.description}</p>
          <div className="optionSelector">
            <div className="colors">
              <p>Colors</p>
              <div className="choices">
                {choices.map((choice, index) => (
                  <div key={index} className="choice">
                    <Image src={choice} alt="color choice" />
                  </div>
                ))}
              </div>
            </div>
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
              <img
                src={downarrow.src}
                alt="down arrow"
                className="small-arrow"
              />
            </div>
            <div className="singleInfo">
              <p>Units</p>
              <img
                src={downarrow.src}
                alt="down arrow"
                className="small-arrow"
              />
            </div>
          </div>
          <Link href="/products">Products</Link>
        </div>
      </ProductId>
    </>
  );
};
//
export const getStaticProps = async (ctx: any) => {
  const productId = ctx.params.productId;
  const product = await getItemById(productId);
  return {
    props: { product },
    revalidate: 60,
  };
};
export const getStaticPaths = async () => {
  // const events = await getAllEvents();
  const products = await getAllData();
  const paths = products.map((product) => ({
    params: { productId: product.id },
  }));
  return {
    paths: paths,
    fallback: 'blocking',
  };
};

export default ProductDetailPage;
