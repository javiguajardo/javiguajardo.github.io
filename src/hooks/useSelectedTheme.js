import { useEffect, useState } from 'react';

import { LIGHT, DARK } from '../config/theme';

const useSelectedTheme = () => {
  const [theme, setTheme] = useState(LIGHT);
  const [componentMounted, setComponentMounted] = useState(false);

  const setMode = mode => {
    window.localStorage.setItem('theme', mode)
    setTheme(mode)
  };

  const toggleTheme = () => {
    if (theme === LIGHT) {
      setMode(DARK);
    } else {
      setMode(LIGHT);
    }
  };

  useEffect(() => {
    const localTheme = window.localStorage.getItem('theme');

    if (localTheme) {
      setTheme(localTheme);
    } else {
      const systemUsingDarkTheme = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;

      if (systemUsingDarkTheme) {
        setTheme(DARK);
      } else {
        setTheme(LIGHT);
      }
    }
  }, []);

  useEffect(() => {
    setComponentMounted(true);
  }, []);

  return [theme, toggleTheme, componentMounted]
};

export default useSelectedTheme;
