import styled from 'styled-components';

type ProductIdProps = {
  bg?: string;
};
const ProductId = styled.section<ProductIdProps>`
  display: flex;
  padding: 50px 0 80px 0;
  .imageContainer {
    position: relative;

    width: 640px;
    height: 457px;
    margin: 0 16px 0 64px;
    img {
      position: absolute;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
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
      justify-content: space-between;
      align-items: flex-end;

      //   .colors {
      //     p {
      //       ${({ theme }) => theme.mixins.primarySidebarTitle}
      //       margin-top: 0;
      //       margin-bottom: 10px;
      //     }
      //     .choices {
      //       display: flex;
      //       gap: 5px;
      //       .choice {
      //         cursor: pointer;
      //       }
      //     }
      //   }
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
`;

export default ProductId;
