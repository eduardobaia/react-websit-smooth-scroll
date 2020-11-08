import React from 'react';
import { FaFacebook, FaInstagram, FaYoutube } from 'react-icons/fa'
// import {
//     FooterContainer,
//     FooterWrap,
//     FooterLinksContainer,
//     FooterLinksWrapper,
//     FooterLinkItems,
//     FooterLinkTitle,
//     FooterLink
// } from './FooterElements';
import { animateScroll as scroll } from 'react-scroll';
import {
    FooterContainer,
    FooterWrap,
    FooterLinksContainer,
    FooterLinksWrapper,
    FooterLinkItems,
    FooterLinkTitle,
    FooterLink,
    SocialMedia,
    SocialMediaWrap,
    SocialLogo,
    WebSiteRights,
    SocialIconLink,
    SocialIcons
} from './FooterElements';

const Footer = () => {

    const toggleHome = () => {
        scroll.scrollToTop();
    };


    return (
        <FooterContainer>
            <FooterWrap>
                <FooterLinksContainer>
                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle> About US </FooterLinkTitle>
                            <FooterLink to="/signin"> Home</FooterLink>
                            <FooterLink to="/signin"> Services</FooterLink>
                            <FooterLink to="/signin">Contact</FooterLink>
                            <FooterLink to="/signin"> About us</FooterLink>
                            <FooterLink to="/signin"> Sign In</FooterLink>

                        </FooterLinkItems>
                        <FooterLinkItems>
                            <FooterLinkTitle> About US </FooterLinkTitle>
                            <FooterLink to="/signin"> Home</FooterLink>
                            <FooterLink to="/signin"> Services</FooterLink>
                            <FooterLink to="/signin">Contact</FooterLink>
                            <FooterLink to="/signin"> About us</FooterLink>
                            <FooterLink to="/signin"> Sign In</FooterLink>

                        </FooterLinkItems>


                    </FooterLinksWrapper>


                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle> Videos</FooterLinkTitle>
                            <FooterLink to="/signin"> Home</FooterLink>
                            <FooterLink to="/signin"> Services</FooterLink>
                            <FooterLink to="/signin">Contact</FooterLink>
                            <FooterLink to="/signin"> About us</FooterLink>
                            <FooterLink to="/signin"> Sign In</FooterLink>

                        </FooterLinkItems>
                        <FooterLinkItems>
                            <FooterLinkTitle> Social Media</FooterLinkTitle>
                            <FooterLink to="/signin"> Home</FooterLink>
                            <FooterLink to="/signin"> Services</FooterLink>
                            <FooterLink to="/signin">Contact</FooterLink>
                            <FooterLink to="/signin"> About us</FooterLink>
                            <FooterLink to="/signin"> Sign In</FooterLink>

                        </FooterLinkItems>


                    </FooterLinksWrapper>
                </FooterLinksContainer>


                <SocialMedia>
                    <SocialMediaWrap>
                        <SocialLogo to='/' onClick={toggleHome}>IRON TEAM </SocialLogo>
                        <WebSiteRights>IRON TEAM © {new Date().getFullYear()} All rights reserved.</WebSiteRights>
                        <SocialIcons>
                            <SocialIconLink href="/" target="_blank"
                                arial-label="Facebook">
                                <FaFacebook />
                            </SocialIconLink>
                            <SocialIconLink href="/" target="_blank"
                                arial-label="Instagram">
                                <FaInstagram />
                            </SocialIconLink>

                            <SocialIconLink href="/" target="_blank"
                                arial-label="Youtube">
                                <FaYoutube />
                            </SocialIconLink>



                        </SocialIcons>
                    </SocialMediaWrap>
                </SocialMedia>

            </FooterWrap>
        </FooterContainer>
    )
}

export default Footer
