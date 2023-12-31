import styled from 'styled-components';

export const StyledProducts = styled.section`
.productsList {
  height:100%;
  width:100%;
 
}
  display: flex;
  
  margin-left: 64px;
  margin-right: 64px;
  margin-top: 50px;
  margin-bottom: 80px;
  gap: 70px;
  .products{
    // height:100%;
    margin-top: 25px;
    display: flex;
    gap: 32px;
    flex-wrap: wrap;
}

  .productSorter {
    max-width:976px;
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
            button{
                cursor:pointer;
             background-color:#fff;
             border:none;
             
             ${({ theme }) => theme.mixins.secondarySidebar}
             color: #536758;
             font-Weight:400;
         }
         img{
            cursor:pointer;
         }
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
