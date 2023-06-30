import { styled } from 'styled-components';
import MainButton from '../shared/MainButton';
const FindADealer = () => {
  return (
    <StyledDealer>
      <div className="container">
        <h3>FIND A DEALER</h3>
        <p>
          Our dealers located throughout Ontario, Quebec, and North-East
          Michigan can help you visualize your stone solution and pair the right
          tiles for your project to build a customized solution.{' '}
        </p>
      </div>
      <div className="MainButtonContainer">
        <MainButton
          className="MainButton"
          label="Get inTouch"
          backgroundColor="#2a2a2a"></MainButton>
      </div>
    </StyledDealer>
  );
};

const StyledDealer = styled.div`
  background-color: ${({ theme }) => theme.colors.secondary};
  display: flex;
  flex-direction: row;
  //   flex-wrap: wrap;
  gap: 64px;
  align-items: center;
  justify-content: space-between;
  padding: 100px 176px;
  .MainButtonContainer {
    width: 200px;
  }
  .container {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    gap: 20px;
    h3 {
      ${({ theme }) => theme.mixins.primaryHeroRegular}
      color: ${({ theme }) => theme.colors.whitePrimary};
    }
    p {
      ${({ theme }) => theme.mixins.primaryComponentTitle}
      color: ${({ theme }) => theme.colors.whitePrimary};
      opacity: 0.6;
    }
  }
  @media (max-width: 1000px) {
    flex-direction: column;
  }
  @media (max-width: 768px) {
    padding: 100px 2rem;
  }
`;
export default FindADealer;
