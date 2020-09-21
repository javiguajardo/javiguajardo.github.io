import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { LIGHT } from '../config/theme';

const Checkbox = styled.input`
  visibility: hidden;
  width: 0;
  height: 0;
  
  &:checked + .toggle-label .toggle-circle {
    transform: translateX(3rem);
  }
`;

const Label = styled.label`
  background: ${({ theme }) => theme.toggleFill};
  display: flex;
  padding: 0.5rem;
  width: 6rem;
  height: 3rem;
  border-radius: 20px;
  border-style: none;
  transition: all 0.3s ease-in-out;   
`;

const Circle = styled.span`
  background: ${({ theme }) => theme.toggleBtn};
  height: 2rem;
  width: 2rem;
  border-radius: 50%;
  display: inline-block;
  transition: all 0.4s ease-in-out;
`;

const ThemeToggle = ({ theme, toggleTheme }) => {
  const isLightTheme = theme === LIGHT;
  return (
    <>
      <Checkbox type="checkbox" id="toggle-theme" onChange={toggleTheme} checked={!isLightTheme} />
      <Label className="toggle-label" htmlFor="toggle-theme">
        <Circle className="toggle-circle" isLightTheme={isLightTheme} />
      </Label>
    </>
  );
};


ThemeToggle.propTypes = {
  theme: PropTypes.string.isRequired,
  toggleTheme: PropTypes.func.isRequired
};

export default ThemeToggle;
