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
const Labels = ({ id, labels, selectedLabels, handleCheckboxChange }) => {
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

  const onLabelClick = (label: string) => {
    let updatedLabels;

    if (selectedLabels.includes(label)) {
      updatedLabels = selectedLabels.filter((l) => l !== label);
    } else {
      updatedLabels = [...selectedLabels, label];
    }

    console.log(`[${id}] Before handleCheckboxChange:`, selectedLabels);
    handleCheckboxChange(updatedLabels);
    console.log(`[${id}] After handleCheckboxChange:`, updatedLabels);
  };
  useEffect(() => {
    console.log(`[${id}] selectedLabels:`, selectedLabels);
  }, [selectedLabels]);

  console.log('[Labels] Render with selectedLabels:', selectedLabels);

  return (
    <div
      className="categories"
      ref={labelsRef}
      style={!isOverflowing ? { overflowY: 'hidden' } : {}}
    >
      {labels.map((label) => (
        <StyledLabel
          key={label.id}
          htmlFor={label.title}
          className="category"
          $isSelected={selectedLabels.includes(label.title)}
          onClick={() => onLabelClick(label.title)}
        >
          <StyledCheckbox
            type="checkbox"
            checked={selectedLabels.includes(label)}
            onChange={() => handleCheckboxChange(label)}
          />
          <CheckboxIcon $isSelected={selectedLabels.includes(label.title)} />
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
