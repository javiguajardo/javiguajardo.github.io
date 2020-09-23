import {
  colorWhite,
  colorLightGray,
  colorLightOrange,
  colorDarkOrange,
  colorDarkBlue
} from '../styles/variables';

const lightTheme = {
  body: colorWhite,
  text: colorLightGray,
  primaryColor: colorDarkOrange,
  toggleFill: colorDarkOrange,
  toggleBtn: colorWhite
};

const darkTheme = {
  body: colorDarkBlue,
  text: colorWhite,
  primaryColor: colorLightOrange,
  toggleFill: colorWhite,
  toggleBtn: colorLightOrange
};

const LIGHT = 'light';
const DARK = 'dark';

export {
  lightTheme,
  darkTheme,
  LIGHT,
  DARK
};
