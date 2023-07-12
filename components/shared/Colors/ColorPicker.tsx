import Image, { StaticImageData } from 'next/image';
import { useContext, useState, useEffect } from 'react';
import { StyledColorPicker } from './ColorPicker.styled';
import { PriceRangeContext } from '../../../helpers/PriceRangeContext';
import { BWS_DATA } from '@/helpers/types';

interface ColorProps {
  choices: {
    id: number;
    choice: StaticImageData;
    title: string;
  }[];
}
const ColorPicker = ({ choices }: ColorProps) => {
  const {
    sortedProducts,
    setFilteredProducts,
    setSortedProducts,
    filteredProducts,
  } = useContext<any>(PriceRangeContext);
  const [isChecked, setIsChecked] = useState<boolean>(true);
  const [displayedProducts, setDisplayedProducts] = useState<any>([]);
  const [isColorSelected, setIsColorSelected] = useState<boolean>(false);
  // const [selectedColor, setSelectedColor] = useState<string>('');
  const [selectedColors, setSelectedColors] = useState<string[]>([]); // Now an array

  const handleColorClick = (color: string) => {
    if (isChecked) {
      setIsChecked(false);
    }

    if (selectedColors.includes(color)) {
      setSelectedColors(selectedColors.filter((c) => c !== color));
    } else {
      console.log(selectedColors);
      setSelectedColors([...selectedColors, color]);
      console.log(selectedColors);
    }
  };
  useEffect(() => {
    let newDisplayedProducts: BWS_DATA[] = [];
    selectedColors.forEach((color) => {
      const newProducts = sortedProducts.filter(
        (product: BWS_DATA) =>
          product.color.toLowerCase() === color &&
          !newDisplayedProducts.some((p: BWS_DATA) => p.id === product.id)
      );
      newDisplayedProducts = [...newDisplayedProducts, ...newProducts];
      console.log(newDisplayedProducts);
    });
    setDisplayedProducts(newDisplayedProducts);
  }, [selectedColors]);

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedColors([]);
    setDisplayedProducts([]);
    setIsChecked(e.target.checked);
  };
  useEffect(() => {
    if (selectedColors.length === 0) {
      setIsChecked(true);
    }
  }, [selectedColors]);
  useEffect(() => {
    // console.log(sortedProducts);

    if (isChecked) {
      console.log(isChecked);
      setFilteredProducts(sortedProducts);
    } else {
      console.log(isChecked);
      // console.log(displayedProducts);
      setFilteredProducts(displayedProducts);
      console.log(filteredProducts);
    }
  }, [displayedProducts]);

  return (
    <StyledColorPicker $ischecked={isChecked}>
      <div className="colors">
        <p>Colors</p>
        <div className="choices">
          <label className="checkbox-container">
            <input
              type="checkbox"
              checked={isChecked}
              onChange={handleCheckboxChange}
            />
            <span className="checkmark"></span>
          </label>
          {choices.map((choice) => (
            <div
              key={choice.id}
              className={`choice ${
                selectedColors.includes(choice.title) ? 'selected' : ''
              }`}
              onClick={() => handleColorClick(choice.title)}
            >
              <div className="color-name">{choice.title}</div>
              <Image src={choice.choice} alt="color choice" />
            </div>
          ))}
        </div>
      </div>
    </StyledColorPicker>
  );
};

export default ColorPicker;
