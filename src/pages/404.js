import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

import { Layout } from '../components';
import { colorWhite, devices } from '../styles';

const Container = styled.main`
  margin: 0 auto;
  font-size: 3rem;
  color: ${({ theme }) => theme.primaryColor};
  padding: 0 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 80vh;
  line-height: 1.5;
  max-width: 800px;
  
  @media ${devices.tablet} {
    font-size: 5rem;
  }
`;

const Button = styled(props => <Link {...props} />)`
  padding: 1.25rem 1.75rem;
  font-size: 1.6rem;
  background-color: ${({ theme }) => theme.primaryColor};
  color: ${colorWhite};
  text-decoration: none;
  border-radius: 4px;
  margin-top: 20px;
`;

const Paragraph = styled.p`
  margin: 0;
`;

const NotFound = () => (
  <Layout>
    <Container>
      <Paragraph>
        Oops! Looks like
      </Paragraph>
      <Paragraph>
        this page was not found :(
      </Paragraph>
      <Button to="/">Go To Home</Button>
    </Container>
  </Layout>
);

export default NotFound;
