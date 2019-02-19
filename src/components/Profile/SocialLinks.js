import React from 'react';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import styled from 'styled-components';
import Flex from '../Flex';
import SocialIcon from './SocialIcon';

const Wrapper = styled(Flex)`
  justify-content: center;
`;

const SocialLinks = () => (
  <Wrapper>
    <a href="mailto:mccoy018@gmail.com" rel="noopener">
      <SocialIcon icon={faEnvelope} />
    </a>
    <a
      href="https://www.linkedin.com/in/caidong"
      target="_blank"
      rel="noopener"
    >
      <SocialIcon icon={faLinkedin} />
    </a>
    <a href="https://github.com/dontry" target="_blank" rel="noopener">
      <SocialIcon icon={faGithub} />
    </a>
  </Wrapper>
);

export default SocialLinks;
