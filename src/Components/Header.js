import React, { useState } from 'react';
import styled from 'styled-components';

const Heading = styled.div`

    display: flex;
    flex-direction: column;
    width: 12%;
    background-color: rgb(19, 19, 57,0.7);
    margin: 3% 0 1% 80%;
    padding: 1%;
    height: 2vh;

`;

const Container = styled.div`

    display: flex;
    width: 100%;
    padding: 1%;
    color: white;
    justify-content: center;
    
`;

const Ul = styled.ul `

    display: flex;
    flex-direction: column;
    width: 12%;
    margin: 2.25% 0 0 -1%;
    padding: 1%;
    background-color: rgb(19, 19, 57,0.7);
    position: absolute;

`;

const Li = styled.li`

    display: flex;
    justify-content: center;
    
`;

const Anchor = styled.a`

    color: white;
    text-decoration: none;
    
    &:link, &:visited {
        text-decoration: none;
        color: white;
    }
`;

const Header = ({ title, items }) => {

    const [click, setClick] = useState(false);

    const toggle = () => setClick(!click);

    return (

        <Heading>
            <Container tabIndex={0} role="button" onClick={() => toggle(!click)}>
                {title}
            </Container>
            {click && (
                <Ul>
                    {items.map((item, i) => (
                        <Li key={item.id}>
                                <Anchor href={item.url} alt={item.title} target="_blank"rel="noreferrer">{item.title}</Anchor>
                        </Li>
                    ))}
                </Ul>
            )}
        </Heading>
    )
}

export default Header;