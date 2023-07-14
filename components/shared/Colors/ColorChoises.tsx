import Image from 'next/image';
import { styled } from 'styled-components';
const choices = [
  { id: 1, title: 'beige' },
  { id: 2, title: 'golden' },
  { id: 3, title: 'red' },
  { id: 4, title: 'gray' },
  { id: 5, title: 'brown' },
];
const ColorChoises = (props) => {
  const handleColorClick = (color: string) => {
    props.setColor(color);
  };
  return (
    <StyledColors>
      {choices.map((choice) => (
        <div
          className="color"
          key={choice.id}
          onClick={() => handleColorClick(choice.title)}>
          <div className="color_name">{choice.title}</div>
          <Image
            src={`/images/color-options/Oval${choice.id}.png`}
            alt="color choice"
            width={27}
            height={27}
          />
        </div>
      ))}
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

    .selected {
      border: 1px solid #536758;
      border-radius: 100%;
      padding: 1px;
      box-shadow: 0px 1px 3px 1px rgba(0, 0, 0, 0.2);
    }
  }
`;
export default ColorChoises;
