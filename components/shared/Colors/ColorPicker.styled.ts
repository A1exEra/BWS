import styled from 'styled-components';

export const StyledColorPicker = styled.div<{ $ischecked: boolean }>`
  .colors {
    p {
      ${({ theme }) => theme.mixins.primarySidebarTitle}
      margin-top: 0;
    }
    .choices {
      display: flex;
      align-items: end;
      gap: 5px;
      button {
        margin-bottom: 2px;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 27px;
        height: 27px;
        cursor: pointer;
        border: ${({ $ischecked }) =>
          $ischecked ? '1px solid #536758' : 'none'};
        border-radius: 50%;
        &:hover {
          border: 1px solid #536758;
          border-radius: 100%;
          padding: 1px;
          box-shadow: 0px 1px 3px 1px rgba(0, 0, 0, 0.2);
        }
        img {
          display: ${({ $ischecked }) => ($ischecked ? 'block' : 'none')};
        }
      }

      .choice {
        cursor: pointer;
        display: flex;
        flex-direction: column;
        align-items: center;
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
    }
  }
`;
