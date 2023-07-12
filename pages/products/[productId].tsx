import { BWS_DATA } from '@/helpers/types';
import { getAllData, getItemById } from '@/helpers/api-util';
import Head from 'next/head';
import Link from 'next/link';
import Product from '../../components/Product/Product';
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
      <Product product={product} />
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
