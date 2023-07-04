import styled from 'styled-components';

type StyledLabelProps = React.LabelHTMLAttributes<HTMLLabelElement> & {
  isSelected?: boolean;
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
    gap: 25px;
    padding-bottom: 25px;
    margin-bottom: 25px;
    border-bottom: 1px solid rgba(217, 217, 217, 0.5);
  }
  color: ${(props) => (props.isSelected ? '#536758' : '#000')};
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
  ({ isSelected, ...props }: StyledLabelProps) => props
)<StyledLabelProps>`
  display: flex;
  gap: 13px;
  ${({ theme }) => theme.mixins.secondarySidebar}
  color: ${(props) => (props.isSelected ? '#536758' : '#939393')};
  font-weight: 600;
`;

export const StyledCheckbox = styled.input`
  display: none; // hides the original checkbox
`;
export const CheckboxIcon = styled.div<StyledLabelProps>`
  width: 16px;
  height: 16px;
  border: ${(props) =>
    props.isSelected ? 'none' : '2px solid rgba(217, 217, 217, 0.50)'};
  background-color: ${(props) => (props.isSelected ? '#536758' : 'white')};
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
    display: ${(props) => (props.isSelected ? 'block' : 'none')};
  }
`;
