import styled from 'styled-components';

export const StyledPagination = styled.div`
  // position: absolute;
  // top: 115%;
  // left: 53%;
  margin-top: 42px;
  margin-bottom: 32px;
  display: flex;
  justify-content: center;
  // align-items: center;
  cursor: pointer;
  gap: 25px;
  .arrowLeft {
    // margin-right: 10px;
  }
  .numbers {
    display: flex;
    align-items: center;
    gap: 25px;
    ${({ theme }) => theme.mixins.secondarySidebar}
    p.active {
      color: #536758;
      min-width: 10px;
    }
  }
`;
