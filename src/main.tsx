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
    --bg-white: #f1f1f1;
    --main-black: rgba(0,0,0,1);
    --linear-hero: linear-gradient(to right, #000 40%, rgba(0,0,0,0.1));
    --font-title: 'Montserrat', Helvetica, sans-serif;
    --font-text: 'Roboto', Arial, sans-serif;
    --linear-price: 
      repeating-linear-gradient(22.5deg, rgba(255,255,255,0.05) 0px, rgba(255,255,255,0.05) 1px,transparent 1px, transparent 31px,rgba(255,255,255,0.05) 31px, rgba(255,255,255,0.05) 32px,transparent 32px, transparent 92px),
      repeating-linear-gradient(112.5deg, rgba(255,255,255,0.05) 0px, rgba(255,255,255,0.05) 1px,transparent 1px, transparent 31px,rgba(255,255,255,0.05) 31px, rgba(255,255,255,0.05) 32px,transparent 32px, transparent 92px),
      repeating-linear-gradient(0deg, rgba(255,255,255,0.05) 0px, rgba(255,255,255,0.05) 1px,transparent 1px, transparent 31px,rgba(255,255,255,0.05) 31px, rgba(255,255,255,0.05) 32px,transparent 32px, transparent 92px),
      linear-gradient(90deg, hsl(279,0%,3%),hsl(279,0%,3%));
  }

  html, body, #root {
    width: 100%;
    height: 100%;
    font-family: var(--font-text);
    background-color: var(--bg-white);
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
