import React from 'react';
import { media } from '../../utils/theme';
import styled from 'styled-components';
import { lighten, darken } from 'polished';
import Link from 'gatsby-link';

type Props = {
  isActive: boolean,
  title: string,
  to: string,
};

const StyledLink = styled(Link)`
    display: flex;
    flex-direction: row;
    text-decoration: none;
    align-items: center;
    color: ${props =>
      props.activeStyle
        ? props.theme.darkGrey
        : lighten(0.1, props.theme.colors.darkGrey)};
    background-color: ${props =>
      props.activeStyle ? props.theme.colors.light : '#fff'};
    transition: color 0.2s ease-out;
    padding-left: 15px;
    padding-right: 15px;
    font-weight: 300px;
    &:focus {
        color: ${props => props.theme.colors.darkGrey};
        background-color: ${props => props.theme.colors.light};
    }
    ${media.size('xsmall')`
        padding-left: 8px;
        padding-right: 8px;
    `}
    ${media.between('small', 'medium')`
        padding-left: 10px;
        padding-right: 10px;
    `}
    ${media.greaterThan('xlarge')`
        padding-left: 20px;
        padding-right: 20px;
        font-size: ${props => props.theme.fontSizes.large}
    `}
    $:hover:not(:focus) 
        color: ${props => props.theme.colors.darkGrey};
    }
`;

const NavLink = ({ isActive, title, to }: Props) => (
  <StyledLink to={to} activeStyle={isActive}>
    {title}
  </StyledLink>
);

export default NavLink;
