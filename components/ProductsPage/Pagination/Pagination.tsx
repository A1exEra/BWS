import Image from 'next/image';
import { useContext } from 'react';
import { PriceRangeContext } from '../../../helpers/PriceRangeContext';
import arrow from '../../../public/icons/arrow-right.svg';
import { StyledPagination } from './Pagination.styled';
import { BWS_DATA } from '@/helpers/types';

interface PaginationProps {
  products: BWS_DATA[];
  handleNextPage: () => void;
  handlePrevPage: () => void;
}
const Pagination = ({
  products,
  handleNextPage,
  handlePrevPage,
}: PaginationProps) => {
  const { currentPage, setCurrentPage } = useContext<any>(PriceRangeContext);

  const handlePageClick = (e: any) => {
    setCurrentPage(parseInt(e.target.innerText));
  };

  return (
    <StyledPagination>
      <div className="arrowLeft" onClick={handlePrevPage}>
        <Image src={arrow} alt="go to previous page" />
      </div>
      <div className="numbers">
        {Array.from({ length: Math.ceil(products.length / 9) }, (_, i) => (
          <p
            key={i}
            className={currentPage === i + 1 ? 'active' : ''}
            onClick={handlePageClick}
          >
            {i + 1}
          </p>
        ))}
      </div>
      <div className="arrowRight" onClick={handleNextPage}>
        <Image src={arrow} alt="go to previous page" />
      </div>
    </StyledPagination>
  );
};

export default Pagination;
