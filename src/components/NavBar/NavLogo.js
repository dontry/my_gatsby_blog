import React from 'react';
import Link from 'gatsby-link';
import styled from 'styled-components';
import Logo from '../../images/logo.jpg';
import {media} from '../../utils/theme'

const StyledLink = styled(Link)`
  display: flex;
  align-items: center;
  margin-right: 10px;
  ${media.between('small', 'medium')`margin-right: 20px`}
  ${media.greaterThan('medium')`margin-right: 30px`}
`;

const StyledImg = styled.img`
  height: 100%;
  max-height: 50px;
  margin-bottom: 0;
`;

const NavLogo = () => (
  <StyledLink to="/">
    <StyledImg src={Logo} alt="Home" />
  </StyledLink>
);

export default NavLogo;
