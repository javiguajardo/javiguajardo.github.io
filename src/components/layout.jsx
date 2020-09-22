import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  position: relative;
  min-height: 100vh;
`;

const Layout = ({ children }) => (
  <Container>
    {children}
  </Container>
);

export default Layout;
