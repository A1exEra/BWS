import Image from 'next/image';
import { styled } from 'styled-components';
import { BWS_DATA } from '@/helpers/types';
import { useState } from 'react';

interface CHOISES {
  setColor: (color: string) => void;
  product: BWS_DATA;
}

const ColorChoises = (props: CHOISES) => {
  const [selectedColor, setSelectedColor] = useState<string>(
    props.product.colors[0].name
  );

  const handleColorClick = (color: string) => {
    props.setColor(color);
    setSelectedColor(color);
  };

  return (
    <StyledColors>
      {props.product.colors.map(
        (color: { name: string; quantity: number }, i: number) => (
          <div className="color" key={i}>
            <div className="color_name">{color.name}</div>
            <Image
              className={`${selectedColor === color.name ? 'selected' : ''}`}
              src={`/images/color-options/${color.name}.png`}
              alt="color choice"
              width={27}
              height={27}
              onClick={() => handleColorClick(color.name)}
            />
          </div>
        )
      )}
    </StyledColors>
  );
};

const StyledColors = styled.div`
  display: flex;
  gap: 8px;
  .color {
    p {
      ${({ theme }) => theme.mixins.primarySidebarTitle}
      margin-top: 0;
    }
    cursor: pointer;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 2px;

    .color_name {
      color: white;
      font-size: 10px;
      margin-bottom: 8px;
    }
    &:hover .color_name {
      color: #939393;
    }
  }
  .selected {
    border: 1px solid #536758;
    border-radius: 100%;
    padding: 1px;
    box-shadow: 0px 1px 3px 1px rgba(0, 0, 0, 0.2);
  }
`;
export default ColorChoises;
