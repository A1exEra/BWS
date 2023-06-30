import Link from 'next/link';
import Image from 'next/image';
import { BWS_DATA } from '@/helpers/api-util';
import { StyledProducts } from './ProductsPage.styled';
import ProductCard from '../ProductCard/ProductCard';
import downarrow from '../../public/images/color-options/downarrow.svg';

const ProductsPage = (props: { products: BWS_DATA[] }) => {
  const { products } = props;
  return (
    <StyledProducts>
      <div className="productCategories">
        <h1>Categories section</h1>
      </div>

      <div className="productsList">
        <div className="productSorter">
          <div className="sort">
            <p>Sort By</p>
            <button>Price High-Low</button>
            <Image src={downarrow} alt="" />
          </div>
        </div>

        <ProductCard products={products} />

        {/* <div className="products">
          {products.map((el: BWS_DATA) => (
            <div key={el.id} className="product">
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
            </div>
          ))}
        </div> */}
      </div>
    </StyledProducts>
  );
};

export default ProductsPage;
