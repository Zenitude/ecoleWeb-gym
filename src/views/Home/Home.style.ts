import styled from "styled-components";
import { paral } from "../../assets";

export const HomeContainer = styled.main`

    section:first-of-type {
        padding: 40px 10px;

        h2 {
            text-transform: uppercase;
            font-size: 32px;
            text-align: center;
            font-weight: 500;
            margin-bottom: 40px;
        }

        .cards {
            display: flex;
            align-items: center;
            justify-content: center;
            flex-wrap: wrap;
            gap: 30px;
        }

        article {
            display: flex;
            flex-direction: column;
            width: 100%;
            max-width: 450px;
            min-width: 240px;
            min-height: 625px;
            box-shadow: 0 0 10px var(--main-black);

            div {
                padding: 20px 10px;
            }
        }

        img {
            max-height: 70%;
            object-fit: cover;
        }

        div {
            display: flex;
            flex-direction: column;
        }

        h3 {
            text-align: center;
            font-size: 25px;
            font-weight: 600;
            margin-bottom: 20px; 
        }

        p {
            text-align: center;
            line-height: 1.5;
            font-size: 20px;
        }
    }

    #section2 {
        background-color: var(--main-black);
        color: var(--main-white);
        padding: 40px 10px;
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        gap: 40px;

        article {
            width: 100%;
            max-width: 350px;
            min-width: 240px;

            div {
                display: flex;
                flex-direction: column;
                gap: 20px;
                text-align: center;
            }

            h2 {
                font-size: 2rem;
                font-weight: 500;
            }

            p {
                font-size: 18px;
                line-height: 1.5;
            }

            a {
                color: var(--main-white);
                text-decoration: none;
                border: 1px solid var(--main-white);
                padding: 15px 10px;
                font-size: 1.3rem;
            }
        }
    }

    section:nth-of-type(2) {
        padding: 40px 10px;
        width: 100%;

        h2 {
            margin-bottom: 40px;
            text-transform: uppercase;
            font-size: calc(1.3rem + 1vw);
            text-align: center;
        }

        .images {
            display: flex;
            justify-content: center;
            align-items: center;
            flex-wrap: wrap;
            gap: 20px;
            width: 100%;
            margin: 0 auto;
            max-width: 940px;
            min-width: 240px;
        }

        img {
            width: 30%;
            max-width: 800px;
            min-width: 240px;
            min-height: 340px;
            object-fit: cover;
            object-position: 60% 10%;
        }
    }

    section:nth-of-type(3) {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 400px;
        padding: 40px 10px;
        background: url(${paral}) no-repeat center;
        background-size: cover;
        background-attachment: fixed;
        
        h2 {
            color: var(--main-white);
            font-size: 3rem;
            font-weight: 500;
        }

    }

    section:nth-of-type(4) {
        padding: 40px 10px;

        h2 {
            margin-bottom: 40px;
            text-align: center;
            font-weight: 500;
            font-size: 3rem;
            text-transform: uppercase;
        }

        .cards {
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            gap: 40px;
        }

        article {
            width: 100%;
            max-width: 350px;
            min-width: 260px;
            background: var(--linear-price);
            color: var(--main-white);
            padding: 20px 0;
        }

        h3 {
            text-transform: uppercase;
            text-align: center;
            margin-block: 20px;
            font-size: 2.5rem;
            font-weight: 500;
        }

        .price {
            text-align: center;
            position: relative;
            margin-bottom: 20px;

            strong {
                font-size: 7rem;
            }

            sup {
                font-size: 2rem;
                position: absolute;
                top: 20px;
            }

            span {
                font-size: 2rem;
            }
        }

        ul {
            width: 100%;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            gap: 30px;
        }

        li {
            font-size: 2rem;
            display: flex;
            gap: 10px;
            img {
                width: 30px;
            }
        }
    }

    section:last-of-type {
        padding: 40px 10px;
        border-top: 1px dashed var(--main-black);
        border-bottom: 1px dashed var(--main-black);

        h2 {
            text-align: center;
            padding-bottom: 40px;
            font-size: calc(1.8rem + 1vw);
            font-weight: 500;
        }

        form {
            display: flex;
            flex-direction: column;
            gap: 20px;
            max-width: 400px;
            margin-inline: auto;
        }

        div {
            display: flex;
            flex-direction: column;
            gap: 5px;
        }

        label {
            text-transform: uppercase;
            font-size: 1.2rem;
        }

        input {
            height: 40px;
            padding-left: 10px;
        }

        textarea {
            padding-top: 10px;
            padding-left: 10px;
        }

        button {
            height: 40px;
            font-size: 1.1rem;
        }
    }
`;