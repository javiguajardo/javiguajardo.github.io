import React from 'react';
import styled from 'styled-components';

const MainContainer = styled.main`
  margin: 0 auto;
  max-width: 1600px;
  width: 100%;
  padding: 0 20px;
`;

const Main = ({ children }) => (
  <MainContainer>
    {children}
  </MainContainer>
);

export default Main;
