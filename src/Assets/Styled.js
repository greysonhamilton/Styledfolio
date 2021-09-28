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

    @media (min-width: 500px) {
        font-size: 2.2rem;
    }
    
    @media (min-width: 750px) {
        font-size: 2.4rem;
    }
`;

export const Animate=styled.div `

    display: flex;
    flex-direction: column;
    margin: 28% 0 0;
    width: 80%;
    justify-content: space-evenly;

    @media (min-width: 1024px) {
        width: 100%;
        margin: 15% 0 0 40%;
    }
`;

export const Skill = styled.div`

    text-align: center;
    height: 5vh;

`;

export const P = styled.p`

    width: 100%;
    color: white;
    background-color: rgb(0,0,0,0.6);

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
    width: 100%;
    height: 40vh;

`;

export const Ul=styled.ul `

    display: flex;
    width: 45%;
    font-size: 1.4rem;
    background-color: rgba(0,0,0,0.7);
    margin: 13% 0;
    padding: 1%;
    overflow-y: auto;
    position: absolute;

    @media (min-width: 500px) {
        font-size: 1.7rem;
    }
    
    @media (min-width: 750px) {
        font-size: 2rem;
        margin: 6% 0;
    }
`;

export const Li=styled.li `

    display: flex;

`;