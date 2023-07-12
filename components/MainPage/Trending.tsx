import { styled } from 'styled-components';
import MainButton from '../shared/MainButton';
import ProductCard from '../ProductCard/ProductCard';
import { useState } from 'react';
import { BWS_DATA } from '@/helpers/types';
import React from 'react';
interface StyledTrendingProps {
  isOpen: boolean;
}
const Trending = (props: { products: BWS_DATA[] }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const trendingProducts = props.products.filter(
    (product) => product.isTrending
  );
  const showTrendingHandler = () => {
    setIsOpen((prev) => !prev);
  };
  return (
    <StyledTrending $isopen={isOpen}>
      <div className="textContainer">
        <h3>TRENDING PRODUCTS</h3>
        <MainButton
          className="MainButton"
          label="See All"
          onClick={showTrendingHandler}
          backgroundColor="#536758"></MainButton>
      </div>
      <div className="cardsContainer">
        {trendingProducts.map((product: BWS_DATA) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </StyledTrending>
  );
};
const StyledTrending = styled.div<{ $isopen: boolean }>`
  background-color: ${({ theme }) => theme.colors.primary};
  padding: 100px 64px;
  .textContainer {
    display: flex;
    justify-content: space-between;
    h3 {
      ${({ theme }) => theme.mixins.primaryHeroRegular}
      color: ${({ theme }) => theme.colors.whitePrimary};
    }
  }
  .cardsContainer {
    max-height: ${({ $isopen }) => ($isopen ? 'none' : '450px')};
    max-height: ${({ $isopen }) => ($isopen ? 'none' : '450px')};

    overflow: hidden;
    transition: max-height 0.3s ease;
    display: flex;
    flex-wrap: wrap;
    gap: 32px;
    justify-content: space-around;
  }
  @media (max-width: 768px) {
    padding: 100px 8px;
  }
`;
export default Trending;
