/* eslint-disable react-refresh/only-export-components */
import React from 'react';
import ReactDOM from 'react-dom/client';
import Layout from './components/Layout/Layout';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  *, ::before, ::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  :root {
    --main-white: rgba(255,255,255,1);
    --main-black: rgba(0,0,0,1);
    --linear-hero: linear-gradient(to right, #000 40%, rgba(0,0,0,0.1));
    --font-title: 'Montserrat', Helvetica, sans-serif;
    --font-text: 'Roboto', Arial, sans-serif;
  }

  html, body, #root {
    width: 100%;
    height: 100%;
    font-family: var(--font-text);
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: var(--font-title);
  }

`;

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <GlobalStyle />
    <Layout />
  </React.StrictMode>,
)
