import React, { useState, useEffect } from 'react';
import { FaBars } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';
import { animateScroll as scroll } from 'react-scroll';
import {
    Nav,
    NavbarContainer,
    NavLogo, NavItem,
    MobileIcon, NavLinks,
    NavMenu, NavBtn, NavBtnLink,
    Img
} from './NavbarElements';

const Navbar = ({ toggle }) => {
    const [scrollNav, setScrollNav] = useState(false);

    const changeNav = () => {
        if (window.scrollY >= 80) {
            setScrollNav(true);
        } else {
            setScrollNav(false);
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', changeNav)
    }, []);



    const toggleHome = () => {
        scroll.scrollToTop();
    };

    return (
        <>         
            <IconContext.Provider value={{ color: 'red' }}>
                <Nav scrollNav={scrollNav}>
                    <NavbarContainer>
            
                        <NavLogo to="/" onClick={toggleHome}>iron
                    
                       
                        </NavLogo>
                        <MobileIcon onClick={toggle}> <FaBars />
                        </MobileIcon>
                        <NavMenu>
                            <NavItem>
                                <NavLinks to="/" onClick={toggleHome}
                                    smooth={true} duration={500} spy={true} exact='true' offset={-80}
                                >Home</NavLinks>
                            </NavItem>
                            <NavItem>
                                <NavLinks to="services"
                                    smooth={true} duration={500} spy={true} exact='true' offset={-80} activeClass="active"
                                >Services</NavLinks>
                            </NavItem>
                            <NavItem>
                                <NavLinks to="about"
                                    smooth={true} duration={500} spy={true} exact='true' offset={-80} activeClass="active"
                                >Contact</NavLinks>
                            </NavItem>
                            <NavItem>
                                <NavLinks to="contact"
                                    smooth={true} duration={500} spy={true} exact='true' offset={-80} activeClass="active"
                                >About</NavLinks>
                            </NavItem>
                            <NavItem>
                                <NavLinks to="signpu">Sign Up</NavLinks>
                            </NavItem>

                        </NavMenu>
                        <NavBtn>
                            <NavBtnLink to="/signin">Sign In</NavBtnLink>
                        </NavBtn>

                    </NavbarContainer>

                </Nav>
            </IconContext.Provider>
        </>
    )
}

export default Navbar;
