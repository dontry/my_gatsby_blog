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
  min-width: 200px;
  padding-top: 40px;
  ${media.size('medium')`
        padding-top: 60px;
    `};
  ${media.greaterThan('large')`
        padding-top: 80px;
    `};
`;

const Profile = () => (
  <Wrapper>
    <Avatar />
    <Intro />
    <SocialLinks />
  </Wrapper>
);

export default Profile;
