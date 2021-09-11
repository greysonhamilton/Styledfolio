import styled from "styled-components";
import desktop from "../Assets/images/desktop.jpg";

export const Build=styled.div`

    display: flex;
    flex-direction: column;
    background-image: url(${desktop});
    background-repeat: no-repeat;
    background-attachment: scroll;
    background-position: right bottom;
    background-size: cover;
    height: 100vh;
    width: 100%;
`;

export const H1=styled.h1 `

    padding: 2%;
    fontsize: 3rem;
`;

export const Div=styled.div `

    display: flex;

`;

export const Main=styled.div `

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;

`;

export const Animate=styled.div `

    display: flex;
    flex-wrap: wrap;
    align-content: stretch;
    margin: 20% 0 0 20%;

`;

export const Heading=styled.div `

    display: flex;

`;

export const Footer=styled.div `

    display: flex;

`;

export const About=styled.div `

    display: flex;
    position: relative;
    margin: 20% 0 10%;
    cursor: pointer;

`;

export const Ul=styled.ul `

    display: flex;
    flex-direction: column;

`;

export const Li=styled.li `

    display: flex;

`;