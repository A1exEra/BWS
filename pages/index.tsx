import Head from 'next/head';
import { BWS_DATA } from '@/helpers/api-util';
import styles from '@/styles/Home.module.scss';
import { getAllData } from '@/helpers/api-util';
import Link from 'next/link';

const Home = (props: { bws_data: BWS_DATA[] }) => {
  return (
    <>
      <Head>
        <title>BWS</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <ul>
          {props.bws_data.map((el: BWS_DATA) => (
            <li key={el.id}>{el.title}</li>
          ))}
        </ul>
        <Link href="/products">Products</Link>
      </main>
    </>
  );
};
export const getStaticProps = async () => {
  const items = await getAllData();
  console.log(items);
  return {
    props: {
      bws_data: items,
    },
    revalidate: 1800,
  };
};

export default Home;
