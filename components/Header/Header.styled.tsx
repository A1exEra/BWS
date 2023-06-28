import styled, { css } from 'styled-components';

export const StyledHeader = styled.div`
  background-color: ${({ theme }) => theme.colors.primary};
  h1 {
    ${({ theme }) => theme.mixins.primaryHeroRegular};
  }
`;
