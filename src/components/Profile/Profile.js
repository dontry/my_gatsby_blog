import React, { Fragment } from 'react';
import { media } from '../../utils/theme';
import Flex from '../Flex';
import Avatar from './Avatar';
import Intro from './Intro';
import SocialLinks from './SocialLinks';

const Wrapper = Flex.extend`
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding-left: 10px;
  min-width: 200px;
`;

const Profile = () => (
  <Wrapper>
    <Avatar />
    <Intro />
    <SocialLinks />
  </Wrapper>
);

export default Profile;
