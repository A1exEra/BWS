import { useState, useContext, useEffect } from 'react';
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
import PriceRange from './PriceRange/PriceRange';
import { BWS_DATA } from '@/helpers/types';
import { PriceRangeContext } from '@/helpers/PriceRangeContext';
import PriceSlider from '@/components/shared/PriceSlider/PriceSlider';

interface CategorySchema {
  id: number;
  name: string;
}
interface CategoriesProps {
  products: BWS_DATA[];
}
const Categories: React.FC<CategoriesProps> = ({ products }) => {
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedProducts, setSelectedProducts] = useState<string[]>([]);

  const {
    filteredProducts,
    setSortedProducts,
    sortedProducts,
    setFilteredProducts,
  } = useContext(PriceRangeContext);

  const handleCategoryCheckboxChange = (labels: string[]) => {
    console.log('[categories] handleCheckboxChange received:', labels);
    setSelectedCategories((prevState) => {
      // console.log('[categories] handleCheckboxChange set:', labels);
      return labels;
    });
  };
  useEffect(() => {
    console.log('[Categories] selectedCategories:', selectedCategories);
  }, [selectedCategories]);
  const handleProductCheckboxChange = (labels: string[]) => {
    console.log('[products] handleCheckboxChange received:', labels);
    setSelectedProducts(labels);
    // The log below won't reflect the immediate update due to useState's asynchronous behavior
    console.log('[products] handleCheckboxChange set:', selectedProducts);
  };
  useEffect(() => {
    console.log('[Categories] selectedProducts:', selectedProducts);
  }, [selectedProducts]);
  useEffect(() => {
    console.log(
      '[categories] selectedCategories after update:',
      selectedCategories
    );
  }, [selectedCategories]);

  return (
    <StyledCategories>
      <div className="productCategories">
        <h5>Category</h5>
        <Labels
          id="categories"
          labels={categories}
          selectedLabels={selectedCategories}
          handleCheckboxChange={handleCategoryCheckboxChange}
        />

        <h5>Products</h5>
        <Labels
          id="products"
          labels={sortedProducts}
          selectedLabels={selectedProducts}
          handleCheckboxChange={handleProductCheckboxChange}
        />
      </div>
      <ColorPicker />
      <PriceRange />
    </StyledCategories>
  );
};

export default Categories;
