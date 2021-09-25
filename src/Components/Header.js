import React, { useState } from 'react';
import styled from 'styled-components';

const Heading = styled.div`

    display: flex;
    flex-direction: column;
    font-size: 1.8rem;
    background-color: rgb(19, 19, 57,0.7);
    justify-content: center;
    margin: 2% 0 1% 65%;
    height: 5vh;

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
    width: 18%;
    margin: 3% 0 0 -1%;
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
    font-size: 1.4rem;
    padding: 2%;
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