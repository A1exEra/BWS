import styled, { css } from 'styled-components';

export const StyledHeader = styled.div`
  background-color: ${({ theme }) => theme.colors.primary};
  p {
    ${({ theme }) => theme.mixins.primaryHeroRegular};
  }
  // Add more styles using the color, font, and mixin variables
`;
