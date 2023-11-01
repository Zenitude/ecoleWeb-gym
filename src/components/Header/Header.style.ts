import styled from "styled-components";

export const HeaderContainer = styled.header`
    width: 100%;
    height: 70px;
    position: fixed;
    top: 0;

    .menu {
        position: absolute;
        left: 10px;
        top: 10px;
        width: 40px;
        height: 40px;
        background: transparent;
        border: none;
        cursor: pointer;
        color: var(--main-white);
    }
`;

export const Navigation = styled.nav`
    width: 100%;
    height: 100%;
`;

export const ListNav = styled.ul`
    width: 100%;
    min-height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    list-style-type: none;
    text-transform: uppercase;
    flex-direction: column;
    margin-top: 70px;
    backdrop-filter: blur(8px);

    li {
        width: 100%;
        line-height: 70px;
        text-align: center;
        border-bottom: 2px solid var(--main-white);

        &:first-of-type {
            border-top: 2px solid var(--main-white);
        }

        &:hover {
            box-shadow: inset 0 0 5px var(--main-white);
        }

        a {
            text-decoration: none;
            color: var(--main-white);
            border: none;
            padding: 0;
            position: relative;
        }

        &:hover a {
            font-weight: bold;
        }
    }

    @media (min-width: 325px) {
        flex-direction: row;
        gap: calc(5px + 4vw);
        padding-inline: 10px;
        margin-top: 0;
        backdrop-filter: blur(0);

        li {
            width: auto;
            border: none;

            &:first-of-type {
                border: none;
            }

            &:hover {
                box-shadow: none;
            }

            a::after {
                content: '';
                position: absolute;
                bottom: -10px;
                left: 0;
                width: 30%;
                height: 3px;
                background-color: rgba(255,255,255,0.2);
                transition: width 1s ease-in-out, background-color 0.5s ease-in-out;
            }

            &:hover a::after {
                width: 100%;
                background-color: var(--main-white);
            }
        }
    }

    
`;