import { useState, useContext } from 'react';
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
// import { choices } from '@/components/Product/choices';
import PriceRange from './PriceRange/PriceRange';
import { BWS_DATA } from '@/helpers/types';
import { PriceRangeContext } from '@/helpers/PriceRangeContext';

interface CategorySchema {
  id: number;
  name: string;
}
interface CategoriesProps {
  products: BWS_DATA[];
}
const Categories: React.FC<CategoriesProps> = ({ products }) => {
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedProducts, setSelectedProducts] = useState([]);
  const [sideProducts, setSideProducts] = useState(products);
  const [rangeValues, setRangeValues] = useState([50, 80]);
  const { filteredProducts, setSortedProducts } = useContext(PriceRangeContext);

  const handleCheckboxChange = (category: any) => {
    setSelectedProducts([
      ...selectedProducts,
      ...sideProducts.filter(
        (product) =>
          product.title === category &&
          !selectedProducts.some(
            (selectedProduct) => selectedProduct.id === product.id
          )
      ),
    ]);
    // console.log(selectedProducts);
    setSortedProducts(sideProducts);
    setSelectedCategory(category);
  };

  return (
    <StyledCategories>
      <div className="productCategories">
        <h5>Category</h5>
        <Labels
          selectedCategory={selectedCategory}
          selectedProducts={selectedProducts}
          labels={categories}
          handleChange={handleCheckboxChange}
        />

        <h5>Products</h5>
        <StyledLabel
          htmlFor="all"
          className="category"
          $isSelected={selectedCategory === 'all'}
          onClick={() => handleCheckboxChange('all')}
          style={{ marginBottom: '25px' }}>
          <StyledCheckbox type="checkbox" id={'all'} />
          <CheckboxIcon $isSelected={selectedCategory === 'all'} />
          {'all'
            .split(' ')
            .map((word) => word[0].toUpperCase() + word.slice(1))
            .join(' ')}
        </StyledLabel>
        <Labels
          selectedCategory={selectedCategory}
          selectedProducts={selectedCategories}
          labels={sideProducts}
          handleChange={handleCheckboxChange}
        />
      </div>
      <ColorPicker />
      <PriceRange />
    </StyledCategories>
  );
};

export default Categories;
