import React from 'react';
import styled from 'styled-components';
import github from '../Assets/images/github.png';
import gmail from '../Assets/images/gmail.png';
import linkedin from '../Assets/images/linkedin.png';

const Footing = styled.div`

    display: flex;
    width: 100%;
    align-self: center;
    height: 7vh;
    
`;

const Container = styled.div`

    display: flex;
    width: 100%;
    justify-content: space-evenly;
`;

const Social = styled.a`

    align-self: center;
    
    `;

const SocialImg = styled.img`

    width: 30%;
    align-self: center;

`;

const Footer = () => {

    return (

        <Footing>
            <Container>
                <Social href="mailto:greyson.r.hamilton@gmail.com" target="_blank"rel="noreferrer">
                    <SocialImg src={gmail} alt="Gmail Icon"/>
                </Social>
                <Social href="https://www.linkedin.com/in/greyson-hamilton-61b515185/" target="_blank"rel="noreferrer">
                    <SocialImg src={linkedin} alt="LinkedIn Icon"/>
                </Social>
                <Social href="https://github.com/greysonhamilton" target="_blank"rel="noreferrer">
                    <SocialImg src={github} alt="GitHub Icon"/>
                </Social>
            </Container>
        </Footing>
    )

};

export default Footer;