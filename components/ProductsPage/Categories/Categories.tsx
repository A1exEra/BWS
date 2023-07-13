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
  const {
    filteredProducts,
    setSortedProducts,
    sortedProducts,
    setFilteredProducts,
  } = useContext(PriceRangeContext);

  const handleCheckboxChange = (category: any) => {
    console.log(categories);
    categories.forEach((cat) => {
      if (cat.title === category) {
        setFilteredProducts(
          filteredProducts.filter((prod) => prod.category === cat.title)
        );
      }
    });

    setTimeout(() => {
      if (selectedCategories.includes(category)) {
        setSelectedCategories(
          selectedCategories.filter((item) => {
            return item !== category;
          })
        );
      } else {
        setSelectedCategories([...new Set([...selectedCategories, category])]);
      }
    }, 10);

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
    setSortedProducts(sideProducts);
  };

  return (
    <StyledCategories>
      <div className="productCategories">
        <h5>Category</h5>
        <Labels
          selectedC={selectedCategories}
          selectedProducts={selectedProducts}
          labels={categories}
          handleChange={handleCheckboxChange}
        />

        <h5>Products</h5>
        <StyledLabel
          htmlFor="all"
          className="category"
          $isSelected={selectedCategories.includes('all')}
          onClick={() => handleCheckboxChange('all')}
          style={{ marginBottom: '25px' }}
        >
          <StyledCheckbox type="checkbox" id={'all'} />
          <CheckboxIcon
            $isSelected={selectedCategories.includes('all')}
            onClick={() => handleCheckboxChange('all')}
          />
          {'all'
            .split(' ')
            .map((word) => word[0].toUpperCase() + word.slice(1))
            .join(' ')}
        </StyledLabel>
        <Labels
          selectedC={selectedCategories}
          selectedProducts={selectedProducts}
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
