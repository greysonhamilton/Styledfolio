import React from 'react';
import styled from 'styled-components';

const Container = styled.div`

    display: flex;


`;
const Footing = () => {

    return (

        <>
            <Container>
                <span><img src="../assets/svg/001-gmail.svg" alt="Gmail Icon"/></span>
                <span><img src="../assets/svg/002-linkedin.svg" alt="LinkedIn Icon"/></span>
                <span><img src="../assets/svg/003-github-sign.svg" alt="GitHub Icon"/></span>
            </Container>
            <div>Icons made by <a href="https://www.freepik.com" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
        </>
    )

};

export default Footing;