import React, { Fragment } from 'react';
import { media } from '../../utils/theme';
import Flex from '../Flex';
import Avatar from './Avatar';
import Intro from './Intro';
import SocialLinks from './SocialLinks';

const Wrapper = Flex.extend`
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
