import styled from 'styled-components';

export const StyledColorPicker = styled.div<{ $ischecked: boolean }>`
  .colors {
    p {
      ${({ theme }) => theme.mixins.primarySidebarTitle}
      margin-top: 0;
      margin-bottom: 20px;
    }
    .choices {
      display: flex;
      gap: 5px;

      .checkbox-container {
        display: inline-block;
        position: relative;
        padding-left: 30px;
        margin-bottom: 12px;
        cursor: pointer;
        font-size: 22px;
        user-select: none;

        input {
          position: absolute;
          opacity: 0;
          cursor: pointer;
          height: 0;
          width: 0;
        }

        .checkmark {
          position: absolute;
          top: 0;
          left: 0;
          height: 27px;
          width: 27px;
          background-color: #fff;
          border-radius: 50%;
          // border: 1px solid #939393;
          box-shadow: 0px 1px 3px 1px rgba(0, 0, 0, 0.2);
        }

        input:checked ~ .checkmark {
          background-color: #fff;
        }

        .checkmark:after {
          content: '';
          position: absolute;
          display: none;
        }

        input:checked ~ .checkmark:after {
          display: block;
        }

        .checkmark:after {
          left: 9px;
          top: 5px;
          width: 5px;
          height: 10px;
          border: solid;
          border-color: ${(props: any) =>
            props.$isChecked ? 'transparent' : '#536758'};

          border-width: 0 3px 3px 0;
          transform: rotate(45deg);
        }
      }

      .choice {
        position: relative;
        cursor: pointer;
        display: flex;
        align-items: center;
        padding: 2px;

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
      .selected {
        border: 1px solid #536758;
        border-radius: 100%;
      }
    }
  }
`;
