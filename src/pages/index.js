import React from "react"
import { ThemeProvider } from 'styled-components';
import { GlobalStyles, Header, ThemeToggle, Main, About, Footer, Layout } from '../components';
import { lightTheme, darkTheme, LIGHT } from '../config/theme';
import useSelectedTheme from '../hooks/useSelectedTheme';

export default function Home() {
  const [theme, toggleTheme, componentMounted] = useSelectedTheme();
  
  if (!componentMounted) { 
    return null;
  }
  
  const themeMode = theme === LIGHT ? lightTheme : darkTheme;

  return (
    <ThemeProvider theme={themeMode}>
      <>
        <GlobalStyles />
        <Layout>
          <Header>
            <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
          </Header>
          <Main>
            <About />
          </Main>
          <Footer />
        </Layout>
      </>
    </ThemeProvider>
  );
}
