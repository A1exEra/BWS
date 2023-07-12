import styled from 'styled-components';

type StyledLabelProps = React.LabelHTMLAttributes<HTMLLabelElement> & {
  $isSelected?: boolean;
};

export const StyledCategories = styled.div<StyledLabelProps>`
  min-width: 266px;

  h5 {
    ${({ theme }) => theme.mixins.primarySidebarTitle}
    margin-bottom: 16px;
  }
  .categories {
    display: flex;
    flex-direction: column;
    max-height: 420px;
    overflow-y: hidden;

    gap: 25px;
    padding-bottom: 25px;
    margin-bottom: 25px;
    border-bottom: 1px solid rgba(217, 217, 217, 0.5);

    &::-webkit-scrollbar {
      width: 15px;
    }

    &::-webkit-scrollbar-track {
      background: #f1f1f1;
      border-radius: 20px;
    }

    &::-webkit-scrollbar-thumb {
      background: #939393;
      border-radius: 20px;
      border: 4px solid transparent;
      background-clip: content-box;
    }

    &::-webkit-scrollbar-thumb:hover {
      background-color: #536758;
    }

    &:hover {
      overflow-y: scroll;
    }
  }
  color: ${(props) => (props.$isSelected ? '#536758' : '#000')};
  .priceRange {
    border-top: 1px solid rgba(217, 217, 217, 0.5);
    margin-top: 25px;
    padding-top: 25px;
    .range {
      display: flex;
      justify-content: space-between;
      ${({ theme }) => theme.mixins.secondarySidebar}
    }
  }
`;

export const StyledLabel = styled.label.attrs(
  ({ $isSelected, ...props }: StyledLabelProps) => props
)<StyledLabelProps>`
  display: flex;
  gap: 13px;
  ${({ theme }) => theme.mixins.secondarySidebar}
  color: ${(props) => (props.$isSelected ? '#536758' : '#939393')};
  font-weight: 600;
`;

export const StyledCheckbox = styled.input`
  display: none;
`;
export const CheckboxIcon = styled.div<StyledLabelProps>`
  width: 16px;
  height: 16px;
  border: ${(props) =>
    props.$isSelected ? 'none' : '2px solid rgba(217, 217, 217, 0.50)'};
  background-color: ${(props) => (props.$isSelected ? '#536758' : 'white')};
  margin-right: 10px;
  position: relative;
  z-index: -1;

  &:after {
    content: '';
    position: absolute;
    width: 5px;
    height: 10px;
    border: solid white;
    border-width: 0 2px 2px 0;
    top: 0px;
    left: 5px;
    transform: rotate(45deg);
    display: ${(props) => (props.$isSelected ? 'block' : 'none')};
  }
`;
