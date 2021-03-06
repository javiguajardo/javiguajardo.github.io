import React from 'react';
import styled from 'styled-components';

const Container = styled.header`
  display: flex;
  justify-content: flex-end;
  padding: 20px;
  padding-bottom: 0;
`;

const Header = ({ children }) => (
  <Container>
    {children}
  </Container>
);

export default Header
