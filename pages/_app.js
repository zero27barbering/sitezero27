import { createGlobalStyle, ThemeProvider } from 'styled-components'
import style from '../style.json';
import Head from 'next/head';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }
  body {
    background-color: ${({ theme }) => theme.colors.backgroundColor};;
    margin: 0;
    padding: 0;
    /* New styles */
    display: flex;
    flex-direction: column;
    font-family: 'Poppins', sans-serif;
    // Deixa branco no começo
    color: ${({ theme }) => theme.colors.contrastText};
  }
  html, body {
    min-height: 100vh;
  }
  #__next {
    /*flex: 1;*/
    /*display: flex;*/
    /*flex-direction: column;*/
  }
  h1 {
    font-size: 42px;
    font-weight: 400;
    line-height: 1;
    margin-bottom: 0;
  }
  h2 {
    font-size: 30px;
    font-weight: 400;
    line-height: 1;
    margin-bottom: 0;
  }
  h3 {
    font-size: 12px;
    font-weight: 400;
    line-height: 1;
    margin-bottom: 0;
  }
  p {
    font-size: 10px;
    font-weight: 400;
    line-height: 1;
  }
  button p {
    font-size: 16px;
  }
  header h1 {
    font-size: 72px;
    font-weight: 500;
    line-height: 82px;
  }
  header .appointment {
    display: flex;
    align-items: center;
    justify-content: start;
  }
  header h3 {
    font-size: 18px;
    font-weight: 400;
    line-height: 82px;
  }
  header .appointment::before {
    content: "";
    background-color: ${({ theme }) => theme.colors.color1};
    height: 2px;
    width: 40px;
    margin-right: 15px;
  }
  .modal-body {
    display: flex;
    justify-content: center;
  }
  .modal-content {
    background-color: ${({ theme }) => theme.colors.color3};
  }
  .btn-close {
    background: transparent url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%23fff'%3e%3cpath d='M.293.293a1 1 0 011.414 0L8 6.586 14.293.293a1 1 0 111.414 1.414L9.414 8l6.293 6.293a1 1 0 01-1.414 1.414L8 9.414l-6.293 6.293a1 1 0 01-1.414-1.414L6.586 8 .293 1.707a1 1 0 010-1.414z'/%3e%3c/svg%3e") center/1em auto no-repeat;
  }
  iframe {
    height: 500px;
    width: 600px;
  }
`

const theme = style.theme;

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Zero27 Barbering</title>
          {/*<link rel="stylesheet" href="/css/bootstrap-grid.min.css"/>
          <link rel="stylesheet" href="/css/bootstrap-utilities.min.css"/>*/}
          <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0/dist/css/bootstrap.min.css" rel="stylesheet" />
          <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0/dist/js/bootstrap.min.js" async="async" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet" />
      </Head>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}
