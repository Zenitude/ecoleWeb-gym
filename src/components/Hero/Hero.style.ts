import styled from "styled-components";
import bgImage from '../../assets/gym-accueil.jpg';

export const HeroContainer = styled.div`
    height: 500px;
    background: var(--linear-hero), url(${bgImage}) no-repeat top right ;
    background-position: 72% 10%;
    color: var(--main-white);

    h1 {
        margin: 100px 10px 20px;
        font-weight: normal;
        text-transform: uppercase;
        font-size: calc(2.2rem + 1.7vw);
    }

    p {
        line-height: 2;
        margin-left: 10px;
        font-size: 1.5rem;
    }

    .actions {
        margin-top: 20px;
        display: flex;
        gap: 15px;
        padding-left: 10px;
    }

    a {
        color: var(--main-white);
        text-decoration: none;
        border: 1px solid var(--main-white);
        border-radius: 5px;
        padding: 10px;
    }
`;