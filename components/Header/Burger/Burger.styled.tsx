import { styled, css } from 'styled-components';

export const StyledBurger = styled.div`
  .burger-menu {
    margin-top: 0.5rem !important;
    margin-right: 0.6rem !important;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    width: 20px;
    height: 14px;
    cursor: pointer;
    z-index: 100;
  }

  .stripe {
    margin-bottom: 0.3rem;
    width: 100%;
    height: 2px;
    background-color: black;
    transition: 0.7s all ease-in-out;
  }
  .stripe-top {
    transform: translateY(6px) rotateZ(45deg);
    height: 3px;
    opacity: 0.8;
  }
  .stripe-middle {
    box-shadow: 0 0 0 0px rgba(222, 192, 222, 0);
    background-color: rgba(222, 192, 222, 0);
  }
  .stripe-bottom {
    transform: translateY(-9px) rotateZ(-45deg);
    height: 3px;
    opacity: 0.8;
  }
`;
