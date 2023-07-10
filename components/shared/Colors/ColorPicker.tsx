import Image, { StaticImageData } from 'next/image';
import { useContext } from 'react';
import { StyledColorPicker } from './ColorPicker.styled';
import { PriceRangeContext } from '../../../helpers/PriceRangeContext';
import { BWS_DATA } from '@/helpers/api-util';

interface ColorProps {
  choices: {
    id: number;
    choice: StaticImageData;
    title: string;
  }[];
}
const ColorPicker = ({ choices }: ColorProps) => {
  const { sortedProducts, setFilteredProducts } =
    useContext<any>(PriceRangeContext);

  const handleColorClick = (color: string) => {
    // const displayedProducts = filteredProducts.filter(
    //   (product) => product.color.toLowerCase() === color
    // );
    setFilteredProducts(
      sortedProducts.filter(
        (product: BWS_DATA) => product.color.toLowerCase() === color
      )
    );
  };
  return (
    <StyledColorPicker>
      <div className="colors">
        <p>Colors</p>
        <div className="choices">
          {choices.map((choice) => (
            <div
              key={choice.id}
              className="choice"
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
