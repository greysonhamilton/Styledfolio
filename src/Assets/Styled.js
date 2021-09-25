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
    width: 100%;
    height: 86vh;
    font-size: 1.7rem;

`;

export const Animate=styled.div `

    display: flex;
    flex-direction: column;
    margin: 23% 0 0 18%;
    width: 40%;
    justify-content: space-around;

`;

export const Skill = styled.div`

    text-align: center;
    height: 5vh;

`;

export const P = styled.p`

    width: 34%;
    color: white;
    background-color: rgb(0,0,0,0.5);

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
    margin: 5% 2%;
    color: white;
    height: 40vh;

`;

export const Ul=styled.ul `

    display: flex;
    width: 50%;
    font-size: 1.4rem;
    background-color: rgba(0,0,0,0.7);
    margin: 15% 0.5%;
    position: absolute;

`;

export const Li=styled.li `

    display: flex;

`;