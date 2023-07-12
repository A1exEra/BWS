// import { categories } from './categoryList';
import React, { useState, useEffect, useRef } from 'react';
import { StyledLabel, StyledCheckbox, CheckboxIcon } from './Categories.styled';
interface LabelsProps {
  selectedCategory: string;
  labels: any[];
  handleChange: any;
}
const Labels = ({ selectedCategory, labels, handleChange }: LabelsProps) => {
  const labelsRef = useRef();
  const [isOverflowing, setIsOverflowing] = useState<boolean>(false);
  useEffect(() => {
    const container: any = labelsRef.current;
    console.log(isOverflowing);
    if (container.scrollHeight < container.clientHeight) {
      setIsOverflowing(true);
    }
  }, []);

  useEffect(() => {
    console.log(isOverflowing);
  }, [isOverflowing]);

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
          $isSelected={selectedCategory === label.title}
          onClick={() => handleChange(label.title)}
        >
          <StyledCheckbox type="checkbox" id={label.title} />
          <CheckboxIcon $isSelected={selectedCategory === label.title} />
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
