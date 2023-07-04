import React from 'react';

type RangeContextType = {
  rangeValues: number[];
  setRangeValues: React.Dispatch<React.SetStateAction<number[]>>;
  currentPage: number;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
  sortedProducts: any[];
  setSortedProducts: React.Dispatch<React.SetStateAction<object[]>>;
  handlePageChange?: (page: number) => void;
  filterdProducts: any[];
  setFilterdProducts: React.Dispatch<React.SetStateAction<any[]>>;
};

const PriceRangeContext = React.createContext<RangeContextType | undefined>(
  undefined
);

export default PriceRangeContext;
