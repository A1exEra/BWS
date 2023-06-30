import styled from 'styled-components';

export const StyledCategories = styled.div`
  h5 {
    ${({ theme }) => theme.mixins.primarySidebarTitle}
  }
`;
