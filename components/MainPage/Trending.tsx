import { styled } from 'styled-components';
import MainButton from '../shared/MainButton';
import ProductCard from '../ProductCard/ProductCard';
import { useState } from 'react';
import { BWS_DATA } from '@/helpers/api-util';
interface StyledTrendingProps {
  isOpen: boolean;
}
const Trending = (props: { products: BWS_DATA[] }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [displayCount, setDisplayCount] = useState<number>(4);
  const trendingProducts = props.products.filter((product) => {
    product.isTrending;
  });
  const ShowTrendingHandler = () => {
    setDisplayCount(trendingProducts.length);
    setIsOpen((prev) => !prev);
  };
  console.log(isOpen);
  return (
    <StyledTrending isOpen={isOpen}>
      <div className="textContainer">
        <h3>TRENDING PRODUCTS</h3>
        <MainButton
          className="MainButton"
          label="See All"
          onClick={ShowTrendingHandler}
          backgroundColor="#536758"></MainButton>
      </div>
      <div className="cardsContainer">
        <ProductCard products={props.products} />
      </div>
    </StyledTrending>
  );
};

const StyledTrending = styled.div<StyledTrendingProps>`
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
    max-height: ${({ isOpen }) => (isOpen ? 'none' : '450px')};
    overflow: hidden;
    transition: max-height 0.3s ease;
  }
  @media (max-width: 768px) {
    padding: 100px 8px;
  }
`;
export default Trending;
