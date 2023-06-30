import Image from 'next/image';
import { StyledColorPicker } from './ColorPicker.styled';

const ColorPicker = ({ choices }) => {
  return (
    <StyledColorPicker>
      <div className="colors">
        <p>Colors</p>
        <div className="choices">
          {choices.map((choice) => (
            <div key={choice.id} className="choice">
              <Image src={choice.choice} alt="color choice" />
            </div>
          ))}
        </div>
      </div>
    </StyledColorPicker>
  );
};

export default ColorPicker;
