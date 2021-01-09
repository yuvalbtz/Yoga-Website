import { Link } from 'gatsby';
import styled from 'styled-components';
import AniLink from "gatsby-plugin-transition-link/AniLink"
export const Nav = styled.nav`
  background: ${({active}) => active ? "transparent" : "#14A7A7" };
  width:100%;
  height: 80px;
  display:flex;
  justify-content:center;
  align-items:center;
  font-size:1rem;
  position:fixed;
  top:0;
  z-index:10;
  transition: 0.8s all ease;
  @media screen and (max-width:960px){
    background: ${({click}) => click ? "#14A7A7" : "transparent"};
    
    
  }

`;

export const NavbarContainer = styled.div`

display:flex;
align-items:center; 
height:80px;
z-index:1;
width:100%;
max-width:1000px;

`;

export const NavLogo = styled(Link)`
border-top: 2px solid white;
border-radius:50%;
justify-content:flex-start;
cursor:pointer;
font-size:1.5rem;
display:flex;
margin-left:12px;
border-top:${({active}) => active === "false" ? "2px solid white" : "none"};
@media screen and (max-width:960px){
border-top:${({click}) => click === "true" ? "2px solid white" : "none"};

}

`;



export const NavTitle = styled.h2`

display:flex;
flex-direction:column;
justify-content:flex-end;
color:#F1F9FD;
padding:12px 12px 0px 12px;
margin:0;
`;  

export const LinkList = styled.ul`
display:flex;
 justify-content:flex-end;


`;


export const MobileIcon  = styled.div`

display: none;


@media screen and (max-width:960px ){
  color:#F1F9FD;
  z-index:11;
  display:block;
  position:absolute;
  top:0;
  right:0;
  transform: translate(-60%, 60%);
  font-size:1.8rem;
  cursor:pointer;
 
}
`;


export const NavMenu = styled.ul`
display:flex;
align-items:center;
text-align:center;
white-space:nowrap;
padding:0;
margin:0;

@media screen and (max-width:960px ){
  display:flex;
  flex-direction:column-reverse;
  justify-content:center;
  width:100%;
  height:90vh;
  position:absolute;
  top:${({click}) => click ? "100%" : "-1000px"};
  opacity:1;
  background:#14A7A7;
  overflow-y:auto;
  padding:40px 0 40px 0;
  transition: all 0.2s ease;
  box-shadow: 0 0 1px rgba(0, 0, 0, 0.05);
}

`;



export const LinkStyle = styled(AniLink)`

    font-weight: bold;
    font-family: 'Amatic SC', cursive;
    color: whitesmoke;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem 0rem 1rem;
    height: 100%;
    cursor: pointer;
    font-size: 1.2rem;
    transition:all 0.2s ease;
    &:hover {
      border-top:1px solid white;
      border-radius:50%;
      transform: translate(0px,-12px);
      
    }

    @media screen and (max-width:960px ){
      padding: 0;
      font-size: 2rem;
      align-items:none;
      height:8rem;
      &:hover {
      border-top:1px solid white;
      border-radius:50%;
      transform: translate(0px,-12px);
      
    }
    }

`;

export const activeLink = styled.div`
color:black;
`;