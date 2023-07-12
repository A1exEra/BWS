import Link from 'next/link';
import { useState, useEffect, useContext } from 'react';
import Image from 'next/image';
import { BWS_DATA } from '@/helpers/api-util';
import { StyledProducts } from './ProductsPage.styled';
import ProductCard from '../ProductCard/ProductCard';
import downarrow from '../../public/images/color-options/downarrow.svg';
import sort from '../../public/icons/groupsort.svg';
import Categories from './Categories/Categories';
import { StyledCategories } from './Categories/Categories.styled';
import React from 'react';
import { PriceRangeContext } from '../../helpers/PriceRangeContext';
import Pagination from './Pagination/Pagination';

const ProductsPage = (props: { products: BWS_DATA[] }) => {
  const { rangeValues, setRangeValues } = useContext<any>(PriceRangeContext);
  const { products } = props;
  const [sortedProducts, setSortedProducts] = useState(products);
  const [sortOrder, setSortOrder] = useState('desc');

  const [currentPage, setCurrentPage] = useState(1);
  const [filteredProducts, setFilteredProducts] = useState(products);
  const numPages = Math.ceil(filteredProducts.length / 9);

  useEffect(() => {
    setFilteredProducts(
      sortedProducts.filter(
        (p) => p.price >= rangeValues[0] && p.price < rangeValues[1]
      )
    );
  }, [sortedProducts, rangeValues]);

  // const onSortHandler = () => {
  //   if (sortOrder === 'desc') {
  //     setFilteredProducts(
  //       [...filteredProducts].sort((a, b) => (a.price > b.price ? -1 : 1))
  //     );

  //     setSortOrder('asc');
  //   } else {
  //     setFilteredProducts(
  //       [...filteredProducts].sort((a, b) => (a.price > b.price ? 1 : -1))
  //     );
  //     setSortOrder('desc');
  //   }
  // };
  const onSortHandler = () => {
    setSortOrder((prevSortOrder) => {
      const newSortOrder = prevSortOrder === 'desc' ? 'asc' : 'desc';

      setFilteredProducts((prevFilteredProducts) => {
        return [...prevFilteredProducts].sort((a, b) => {
          if (newSortOrder === 'desc') {
            return a.price > b.price ? -1 : 1;
          } else {
            return a.price > b.price ? 1 : -1;
          }
        });
      });

      return newSortOrder;
    });
  };

  const handlePageChange = (newPage: number) => {
    setCurrentPage(newPage);
  };

  const handleNextPage = () => {
    if (currentPage < numPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  useEffect(() => {
    if (currentPage > numPages) {
      setCurrentPage(numPages);
    }
  }, [numPages, currentPage]);

  return (
    <PriceRangeContext.Provider
      value={{
        rangeValues,
        setRangeValues,
        currentPage,
        setCurrentPage,
        sortedProducts,
        setSortedProducts,
        filteredProducts,
        setFilteredProducts,
      }}
    >
      <StyledProducts>
        <Categories products={filteredProducts} />

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
            {filteredProducts
              .filter(
                (p) => p.price >= rangeValues[0] && p.price < rangeValues[1]
              )
              .slice((currentPage - 1) * 9, currentPage * 9)
              .map((el: BWS_DATA) => (
                <ProductCard product={el} key={el.id} />
              ))}
          </div>

          <Pagination
            products={filteredProducts}
            handleNextPage={handleNextPage}
            handlePrevPage={handlePrevPage}
          />
        </div>
      </StyledProducts>
    </PriceRangeContext.Provider>
  );
};

export default ProductsPage;
