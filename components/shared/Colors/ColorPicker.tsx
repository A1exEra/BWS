import Image from 'next/image';
import { useContext } from 'react';
import { StyledColorPicker } from './ColorPicker.styled';
import PriceRangeContext from '../../../helpers/PriceRangeContext';

const ColorPicker = ({ choices }) => {
  const { sortedProducts, setFilteredProducts } = useContext(PriceRangeContext);

  const handleColorClick = (color) => {
    // const displayedProducts = filteredProducts.filter(
    //   (product) => product.color.toLowerCase() === color
    // );
    setFilteredProducts(
      sortedProducts.filter((product) => product.color.toLowerCase() === color)
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
