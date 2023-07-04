import styled from 'styled-components';

export const StyledColorPicker = styled.div`
  .colors {
    p {
      ${({ theme }) => theme.mixins.primarySidebarTitle}
      margin-top: 0;
      margin-bottom: 20px;
    }
    .choices {
      display: flex;
      gap: 5px;
      .choice {
        position: relative;
        cursor: pointer;
        .color-name {
          display: none;
          position: absolute;
          top: -20px;
          left: 50%;
          transform: translateX(-50%);
          white-space: nowrap;
          color: #939393;
          font-size: 8px;
        }
        &:hover .color-name {
          display: block;
        }
      }
    }
  }
`;
