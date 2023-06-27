import { ReactNode } from 'react';
import styled from 'styled-components';
import Header from '../Header/Header';
const MainContainer = ({ children }: { children: ReactNode }) => {
  return (
    <MainContainerWrapper>
      <Header />
      <h1 className="heading">GOD OF CODE</h1>
      {children}
    </MainContainerWrapper>
  );
};

const MainContainerWrapper = styled.div`
  max-width: 1440px;
  height: 100%;
  margin: 0 auto;
`;
export default MainContainer;
