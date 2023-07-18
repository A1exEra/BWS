import React, { useState, useEffect, useRef, useContext } from 'react';
import { StyledLabel, StyledCheckbox, CheckboxIcon } from './Categories.styled';
import { PriceRangeContext } from '@/helpers/PriceRangeContext';
interface LabelsProps {
  selectedC?: any[];
  selectedProducts?: any[];
  labels: any[];
  handleChange: any;
}
const Labels = ({ id, labels, selectedLabels, handleCheckboxChange }) => {
  const {
    sortedProducts,
    setSortedProducts,
    setFilteredProducts,
    selectedCategories,
  } = useContext(PriceRangeContext);
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

    handleCheckboxChange(updatedLabels);
  };

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
