import React from 'react';
import styled, { ThemeProvider } from 'styled-components';

import { GlobalStyles, Header, ThemeToggle, Footer } from '.';
import { useSelectedTheme } from '../hooks';
import { lightTheme, darkTheme, LIGHT } from '../config';

const Container = styled.div`
  position: relative;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

const Layout = ({ children }) => {
  const [theme, toggleTheme, componentMounted] = useSelectedTheme();

  if (!componentMounted) {
    return null;
  }
  
  const themeMode = theme === LIGHT ? lightTheme : darkTheme;
  
  return (
    <ThemeProvider theme={themeMode}>
      <Container>
        <GlobalStyles />
        <Header>
          <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
        </Header>
        {children}
        <Footer />
      </Container>
    </ThemeProvider>
  );
};

export default Layout;
