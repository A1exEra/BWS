import styled from 'styled-components';

export const StyledProducts = styled.section`
  display: flex;
  margin-left: 64px;
  margin-right: 64px;
  margin-top: 50px;
  gap: 70px;
  .productCategories {
    min-width: 266px;

  }
  .productSorter {
  
    display: flex;
    justify-content: space-between;
    .sort{
        display: flex;
        gap:10px;
       button{
        background-color:#fff;
        border:none;
       }
       img{
        // background-color:red;
       }
    }
  }
  }
`;
