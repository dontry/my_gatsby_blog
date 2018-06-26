import React from 'react';
import styled from 'styled-components';
import SocialLinks from './SocialLinks';

const Wrapper = styled.div`
  text-align: center;
`
const Name = styled.h2`
  font-weight: 500;
  margin-bottom: 0.5rem;
`

const Title = styled.h4`
  font-weight: 400;
  margin-bottom: 1rem;
`

const Intro = () => (
  <Wrapper>
    <Name>Dong Cai</Name>
    <Title>Web Developer</Title>
    <SocialLinks/> 
  </Wrapper>
);

export default Intro;
