import { FC, MouseEventHandler, ReactNode } from 'react';
import { styled, css } from 'styled-components';
interface MainBtnProps {
  children?: ReactNode;
  className?: any;
  onClick?: MouseEventHandler<HTMLButtonElement> | undefined;
  label?: ReactNode;
  icon?: string | undefined;
  isDisabled?: boolean;
  type?: string | any;
  width?: string;
  height?: string;
  backgroundColor?: string;
}
const MainButton: FC<MainBtnProps> = (props) => {
  return (
    <StyledButton
      className={`${props.className}`}
      bg={props.backgroundColor}
      width={props.width}
      height={props.height}>
      <button
        disabled={props.isDisabled}
        type={props.type || `button`}
        className="Btn"
        onClick={props.onClick}>
        <p>{props.label}</p>
      </button>
    </StyledButton>
  );
};
const StyledButton = styled.div`
  width: ${({ width }) => width || '200px'};
  height: ${({ height }) => height || '54px'};
  display: flex;
  align-items: center;
  justify-content: center;
  .Btn {
    height: 100%;
    width: 100%;
    border: 1px solid ${({ bg }) => (!bg ? 'white' : 'black')};
    background: ${({ bg }) => bg || 'none'};
    // color: ${({ theme }) => theme.colors.whitePrimary};
    transition: all 0.5s ease;
    cursor: pointer;
    font-size: 18px;
    border-radius: 4px;
    p {
      font-size: 18px;
      color: ${({ bg }) => (!bg ? 'white' : 'black')};
    }
    &:hover {
      border: 1px solid ${({ bg }) => (!bg ? 'black' : 'white')};
      box-shadow: 0px 4px 20px 0px rgba(0, 0, 0, 0.1);
    }
    &:active {
      box-shadow: 0px 4px 20px 0px rgba(0, 0, 0, 0.1);
    }
    &:disabled {
      background-color: grey;
      color: $gray-dark;
      font-size: $text-sm;
    }
  }
`;
export default MainButton;
