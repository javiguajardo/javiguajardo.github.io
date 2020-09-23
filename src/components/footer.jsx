import React from 'react';
import styled from 'styled-components';
import { FaLinkedin, FaGithub, FaRegEnvelope } from 'react-icons/fa';

const FooterContainer = styled.footer`
  position: absolute;
  bottom: 0;
  text-align: center;
  width: 100%;
  padding: 20px;
  font-size: 3rem;
  
  a {
    padding: 0 10px;
    color: ${({ theme }) => theme.primaryColor};
  }
`;

const Footer = () => (
  <FooterContainer>
    <a href="mailto:f.javi.guajardo@gmail.com" target="_blank" rel="noreferrer" title="email"><FaRegEnvelope /></a>
    <a href="https://www.linkedin.com/in/fjaviguajardo/" target="_blank" rel="noreferrer" title="linkedin"><FaLinkedin /></a>
    <a href="https://github.com/javiguajardo" target="_blank" rel="noreferrer" title="github"><FaGithub /></a>
  </FooterContainer>
);

export default Footer;
