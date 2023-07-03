import { useState } from 'react';
import Image from 'next/image';
import { BWS_DATA } from '@/helpers/api-util';
import { StyledProducts } from './ProductsPage.styled';
import ProductCard from '../ProductCard/ProductCard';
import downarrow from '../../public/images/color-options/downarrow.svg';
import sort from '@/public/icons/groupsort.svg';
import Categories from './Categories/Categories';

const ProductsPage = (props: { products: BWS_DATA[] }) => {
  const { products } = props;

  const [sortedProducts, setSortedProducts] = useState(products);
  const [sortOrder, setSortOrder] = useState('desc');

  const onSortHandler = () => {
    // console.log(sortedProducts.slice(0, 9));
    if (sortOrder === 'desc') {
      setSortedProducts(
        [...sortedProducts].sort((a, b) => (a.price > b.price ? -1 : 1))
      );
      setSortOrder('asc');
    } else {
      setSortedProducts(
        [...sortedProducts].sort((a, b) => (a.price > b.price ? 1 : -1))
      );
      setSortOrder('desc');
    }
  };

  return (
    <StyledProducts>
      <Categories products={sortedProducts.slice(0, 9)} />

      <div className="productsList">
        <div className="productSorter">
          <div className="sort">
            <p>Sort By</p>
            <div className="sortButton" onClick={onSortHandler}>
              <button>Price High-Low</button>
              <Image src={downarrow} alt="downarrow" />
            </div>
          </div>
          <div className="groupSort">
            <Image src={sort} alt="uparrow" />
          </div>
        </div>
        <div className="products">
          {sortedProducts.map((el: BWS_DATA) => (
            <ProductCard product={el} />
          ))}
        </div>
      </div>
    </StyledProducts>
  );
};

export default ProductsPage;
