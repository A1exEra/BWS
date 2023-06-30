import styled from 'styled-components';

export const StyledProductCard = styled.div`
  margin-top: 25px;
  display: flex;
  gap: 32px;
  flex-wrap: wrap;
  justify-content: center;
  .product {
    text-align: center;
    width: 304px;
    background-color:${({ theme }) => theme.colors.whitePrimary};
    box-shadow: 0px 2px 10px 0px rgba(0, 0, 0, 0.2);
    &:hover{
        box-shadow: 0px 2px 12px 2px rgba(0, 0, 0, 0.2);
    
      }
    h3 {
      text-transform: uppercase;
      padding: 13px 10px;
      color: ${({ theme }) => theme.colors.primary};
      ${({ theme }) => theme.mixins.primaryProductCard}
    }
    .priceContainer {
        display: flex;
        justify-content: space-between;
        border: 1px solid  #E5E5E5};
        p {
            width: 185px;
            padding: 11px;
        color: #2b2b2b;
        border-right: 1px solid #E5E5E5;
      }
      .heart{
        width:60px;
        // padding:10px 18px 9px;
        border-right: 1px solid #E5E5E5;
        display: flex;
        justify-content: center;
        align-items: center;
      }
      .cart{
        width:60px;

        // padding:11px 10px 11px 5px;

        display: flex;
        justify-content: center;
        align-items: center;
      
      }
    }
  }
`;
