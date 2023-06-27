import { BWS_DATA, getAllData, getItemById } from '@/helpers/api-util';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';

const ProductDetailPage = (props: { product: BWS_DATA }) => {
  const { product } = props;

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
      <Image src={product.image} alt="img" width={304} height={320} />
      <h2>ProductDetailPage</h2>
      <h3>{product.title}</h3>
      <p>{product.description}</p>
      <h4>{product.price}</h4>
      <Link href="/products">Products</Link>
    </>
  );
};
//
export const getStaticProps = async (ctx: any) => {
  const productId = ctx.params.productId;
  const product = await getItemById(productId);
  return {
    props: { product },
    revalidate: 60, //seconds
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
//
export default ProductDetailPage;
