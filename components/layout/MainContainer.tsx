import { ReactNode } from 'react';
import styled from 'styled-components';

const MainContainer = ({ children }: { children: ReactNode }) => {
  return (
    <MainContainerWrapper>
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
