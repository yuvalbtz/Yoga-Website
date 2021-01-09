import PropTypes from "prop-types"
import React, {useEffect, useState} from "react"
import { FaBars, FaTimes } from 'react-icons/fa';
import logo from '../images/logo_6_cp.jpg'
import {
  Nav,
  NavbarContainer,
  NavLogo,
  NavTitle,
  LinkList,
  MobileIcon,
  NavMenu,
  LinkStyle
} from './NavBarElements';



const Header = ({ siteTitle }) => {
  
  const [click, setClick] = useState(false)
  const [scroll, setScroll] = useState(false)
  
  const changNav = () => {
    if(window.scrollY >= 80){
      setScroll(true)
    }else{
         setScroll(false)
        
        }
    }
  
 useEffect(() => {
    changNav()

   window.addEventListener("scroll", changNav)
    
   return function cl(){window.removeEventListener("scroll", changNav)}  
     
  },[])

  const handleOnclick  = () => setClick(!click)
  
  return (
    <>
    <header>

    <Nav active={scroll} click={click}>
      <NavbarContainer>
         <NavLogo active={scroll.toString()} click={click.toString()} onClick={handleOnclick} to="/" >
         <img src={logo} width={60} height={60} style={{borderRadius:"50%", padding:0, margin:0}} />
        </NavLogo>
        <NavTitle className="title-logo">{siteTitle}
        
        <div className="sub-title-logo">Yoga teacher - Private & groups classes</div>
        
        </NavTitle>
        
        <LinkList>
        
        </LinkList>
      </NavbarContainer>
      <MobileIcon onClick={handleOnclick}>
        {click ? <FaTimes/> : <FaBars/>}
        
      </MobileIcon>
      <NavMenu onClick={handleOnclick} click={click}>
      <LinkStyle paintDrip hex="#14A7A7" duration={0.8} to="/about/" activeStyle={{ borderRadius:'50%',borderTop: '2px solid white', transform:'translate(0px,-12px)' }} >
        קצת עלי 
        </LinkStyle>

       <LinkStyle   cover direction="up"  bg="#14A7A7" to="/yogaVids/" activeStyle={{ borderRadius:'50%',borderTop: '2px solid white', transform:'translate(0px,-12px)' }} >
        סרטוני יוגה
        </LinkStyle>

        <LinkStyle   cover direction="left"  bg="#14A7A7" to="/yogaGallery/" activeStyle={{ borderRadius:'50%',borderTop: '2px solid white', transform:'translate(0px,-12px)' }} >
        גלריית יוגה
        </LinkStyle>

        <LinkStyle   cover direction="right" bg="#14A7A7" to="/" activeStyle={{ borderRadius:'50%',borderTop: '2px solid white', transform:'translate(0px,-12px)' }}  >
        דף הבית
        </LinkStyle>
      </NavMenu>
   </Nav>

    </header>
  </>
)
}
Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
