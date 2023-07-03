import Link from 'next/link';
import { useState } from 'react';
import Image from 'next/image';
import { BWS_DATA } from '@/helpers/api-util';
import { StyledProducts } from './ProductsPage.styled';
import ProductCard from '../ProductCard/ProductCard';
import downarrow from '../../public/images/color-options/downarrow.svg';
import sort from '../../public/icons/groupsort.svg';
import Categories from './Categories/Categories';
import { StyledCategories } from './Categories/Categories.styled';
import React from 'react';
import PriceRangeContext from '../../helpers/PriceRangeContext';

const ProductsPage = (props: { products: BWS_DATA[] }) => {
  const { products } = props;
  const [sortedProducts, setSortedProducts] = useState(products);
  const [sortOrder, setSortOrder] = useState('desc');
  const [rangeValues, setRangeValues] = useState([50, 80]);
  const onSortHandler = () => {
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
    <PriceRangeContext.Provider value={{ rangeValues, setRangeValues }}>
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
            {sortedProducts
              .slice(0, 9)
              .map(
                (el: BWS_DATA) =>
                  el.price >= rangeValues[0] &&
                  el.price < rangeValues[1] && <ProductCard product={el} />
              )}
          </div>
          <h2>Pagination</h2>
        </div>
      </StyledProducts>
    </PriceRangeContext.Provider>
  );
};

export default ProductsPage;
