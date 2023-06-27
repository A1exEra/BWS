import { BWS_DATA, getAllData } from '@/helpers/api-util';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';

const AllProductsPage = (props: { products: BWS_DATA[] }) => {
  const router = useRouter();
  const { products } = props;
  return (
    <>
      <Head>
        <title>BWS - Products</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>This is the AllProductsPage page</h1>
      <ul>
        {products.map((el: BWS_DATA) => (
          <li key={el.id}>
            <Link href={`/products/${el.id}`}>
              <h3>{el.title}</h3>
            </Link>
            <p>{el.description}</p>
            <Image
              src={`${el.image}`}
              alt={el.title}
              width={304}
              height={320}
            />
          </li>
        ))}
      </ul>
      <Link href="/">Home</Link>
    </>
  );
};

export default AllProductsPage;

export const getStaticProps = async () => {
  const items = await getAllData();
  return {
    props: {
      products: items,
    },
    revalidate: 1800,
  };
};
