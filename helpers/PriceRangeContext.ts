import React from 'react';

type RangeContextType = {
  rangeValues: number[];
  setRangeValues: React.Dispatch<React.SetStateAction<number[]>>;
};

const PriceRangeContext = React.createContext<RangeContextType | undefined>(
  undefined
);

export default PriceRangeContext;
