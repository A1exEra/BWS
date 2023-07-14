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
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedSideItems, setSelectedSideItems] = useState([]);
  const [selectedProducts, setSelectedProducts] = useState([]);
  const [sideProducts, setSideProducts] = useState(products);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedSideCategories, setSelectedSideCategories] = useState([]);
  const {
    filteredProducts,
    setSortedProducts,
    sortedProducts,
    setFilteredProducts,
  } = useContext(PriceRangeContext);

  const handleCheckboxChange = (category: any) => {
    setTimeout(() => {
      setTimeout(() => {
        console.log('...');
        if (selectedCategories.length > 0) {
          console.log('TRUE');
          // console.log(selectedProducts);
          selectedCategories.forEach((cat) => {
            if (cat.category === category) {
              console.log('category === cat.category: ' + category);
              setSelectedCategories(
                selectedCategories.filter((cur) => {
                  return cur.category !== category;
                })
              );
              setSelectedSideCategories(
                selectedSideCategories.filter((cur) => {
                  return cur !== category;
                })
              );
            }
          });
        }
      }, 40);

      categories.forEach((cat) => {
        if (cat.title === category) {
          console.log(category);
          setSelectedSideCategories([...selectedSideCategories, category]);
          setSelectedCategories([
            ...new Set([
              ...selectedCategories,
              ...sortedProducts.filter((prod) => prod.category === cat.title),
            ]),
          ]);
          console.log(selectedCategories);
          console.log(selectedSideCategories);
        }
      });
    }, 200);

    // ITEMS
    setTimeout(() => {
      if (selectedSideItems.includes(category)) {
        setSelectedSideItems(
          selectedSideItems.filter((item) => {
            return item !== category;
          })
        );
      } else {
        //1. HERE I MANAGED TO ADD ONLY THE PRODUCT TITLES IN THE SELECTED SIDE ITEMS,  BUT AT THE SAME TIME I CANNOT SELECT MORE THAN A CATEGORY
        if (category.split(' ').length > 1) {
          setSelectedSideItems([...new Set([...selectedSideItems, category])]);
        }
        // setSelectedSideCategories([
        //   ...new Set([...selectedSideCategories, category]),
        // ]);
      }
    }, 100);
    // console.log(selectedCategories);

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
  };
  // useEffect(() => {
  //   if (selectedCategories.length > 0) {
  //     console.log(selectedCategories);

  //   }
  // }, [selectedCategories]);

  // this will set the product list back to default state if no category is selected
  // or to selectedCategories if selectedCategories has items in it
  useEffect(() => {
    if (selectedCategories.length > 0) {
      setFilteredProducts(selectedCategories);
      setSideProducts(selectedCategories);

      setSelectedProducts([]);
      // 2. HERE I SET SELECTED SIDE ITEMS TO EMPTY, MANAGING TO CLEAN CHECKBOXES,
      setSelectedSideItems([]);
    } else {
      setFilteredProducts(sortedProducts);
    }
  }, [selectedCategories]);
  useEffect(() => {
    if (selectedSideItems.length === 0) {
      setFilteredProducts(selectedCategories);
    }
  }, [selectedSideItems]);

  useEffect(() => {
    setTimeout(() => {
      // console.log(selectedProducts);
    }, 101);
  }, [selectedProducts]);

  return (
    <StyledCategories>
      <div className="productCategories">
        <h5>Category</h5>
        <Labels
          selectedC={selectedSideCategories} //HERE!!!!
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
          selectedC={selectedSideItems} //HERE
          selectedProducts={selectedProducts}
          labels={sideProducts}
          handleChange={handleCheckboxChange}
        />
      </div>
      <ColorPicker selectedCategories={selectedCategories} />
      <PriceRange />
      <PriceSlider />
    </StyledCategories>
  );
};

export default Categories;
