import { useState } from 'react';
import {
  StyledCategories,
  StyledLabel,
  StyledCheckbox,
  CheckboxIcon,
} from './Categories.styled';
import { categories } from './categoryList.js';
import React from 'react';
import Labels from './Labels';
import ColorPicker from '@/components/shared/Colors/ColorPicker';
import { choices } from '@/components/Product/choices';

interface CategorySchema {
  id: number;
  name: string;
}

const Categories = ({ products }) => {
  console.log(categories);

  const [selectedCategory, setSelectedCategory] = useState('');
  const [sideProducts, setSideProducts] = useState(products.slice(0, 9));

  const handleCheckboxChange = (category: CategorySchema) => {
    setSelectedCategory(category);
  };

  return (
    <StyledCategories>
      <div className="productCategories">
        <h5>Category</h5>
        <Labels
          selectedCategory={selectedCategory}
          labels={categories}
          handleChange={handleCheckboxChange}
        />

        <h5>Products</h5>
        <StyledLabel
          htmlFor="all"
          className="category"
          isSelected={selectedCategory === 'all'}
          onClick={() => handleCheckboxChange('all')}
          style={{ marginBottom: '15px' }}
        >
          <StyledCheckbox type="checkbox" id={'all'} />
          <CheckboxIcon isSelected={selectedCategory === 'all'} />
          {'all'
            .split(' ')
            .map((word) => word[0].toUpperCase() + word.slice(1))
            .join(' ')}
        </StyledLabel>
        <Labels
          selectedCategory={selectedCategory}
          labels={sideProducts}
          handleChange={handleCheckboxChange}
        />
      </div>
      <ColorPicker choices={choices} />
      <div className="priceRange">
        <h5>Price Range</h5>
        <h1>????</h1>
      </div>
    </StyledCategories>
  );
};

export default Categories;
