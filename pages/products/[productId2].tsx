import { BWS_DATA, getAllData, getItemById } from '@/helpers/api-util';
import Head from 'next/head';
import Link from 'next/link';
import styles from './productId.module.scss';

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
      {/* <h2>ProductDetailPage</h2> */}

      <section className={styles.productSection}>
        <div className={styles.imageContainer}></div>
        <div className={styles.productDetails}>
          <h5>interlocking pavers</h5>
          <h3>{product.title}</h3>
          <p>{product.description}</p>
          <h4>{product.price}</h4>
          <Link href="/products">Products</Link>
        </div>
      </section>
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
