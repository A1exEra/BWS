import { MouseEventHandler, ReactNode, FC } from 'react';
import { styled } from 'styled-components';
interface BtnProps {
  children: ReactNode;
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
const Button: FC<BtnProps> = (props) => {
  return (
    <StyledButton
      type="button"
      onClick={props.onClick}
      bg={props.backgroundColor}
      className={`${props.className}`}>
      {props.children}
    </StyledButton>
    // <StyledButton>
    //   <button type="button" onClick={props.onClick}>
    //     {props.children}
    //   </button>
    // </StyledButton>
  );
};
const StyledButton = styled.button`
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1ps solid ${({ bg }) => bg || 'none'};
  background: ${({ bg }) => bg || 'none'};
  // color: ${({ theme }) => theme.colors.whitePrimary};
  img {
    object-fit: covetr;
  }
  &:hover {
    cursor: pointer;
      box-shadow: 0px 4px 20px 0px rgba(0, 0, 0, 0.10);
    }
    &:active {
      box-shadow: 0px 4px 20px 0px rgba(0, 0, 0, 0.10);
    }
    &:disabled {
      background-color: grey;
      color: $gray-dark;
      font-size: $text-sm;
`;
export default Button;
