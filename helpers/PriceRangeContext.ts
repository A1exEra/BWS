import React from 'react';
import { BWS_DATA } from './api-util';

type RangeContextType = {
  rangeValues: number[];
  setRangeValues: React.Dispatch<React.SetStateAction<number[]>>;
  currentPage: number;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
  sortedProducts: any[];
  setSortedProducts: React.Dispatch<React.SetStateAction<BWS_DATA[]>>;
  handlePageChange?: (page: number) => void;
  filteredProducts: any[];
  setFilteredProducts: React.Dispatch<React.SetStateAction<any[]>>;
};

const PriceRangeContext = React.createContext<RangeContextType | undefined>(
  undefined
);

export default PriceRangeContext;
