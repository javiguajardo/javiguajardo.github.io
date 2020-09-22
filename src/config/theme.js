import {
  colorWhite,
  colorLightGray,
  colorPrimaryOrange,
  colorDarkBlue
} from '../styles/variables';

const lightTheme = {
  body: colorWhite,
  text: colorLightGray,
  toggleFill: colorPrimaryOrange,
  toggleBtn: colorWhite
};

const darkTheme = {
  body: colorDarkBlue,
  text: colorWhite,
  toggleFill: colorWhite,
  toggleBtn: colorPrimaryOrange
};

const LIGHT = 'light';
const DARK = 'dark';

export {
  lightTheme,
  darkTheme,
  LIGHT,
  DARK
};
