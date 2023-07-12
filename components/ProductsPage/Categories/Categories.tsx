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
import PriceRange from './PriceRange/PriceRange';
import { BWS_DATA } from '@/helpers/api-util';

interface CategorySchema {
  id: number;
  name: string;
}
interface CategoriesProps {
  products: BWS_DATA[];
}
const Categories: React.FC<CategoriesProps> = ({ products }) => {
  const [selectedCategory, setSelectedCategory] = useState('');
  const [sideProducts, setSideProducts] = useState(products);
  const [rangeValues, setRangeValues] = useState([50, 80]);

  const handleCheckboxChange = (category: any) => {
    console.log(products);
    console.log(sideProducts);
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
          $isSelected={selectedCategory === 'all'}
          onClick={() => handleCheckboxChange('all')}
          style={{ marginBottom: '15px' }}
        >
          <StyledCheckbox type="checkbox" id={'all'} />
          <CheckboxIcon $isSelected={selectedCategory === 'all'} />
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
      <PriceRange />
    </StyledCategories>
  );
};

export default Categories;
