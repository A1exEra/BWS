import { styled, css } from 'styled-components';
import MainImage from '../../public/images/MainImage.jpg';
import MainButton from '../shared/MainButton';
const HeroSection = () => {
  return (
    <StyledHeroSection>
      <h1>Upscale Your Home With Natural Stone</h1>
      <h4>
        We help you to choose suitable pavers for your home and <br /> invite
        you to shop in our store.
      </h4>
      <MainButton
        className="MainButton"
        label="Shop Now"
        backgroundColor="#536758"></MainButton>
    </StyledHeroSection>
  );
};

export default HeroSection;

const StyledHeroSection = styled.div`
  background-image: url(${MainImage.src});
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 900px;
  padding: 10%;
  h1 {
    color: ${({ theme }) => theme.colors.whitePrimary};
    ${({ theme }) => theme.mixins.primaryHeading700};
  }
  h4 {
    margin-top: 30px;
    margin-bottom: 50px;
    color: ${({ theme }) => theme.colors.whitePrimary};
    ${({ theme }) => theme.mixins.primaryHeroRegular}
  }
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    h1 {
      //   ${({ theme }) => theme.mixins.productTitle46};
      font-size: ${({ theme }) => theme.fontSizes.text46px};
      letter-spacing: 3px;
      //   margin: 70px 0;
    }
  }
`;
