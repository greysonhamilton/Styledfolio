import React, { useState } from 'react';
import styled from 'styled-components';

const Heading = styled.div`

    display: flex;
    flex-direction: column;
    height: 15vh;

`;

const Container = styled.div`

    display: flex;
    margin: 3% 2% 1% 80%;
    padding: 1%;
    color: white;
    background-color: rgb(19, 19, 57,0.7);
    justify-content: center;

`;

const Ul = styled.ul `

    display: flex;
    flex-direction: column;
    align-self: flex-end;
    background-color: rgb(19, 19, 57,0.7);
    margin: 8% 2% 3% 80%;
    padding: 1%;
    position: absolute;

`;

const Li = styled.li`

    display: flex;
    
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
                                <span><Anchor href={item.url} alt={item.title} target="_blank" rel="noreferrer">{item.title}</Anchor></span>
                        </Li>
                    ))}
                </Ul>
            )}
        </Heading>
    )
}

export default Header;