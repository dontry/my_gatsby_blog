import React from 'react';
import styled from 'styled-components';

const Tag = styled.span`
  display: inline-block;
  position: relative;
  background-color: ${props => props.bg || props.theme.colors.light};
  padding-top: 2px;
  padding-bottom: 2px;
  padding-left: 10px;
  padding-right: 15px;
  border-bottom-right-radius: 2px;
  border-top-right-radius: 2px;
  font-size: ${props => props.theme.fontSizes.small};
  min-width: 50px;
  text-align: right;
  &::before {
    content: '';
    position: absolute;
    width: 0;
    background-color: inherit;
    border: 15px solid #fff;
    border-right-color: transparent;
    border-radius: 100% 0 0 100%;
    left: -30px;
    top: 0px;
  }
  &::after {
    content: '';
    position: absolute;
    width: 6px;
    height: 6px;
    left: -3px;
    top: 12px;
    border-radius: 50%;
    background-color: #fff;
  }
  & a {
    text-decoration: none;
  }
`;

export default Tag;
