import React from 'react';
import { ServicesContainer, ServicesH1, ServicesH2, ServicesWrapper, ServicesIcon, ServicesP, ServicesCard }
    from './ServicesElements';
import Icon1 from '../../images/workout1.svg';
import Icon2 from '../../images/gym.svg';
import Icon3 from '../../images/icon3.svg';

const Services = () => {
    return (
        <ServicesContainer id="services">
            <ServicesH1>
                Our services.
            </ServicesH1>
            <ServicesWrapper>
                <ServicesCard>
                    <ServicesIcon src={Icon1}></ServicesIcon>
                    <ServicesH2>Be health anywhere</ServicesH2>
                    <ServicesP>We help you to take care of your welness wherever you are.</ServicesP>
                </ServicesCard>

                <ServicesCard>
                    <ServicesIcon src={Icon2}></ServicesIcon>
                    <ServicesH2>Videocall support</ServicesH2>
                    <ServicesP>You can schedule one session by videocall when you need.</ServicesP>
                </ServicesCard>


                <ServicesCard>
                    <ServicesIcon src={Icon3}></ServicesIcon>
                    <ServicesH2>Gym support</ServicesH2>
                    <ServicesP>Create a plan workout.</ServicesP>
                </ServicesCard>
            </ServicesWrapper>
        </ServicesContainer>
    )
}

export default Services
