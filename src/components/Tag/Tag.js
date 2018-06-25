import React from 'react';
import styled from 'styled-components';
import Link from 'gatsby-link';
import { darken } from 'polished';

const Wrapper = styled.span`
  display: inline-block;
  position: relative;
  background-color: ${props => props.bg || props.theme.colors.light};
  padding-top: 4px;
  padding-bottom: 4px;
  padding-left: 15px;
  padding-right: 15px;
  border-bottom-right-radius: 2px;
  border-top-right-radius: 2px;
  font-size: ${props => props.theme.fontSizes.small};
  line-height: 1.1;
  min-width: 50px;
  text-align: right;
  margin-left: 10px;
  margin-right: 10px;
  margin-bottom: 10px;
  &::before {
    content: '';
    position: absolute;
    width: 0;
    background-color: inherit;
    border: 12px solid #fff;
    border-right-color: transparent;
    border-radius: 100% 0 0 100%;
    left: -20px;
    top: 0px;
  }
  &::after {
    content: '';
    position: absolute;
    width: 6px;
    height: 6px;
    left: 0px;
    top: 9px;
    border-radius: 50%;
    background-color: #fff;
  }
  & a {
    font-weight: 500;
    color: ${props => props.bg || darken(0.5, props.theme.colors.light)};
    transition: color 0.2s ease-out;
  }
  & a:hover {
    color: ${props => props.bg || darken(0.9, props.theme.colors.light)};
  }
`;

const Tag = ({ tag }) => (
  <Wrapper>
    <Link to={`/tags/${tag}`}>{tag}</Link>
  </Wrapper>
);

export default Tag;
