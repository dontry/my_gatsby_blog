import React from 'react';
import styled from 'styled-components';
import Flex from '../Flex';

const Wrapper = Flex.extend`
  position: relative;
  bottom: 0px;
  background-color: ${props => props.theme.colors.light};
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 60px;
  font-size: ${props => props.theme.fontSizes.small};
`;

const Footer = () => (
  <Wrapper>Copyright © {new Date().getFullYear()} dontry.github.io</Wrapper>
);

export default Footer;
