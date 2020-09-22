import React from 'react';
import styled from 'styled-components';

import { colorPrimaryOrange, devices } from '../styles/variables';

const AboutContainer = styled.section`
  margin: 0 auto;
  padding: 50px 0 100px 0;
  max-width: 800px;
  
  @media ${devices.tablet} {
    padding-top: 100px;
  }
`;

const Paragraph = styled.p`
  font-size: 1.6rem;
  line-height: 1.5;
`;

const Name = styled.h1`
  font-size: 4rem;
  color: ${colorPrimaryOrange};
  font-weight: 900;
  margin: 0;
  line-height: 1.1;
  
  @media ${devices.tablet} {
    font-size: 7rem;
  }
`;

const Position = styled.h2`
  font-size: 3rem;
  font-weight: 900;
  margin: 0;
  line-height: 1.1;
  
  @media ${devices.tablet} {
    font-size: 6rem;
  }
`;

const Link = styled.a`
  color: ${colorPrimaryOrange};
`;

const About = () => (
  <AboutContainer>
    <Name>Javi Guajardo</Name>
    <Position>Software Engineer</Position>
    <Paragraph>Hi, I’m Javi. I was born, raised, and currently still living in Mexico.</Paragraph>
    <Paragraph>
      I’ve been hacking away at full-stack applications for 4+ years, and I’ve been lucky enough to work on a wide
      variety of projects such as: Backend APIs, frontend redesigns, mobile apps, Alexa skills, chatbots, among other things.
    </Paragraph>
    <Paragraph>
      Most recently I’ve been working with Typescript, but over the years I’ve developed using Ruby and Ruby Rails,
      Django and Python, React, React Native, AWS, Google Cloud.
    </Paragraph>
    <Paragraph>
      Pretty much a software development generalist, I’ve been able to use what I’ve learned in each project and apply
      it to all kinds of problems.
    </Paragraph>
    <Paragraph>
      If you’re curious about examples of what I’ve worked on, please check out my <Link href="/resume.pdf" target="_blank">resume</Link>.
    </Paragraph>
    <Paragraph>
      I’m fairly active on LinkedIn, and always happy to connect with people. Feel free to say hello!
    </Paragraph>
  </AboutContainer>
);

export default About;
