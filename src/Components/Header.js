import React, { useState } from 'react';
import styled from 'styled-components';

const Heading = styled.div`

    display: flex;

`;

const Container = styled.div`

    display: flex;

`;

const Ul = styled.ul `

    display: flex;
    flex-direction: column;

`;

const Li = styled.li`

    display: flex;
    
`;

const Anchor = styled.a`

    color: white;
    text-decoration: none;

    &:focus, &:visited &:link &:active {

        text-decoration: none;
        color: black;

    }

    &:hover {

        text-decoration: none;
        color: blue;
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