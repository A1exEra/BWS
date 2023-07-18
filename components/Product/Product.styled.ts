import styled from 'styled-components';

type ProductIdProps = {
  bg?: string;
};
const ProductId = styled.section<ProductIdProps>`
  display: flex;
  padding: 50px 0 80px 0;
  height:90vh;
  .imageContainer {
    width: 640px;
    height: 457px;
    margin: 0 16px 0 64px;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
  .btn {
    background-color: ${({ theme }) => theme.colors.primary};
    border: none;
    width: 382px;
    padding: 15px;
    color: #fff;
    font-size: 18px;
    cursor: pointer;
  }
  .productDetails {
    max-width: 720px;
    padding: 0 176px 0 96px;
    margin-bottom: 70px;

    // background-color: blue;
    h2 {
      ${({ theme }) => theme.mixins.primaryProductName}
      margin-top:10px;
    }
    h5 {
      ${({ theme }) => theme.mixins.primaryFontRegular300}
      text-transform: uppercase;
    }
    p {
      ${({ theme }) => theme.mixins.primaryFontRegular300}
    }
    h4 {
      margin: 15px 0 10px;
      ${({ theme }) => theme.mixins.primaryProductPrice}
    }
    .optionSelector {
      margin-top: 20px;
      display: flex;
      gap:16px;
      justify-content: space-between;
      align-items: flex-end;
      flex-wrap:wrap;

      .border {
        border: 1px solid rgba(32, 32, 32, 0.15);
        display: flex;
        align-items: center;
        padding: 8px 10px;
        gap: 8px;
      }
    }
    .buyComponent {
      margin: 40px 0;
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 16px;
      .wish {
        display: flex;
        align-items: center;
        justify-content: center;
        border: 1px solid rgba(32, 32, 32, 0.15);
        width: 50px;
        height: 50px;
        padding: 15px;
      }
    }
    .additionalInfo {
      p {
        ${({ theme }) => theme.mixins.primarySidebarTitle}
      }
      border-bottom: 1px solid rgba(32, 32, 32, 0.15);
      .singleInfo {
        border-top: 1px solid rgba(32, 32, 32, 0.15);
        padding: 15px 0;
        display: flex;
        align-items: center;
        justify-content: space-between;
        .small-arrow {
          width: 20px;
          height: 20px;
        }
      }
    }
  }
  @media (max-width: 1440px) {
    flex-direction: column;
    gap: 56px;
    align-items: center;
    height: 100%;
    .productDetails {
      // width: auto;
      padding: 0px;
      margin: 0px auto;
    }
    .imageContainer {
      width: 80%;
      height: auto;
      margin: 0px auto;
    }
  @media (max-width: 540px) {
    flex-direction: column;
    gap: 56px;
    align-items: center;
    height: 100%;
    .productDetails {
      width: 100%;
      padding: 0px 8px;
      margin: 0px;
    }
    .imageContainer {
      width: 100%;
      height: auto;
      margin: 0px 8px;
    }
  }
`;

export default ProductId;
