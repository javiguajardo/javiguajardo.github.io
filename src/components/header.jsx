import React from 'react';
import styled from 'styled-components';

const Container = styled.header`
  display: flex;
  justify-content: flex-end;
`;

const Header = ({ children }) => (
  <Container>
    {children}
  </Container>
);

export default Header
