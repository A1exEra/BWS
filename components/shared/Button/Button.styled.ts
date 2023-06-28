import styled from 'styled-components';

export const StyledButton = styled.div`
  button {
    background-color: ${({ theme }) => theme.colors.primary};
    border: none;
    width: 382px;
    padding: 15px;
    color: #fff;
    font-size: 18px;
  }
`;
