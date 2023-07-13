// import { categories } from './categoryList';
import React, { useState, useEffect, useRef, useContext } from 'react';
import { StyledLabel, StyledCheckbox, CheckboxIcon } from './Categories.styled';
import { PriceRangeContext } from '@/helpers/PriceRangeContext';
interface LabelsProps {
  // selectedCategory: string;
  selectedC?: any[];
  selectedProducts?: any[];
  labels: any[];
  handleChange: any;
}
const Labels = ({
  // selectedCategory,
  selectedC,
  selectedProducts,
  labels,
  handleChange,
}: LabelsProps) => {
  const { sortedProducts, setSortedProducts, setFilteredProducts } =
    useContext(PriceRangeContext);
  const labelsRef = useRef();
  const [isOverflowing, setIsOverflowing] = useState<boolean>(false);

  useEffect(() => {
    const container: any = labelsRef.current;
    if (container.scrollHeight > container.clientHeight) {
      setIsOverflowing(true);
    }
  }, []);

  useEffect(() => {
    setTimeout(() => {
      if (selectedProducts.length > 0) {
        setSortedProducts(selectedProducts);
      }
    }, 1);
  }, [selectedProducts]);

  return (
    <div
      className="categories"
      ref={labelsRef}
      style={!isOverflowing ? { overflowY: 'hidden' } : {}}>
      {labels.map((label) => (
        <StyledLabel
          key={label.id}
          htmlFor={label.title}
          className="category"
          // $isSelected={selectedCategory === label.title}
          $isSelected={selectedC.includes(label.title)}
          onClick={() => handleChange(label.title)}>
          <StyledCheckbox type="checkbox" id={label.title} />
          <CheckboxIcon
            //  $isSelected={selectedCategory === label.title}
            $isSelected={selectedC.includes(label.title)}
          />
          {label.title
            .split(' ')
            .map((word: string) => word[0].toUpperCase() + word.slice(1))
            .join(' ')}
        </StyledLabel>
      ))}
    </div>
  );
};

export default Labels;
