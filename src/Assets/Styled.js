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
    width: 100%;
    height: 100vh;
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

`;

export const Animate=styled.div `

    display: flex;
    margin: 0 1% 0 1%;
    height: 39vh;

`;

export const Heading=styled.div `

    display: flex;

`;

export const Footer=styled.div `

    display: flex;

`;

export const About=styled.div `

    display: flex;
    flex-direction: column;
    margin: 0 2% 0;
    color: white;
    height: 37vh;

`;

export const Ul=styled.ul `

    display: flex;
    width: 46%;
    margin: 3% 0.5%;
    position: absolute;

`;

export const Li=styled.li `

    display: flex;

`;