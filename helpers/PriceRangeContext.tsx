import React, { useState } from 'react';
<<<<<<< HEAD
import { BWS_DATA } from './api-util';
=======
import { BWS_DATA } from './types';
>>>>>>> 5c13c918010142a61aaec6fad99d8a7878feffdf

type RangeContextType = {
  rangeValues: number[];
  setRangeValues: React.Dispatch<React.SetStateAction<number[]>>;
  currentPage: number;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
  sortedProducts: BWS_DATA[];
  setSortedProducts: React.Dispatch<React.SetStateAction<BWS_DATA[]>>;
  handlePageChange?: (page: number) => void;
  filteredProducts: any[];
  setFilteredProducts: React.Dispatch<React.SetStateAction<any[]>>;
};
type ProviderProps = {
  children: React.ReactNode;
};

const PriceRangeContext = React.createContext<RangeContextType | undefined>(
  undefined
);
const TheAppProvider: React.FC<ProviderProps> = ({ children }) => {
  const [rangeValues, setRangeValues] = useState<number[]>([0, 100]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [sortedProducts, setSortedProducts] = useState<BWS_DATA[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<BWS_DATA[]>([]);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <PriceRangeContext.Provider
      value={{
        rangeValues,
        setRangeValues,
        currentPage,
        setCurrentPage,
        sortedProducts,
        setSortedProducts,
        handlePageChange,
        filteredProducts,
        setFilteredProducts,
<<<<<<< HEAD
      }}
    >
=======
      }}>
>>>>>>> 5c13c918010142a61aaec6fad99d8a7878feffdf
      {children}
    </PriceRangeContext.Provider>
  );
};

export { TheAppProvider, PriceRangeContext };
