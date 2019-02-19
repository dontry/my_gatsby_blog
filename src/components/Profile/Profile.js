import React, { Fragment } from 'react';
import styled from 'styled-components';
import { media } from '../../utils/theme';
import Flex from '../Flex';
import Avatar from './Avatar';
import Intro from './Intro';
import SocialLinks from './SocialLinks';

const Wrapper = styled(Flex)`
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-left: 10px;
  min-width: 200px;
  padding-right: 50px;
  margin-left: -20px;
`;

const Profile = () => (
  <Wrapper>
    <Avatar />
    <Intro />
  </Wrapper>
);

export default Profile;
