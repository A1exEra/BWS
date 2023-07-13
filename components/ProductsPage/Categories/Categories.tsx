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
import { choices } from '@/components/Product/choices';
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
    console.log(category);
    setSortedProducts(sideProducts);
    setSelectedCategory(category);
    if (selectedCategories.includes(category)) {
      setSelectedCategories(
        selectedCategories.filter((item) => item !== category)
      );
    } else {
      setSelectedCategories([...selectedCategories, category]);
    }
  };
  useEffect(() => {
    console.log(selectedCategories);
  }, [selectedCategories]);

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
          <CheckboxIcon $isSelected={selectedCategories.includes('all')} />
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
      <ColorPicker choices={choices} />
      <PriceRange />
    </StyledCategories>
  );
};

export default Categories;
