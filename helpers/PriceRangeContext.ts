import React from 'react';

type RangeContextType = {
  rangeValues: number[];
  setRangeValues: React.Dispatch<React.SetStateAction<number[]>>;
  currentPage: number;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
  sortedProducts: any[];
  setSortedProducts: React.Dispatch<React.SetStateAction<object[]>>;
  handlePageChange?: (page: number) => void;
};

const PriceRangeContext = React.createContext<RangeContextType | undefined>(
  undefined
);

export default PriceRangeContext;
