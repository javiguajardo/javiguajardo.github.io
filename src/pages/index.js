import React from "react"
import { ThemeProvider } from 'styled-components';

import GlobalStyles from '../components/global-styles';
import Header from '../components/header';
import ThemeToggle from '../components/theme-toggle';
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
        <Header>
          <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
        </Header>
        <h1>Theme!</h1>
      </>
    </ThemeProvider>
  );
}
