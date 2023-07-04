import styled from 'styled-components';

export const StyledPagination = styled.div`
  margin-top: 32px;
  margin-bottom: 32px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  gap: 25px;
  .arrowLeft {
    transform: rotate(180deg);
    width: 50px;
  }
  .numbers {
    display: flex;
    gap: 25px;
    ${({ theme }) => theme.mixins.secondarySidebar}
    p.active {
      color: #536758; // replace <your_color_here> with the color you want for the current page
    }
  }
`;
