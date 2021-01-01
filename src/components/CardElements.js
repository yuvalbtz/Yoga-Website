import styled from 'styled-components';

export const CardsContainer = styled.div`

display: flex;
flex-direction:row;

width:100%;
height:100vh;
justify-content:center;
align-items:center;

@media screen and (max-width:623px){
    flex-direction:column;
    margin:80px 0;
     
   
         
}
`;

export const CardItem = styled.div`
  width:400px;
  height:400px;
  padding:8px;
  
  @media screen and (max-width:623px){
  width:200px;
  max-height:200px;
  padding:0;
    
}
`;