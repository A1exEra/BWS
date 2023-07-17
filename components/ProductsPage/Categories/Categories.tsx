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
        if (selectedCategories.length > 0) {
          selectedCategories.forEach((cat) => {
            if (cat.category === category) {
              setSelectedCategories(
                selectedCategories.filter((cur) => {
                  return cur.category !== category;
                })
              );
              if (category === 'features') {
                setSelectedSideCategories(
                  selectedSideCategories.filter((cur) => cur !== 'features')
                );
              } else {
                setSelectedSideCategories(
                  selectedSideCategories.filter((cur) => {
                    return cur !== category;
                  })
                );
              }
            }
          });
        }
      }, 40);

      categories.forEach((cat) => {
        if (cat.title === category) {
          setSelectedSideCategories([...selectedSideCategories, category]);
          setSelectedCategories([
            ...new Set([
              ...selectedCategories,
              ...sortedProducts.filter((prod) => prod.category === cat.title),
            ]),
          ]);
        }
      });
      setTimeout(() => {
        if (
          selectedSideCategories.includes('features') &&
          category === 'features'
        ) {
          setSelectedSideCategories(
            selectedSideCategories.filter((cat) => cat !== 'features')
          );
        }
      }, 20);
    }, 200);

    setTimeout(() => {
      if (selectedSideItems.includes(category)) {
        setSelectedSideItems(
          selectedSideItems.filter((item) => {
            return item !== category;
          })
        );
      } else {
        if (category.split(' ').length > 1) {
          setSelectedSideItems([...new Set([...selectedSideItems, category])]);
        }
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

    // const productExists = selectedProducts.some(
    //   (product) => product.title === category
    // );
    // let newSelectedProducts;

    // if (productExists) {
    //   newSelectedProducts = selectedProducts.filter(
    //     (product) => product.title !== category
    //   );
    // } else {

    //     newSelectedProducts = [
    //       ...selectedProducts,
    //       ...sideProducts.filter(
    //         (product) =>
    //           product.title === category &&
    //           !selectedProducts.some(
    //             (selectedProduct) => selectedProduct.id === product.id
    //           )
    //       ),
    //     ];

    // }

    // setSelectedProducts(newSelectedProducts);
  };

  // this will set the product list back to default state if no category is selected
  // or to selectedCategories if selectedCategories has items in it

  useEffect(() => {
    if (selectedCategories.length > 0) {
      setFilteredProducts(selectedCategories);
      setSideProducts(selectedCategories);

      setSelectedProducts([]);
      setSelectedSideItems([]);
    } else {
      setFilteredProducts(sortedProducts);
      setSideProducts(sortedProducts);
    }
  }, [selectedCategories]);
  useEffect(() => {
    if (selectedSideItems.length === 0) {
      setFilteredProducts(selectedCategories);
    }
  }, [selectedSideItems]);

  useEffect(() => {
    console.log(selectedProducts);
  }, [selectedProducts]);

  return (
    <StyledCategories>
      <div className="productCategories">
        <h5>Category</h5>
        <Labels
          selectedC={selectedSideCategories}
          selectedProducts={selectedProducts}
          labels={categories}
          handleChange={handleCheckboxChange}
        />

        <h5>Products</h5>
        <Labels
          selectedC={selectedSideItems}
          selectedProducts={selectedProducts}
          labels={sideProducts}
          handleChange={handleCheckboxChange}
        />
      </div>
      <ColorPicker selectedCategories={selectedCategories} />
      <PriceRange />
    </StyledCategories>
  );
};

export default Categories;
