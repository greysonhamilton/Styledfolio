import React, { useState } from 'react';
// import onClickOutside from 'react-onclickoutside';
import styled from 'styled-components';

const Heading = styled.div`

    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    min-height: 10vh;
    position: relative;
    width: 100%;

`;

const Container = styled.div`

    display: flex;
    position: absolute;
    flex-direction: column;
    padding: 0 10%;
    width: 30%;
    background-color: orange;
    justify-content: space-evenly;
    z-index: 1;

`;

const Ul = styled.div `

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    margin-top: 10%;
    text-align: center;

`;

const Li = styled.a`

    display: flex;
    flex-direction: column;
    width: 100%;
    justify-content: center;
    align-items: center;
    fontsize = 1.5rem;
    
`;

const Header = ({ title, items }) => {

    const [click, setClick] = useState(false);

    const toggle = () => setClick(!click);

    // Header.handleClickOutside = () => setClick(false);

    return (

        <Heading>
            <Container tabIndex={0} role="button" onClick={() => toggle(!click)}>
                {title}
            </Container>
            {click && (
                <Ul>
                    {items.map((item, i) => (
                        <Li key={item.id}>
                            <button>
                                <span><a href={item.url} alt={item.title} target="_blank" rel="noreferrer">{item.title}</a></span>
                            </button>
                        </Li>
                    ))}
                </Ul>
            )}
        </Heading>
    )
}

// const clickOutsideConfig = {

//     handleClickOutside: () => Header.handleClickOutside,

// };

// export default onClickOutside(Header, clickOutsideConfig);

export default Header;