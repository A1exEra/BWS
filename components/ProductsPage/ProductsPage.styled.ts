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
    align-items: center;
    
    .sort{
        display: flex;
        gap:10px;
        align-items:center;
        .sortButton{
            display: flex;
            gap: 5px;
            align-items: center;
        }
       button{
        background-color:#fff;
        border:none;
        
        ${({ theme }) => theme.mixins.secondarySidebar}
        color: #536758;
        font-Weight:400;
    }
    p{
           ${({ theme }) => theme.mixins.primarySidebarTitle}
           font-weight:400;

       }
       img{
       
       }
    }
  }
  }
`;
