import styled from 'styled-components';

type ProductIdProps = {
  bg?: string;
};
export const ProductId = styled.section<ProductIdProps>`
  width: 1000px;
  display: flex;
  margin: 0 auto;
  .imageContainer {
    padding: 40px;
    background-color: ${({ theme }) => theme.colors.primary || '#FFFFFF'};
  }
  .productDetails {
    background-color: blue;
    h3 {
      color: yellow;
    }
    h5 {
      ${({ theme }) => theme.mixins.primaryFontRegular300}
      text-transform: uppercase;
    }
  }
`;
