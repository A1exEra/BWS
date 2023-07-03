// import { categories } from './categoryList';
import React from 'react';
import { StyledLabel, StyledCheckbox, CheckboxIcon } from './Categories.styled';
interface LabelsProps {
  selectedCategory: string;
  labels: any[];
  handChange: any;
}
const Labels = ({ selectedCategory, labels, handleChange }) => {
  return (
    <div className="categories">
      {labels.map((label) => (
        <StyledLabel
          key={label.id}
          htmlFor={label.title}
          className="category"
          isSelected={selectedCategory === label.title}
          onClick={() => handleChange(label.title)}
        >
          <StyledCheckbox type="checkbox" id={label.title} />
          <CheckboxIcon isSelected={selectedCategory === label.title} />
          {label.title
            .split(' ')
            .map((word) => word[0].toUpperCase() + word.slice(1))
            .join(' ')}
        </StyledLabel>
      ))}
    </div>
  );
};

export default Labels;
