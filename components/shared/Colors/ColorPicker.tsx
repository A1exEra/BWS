import Image, { StaticImageData } from 'next/image';
import { useContext, useState, useEffect } from 'react';
import { StyledColorPicker } from './ColorPicker.styled';
import { PriceRangeContext } from '../../../helpers/PriceRangeContext';
import { BWS_DATA } from '@/helpers/types';
interface ColorProps {
  selectedCategories: BWS_DATA[];
}
const choices = [
  { id: 1, title: 'beige' },
  { id: 2, title: 'golden' },
  { id: 3, title: 'red' },
  { id: 4, title: 'gray' },
  { id: 5, title: 'brown' },
];
const ColorPicker = ({ selectedCategories }: ColorProps) => {
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
      setSelectedColors([...selectedColors, color]);
    }
  };
  useEffect(() => {
    let newDisplayedProducts: BWS_DATA[] = [];
    selectedColors.forEach((color) => {
      if (selectedCategories.length > 0) {
        const newProducts = selectedCategories.filter(
          (product: BWS_DATA) =>
            product.color.toLowerCase() === color &&
            !newDisplayedProducts.some((p: BWS_DATA) => p.id === product.id)
        );
        newDisplayedProducts = [...newDisplayedProducts, ...newProducts];
      } else {
        const newProducts = sortedProducts.filter(
          (product: BWS_DATA) =>
            product.color.toLowerCase() === color &&
            !newDisplayedProducts.some((p: BWS_DATA) => p.id === product.id)
        );
        newDisplayedProducts = [...newDisplayedProducts, ...newProducts];
      }
    });
    setDisplayedProducts(newDisplayedProducts);
  }, [selectedColors]);
  const onClickHandler = () => {
    setSelectedColors([]);
  };
  useEffect(() => {
    if (selectedColors.length === 0) {
      setIsChecked(true);
    }
  }, [selectedColors]);
  useEffect(() => {
    if (isChecked) {
      setFilteredProducts(sortedProducts);
    } else {
      setFilteredProducts(displayedProducts);
    }
  }, [displayedProducts]);

  useEffect(() => {
    if (filteredProducts.length === 27) {
      setSelectedColors([]);
    }
  }, [filteredProducts]);

  return (
    <StyledColorPicker $ischecked={isChecked}>
      <div className="colors">
        <p>Colors</p>
        <div className="choices">
          <button onClick={onClickHandler}>
            <Image
              src="/icons/check-icon.svg"
              width={27}
              height={27}
              alt="check icon"
            />
            <span className="checkmark"></span>
          </button>
          {choices.map((choice) => (
            <div
              key={choice.id}
              className="choice"
              onClick={() => handleColorClick(choice.title)}
            >
              <div className="color_name">{choice.title}</div>
              <Image
                className={`${
                  selectedColors.includes(choice.title) ? 'selected' : ''
                }`}
                src={`/images/color-options/Oval${choice.id}.png`}
                alt="color choice"
                width={27}
                height={27}
              />
            </div>
          ))}
        </div>
      </div>
    </StyledColorPicker>
  );
};

export default ColorPicker;
