import styled from 'styled-components';
export const StyledColorPicker = styled.div`
  .colors {
    p {
      ${({ theme }) => theme.mixins.primarySidebarTitle}
      margin-top: 0;
      margin-bottom: 10px;
    }
    .choices {
      display: flex;
      gap: 5px;
      .choice {
        cursor: pointer;
      }
    }
  }
`;
