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
  const [selectedSideItems, setSelectedSideItems] = useState([]);
  const [selectedProducts, setSelectedProducts] = useState([]);
  const [sideProducts, setSideProducts] = useState(products);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const {
    filteredProducts,
    setSortedProducts,
    sortedProducts,
    setFilteredProducts,
  } = useContext(PriceRangeContext);

  const handleCheckboxChange = (category: any) => {
    setTimeout(() => {
      setTimeout(() => {
        if (selectedCategories.length > 0) {
          selectedCategories.forEach((cat) => {
            if (cat.category === category) {
              setSelectedCategories(
                selectedCategories.filter((cur) => {
                  return cur.category !== category;
                })
              );
            }
          });
        }
      });

      categories.forEach((cat) => {
        if (cat.title === category) {
          setSelectedCategories([
            ...new Set([
              ...selectedCategories,
              ...sideProducts.filter((prod) => prod.category === cat.title),
            ]),
          ]);
        }
      });
    }, 200);

    setTimeout(() => {
      if (selectedSideItems.includes(category)) {
        setSelectedSideItems(
          selectedSideItems.filter((item) => {
            return item !== category;
          })
        );
      } else {
        setSelectedSideItems([...new Set([...selectedSideItems, category])]);
      }
    }, 100);

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

    // setSortedProducts(sideProducts);
  };

  // this will set the product list back to default state if no category is selected
  // or to selectedCategories if selectedCategories has items in it
  useEffect(() => {
    if (selectedCategories.length > 0) {
      setFilteredProducts(selectedCategories);
    } else {
      setFilteredProducts(sortedProducts);
    }
  }, [selectedCategories]);

  return (
    <StyledCategories>
      <div className="productCategories">
        <h5>Category</h5>
        <Labels
          selectedC={selectedSideItems}
          selectedProducts={selectedProducts}
          labels={categories}
          handleChange={handleCheckboxChange}
        />

        <h5>Products</h5>
        {/* <StyledLabel
          htmlFor="all"
          className="category"
          $isSelected={selectedSideItems.includes('all')}
          onClick={() => handleCheckboxChange('all')}
          style={{ marginBottom: '25px' }}
        >
          style={{ marginBottom: '25px' }}
        >
          <StyledCheckbox type="checkbox" id={'all'} />
          <CheckboxIcon
            $isSelected={selectedSideItems.includes('all')}
            onClick={() => handleCheckboxChange('all')}
          />
          {'all'
            .split(' ')
            .map((word) => word[0].toUpperCase() + word.slice(1))
            .join(' ')}
        </StyledLabel> */}
        <Labels
          selectedC={selectedSideItems}
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
