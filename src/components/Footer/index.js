import React from 'react'
import {
    FooterContainer,
    FooterWrap,
    FooterLinksContainer,
    FooterLinksWrapper,
    FooterLinkItems,
    FooterLinkTitle,
    FooterLink
} from './FooterElements';

const Footer = () => {
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
                </FooterLinksContainer>
            </FooterWrap>
        </FooterContainer>
    )
}

export default Footer
