import React from 'react';
import styled from 'styled-components';

const Footing = styled.div`

    display: flex;
    
`;

const Container = styled.div`

    display: flex;

`;

const Footer = () => {

    return (

        <Footing>
            <Container>
                <img src="" alt="Gmail Icon"/>
                <img src="" alt="LinkedIn Icon"/>
                <img src="" alt="GitHub Icon"/>
            </Container>
        </Footing>
    )

};

export default Footer;