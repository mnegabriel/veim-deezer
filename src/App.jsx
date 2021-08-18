import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux'
import styled, { createGlobalStyle } from 'styled-components';

import store from './app/store'

import { Header } from './components/Header'
import { Routes } from './routes';

const GlobalStyles = createGlobalStyle`
  :root {
    --main-font: 'Baloo 2', sans-serif;
    --accent-font: 'Spartan', sans-serif;

    --black: #1e272e;
    --blue-600: #3c40c6;
    --blue-300: #575fcf;
    --red-600: #ff3f34;
    --yellow-600: #ffc048;
  }

  body {
    font-family: var(--main-font);
    color: var(--black);
    margin: 0;
    height: 100vh;
    overflow-y: hidden;
  }

  #root {
    height: 100%;
  }

  h1 {
    font-family: var(--accent-font);
    margin-top: 34px;
  }
`

const MainContent = styled.main`
  height: 100%;
  width: 100%;
  max-width: 580px;
  margin: auto;
  `

const Wrapper = styled.div`
  height: 100%;
  width: calc(100% - 10px);
  margin: auto;
`

const App = () => (
  <MainContent>
    <GlobalStyles />

    <Provider store={store}>
      <BrowserRouter>
        <Header />

        <Wrapper>
          <Routes />
        </Wrapper>

      </BrowserRouter>
    </Provider>
  </MainContent>
);

export { App }
