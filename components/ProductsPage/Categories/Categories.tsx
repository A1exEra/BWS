import { useState, useContext, useEffect, useMemo } from 'react';
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
  selectedCategories: string[];
  setSelectedCategories: (categories: string[]) => void;
  selectedProducts: string[];
  setSelectedProducts: (products: string[]) => void;
}
const Categories: React.FC<CategoriesProps> = ({ products }) => {
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedProducts, setSelectedProducts] = useState<string[]>([]);
  const selectedCategoryProducts = useMemo(() => {
    return products.filter((product) =>
      selectedCategories.includes(product.category)
    );
  }, [products, selectedCategories]);
  const {
    filteredProducts,
    setSortedProducts,
    sortedProducts,
    setFilteredProducts,
  } = useContext(PriceRangeContext);

  const handleCategoryCheckboxChange = (labels: string[]) => {
    setSelectedCategories(labels);
  };

  const handleProductCheckboxChange = (labels: string[]) => {
    setSelectedProducts(labels);
  };

  useEffect(() => {
    setFilteredProducts(sortedProducts);
  }, [sortedProducts]);
  useEffect(() => {
    const newFilteredProducts = sortedProducts.filter((p) => {
      const categoryMatch = selectedCategories.length
        ? selectedCategories.includes(p.category)
        : true;
      const productMatch = selectedProducts.length
        ? selectedProducts.includes(p.title)
        : true;
      return categoryMatch && productMatch;
    });
    setFilteredProducts(newFilteredProducts);
  }, [sortedProducts, selectedCategories, selectedProducts]);

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
      <ColorPicker selectedCategories={selectedCategoryProducts} />
      <PriceRange />
    </StyledCategories>
  );
};

export default Categories;
