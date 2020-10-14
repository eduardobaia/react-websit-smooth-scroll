import React, { useState } from 'react';
import Video from '../../videos/video-home.mp4';
import { VideoBg } from './HeroElements';
import { Button } from '../ButtomElement';
import {
    HeroContainer,
    HeroBg,
    HeroContent,
    HeroH1,
    HeroP,
    HeroBtnWrapper,
    ArrowForward,
    ArrowRight
} from './HeroElements';


const HeroSection = () => {
    const [hover, setHover] = useState(false)

    const onHover = () => {
        setHover(!hover)
    };
    return (
        <HeroContainer>
            <HeroBg>
                <VideoBg autoPlay loop muted src={Video} type='video/mp4' />
            </HeroBg>

            <HeroContent>
                <HeroH1>Traing Outdoor </HeroH1>
                <HeroP>
                    Sign up for a new account and start doing better for your body and mind.
            </HeroP>

                <HeroBtnWrapper>
                    <Button to="signup" onMouseEnter={onHover} onMouseLeave={onHover}>
                        Get started {hover ? <ArrowForward /> : <ArrowRight />}
                    </Button>
                </HeroBtnWrapper>
            </HeroContent>
        </HeroContainer>
    )
}

export default HeroSection