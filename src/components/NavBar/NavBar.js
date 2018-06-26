import React from 'react';
import styled from 'styled-components';
import { media } from '../../utils/theme';
import Flex from '../Flex';
import Container from '../Container';
import NavLogo from './NavLogo';
import NavLink from './NavLink';

const Header = styled.header`
  /* background-color: ${props => props.theme.colors.light}; */
  background-color: #fff;
  color: ${props => props.theme.colors.darkGrey};
  position: sticky;
  z-index: 10;
  width: 100%;
  top: 0;
  left: 0;
  right: 0;
`;

const StyledFlex = Flex.extend`
  align-items: center;
  height: 60px;
  ${media.between('small', 'large')`height: 50px;`};
  ${media.lessThan('small')`height: 40px;`};
`;

const NavWrapper = Flex.withComponent('nav').extend`
    align-items: stretch;
    justify-self: center;
    overflow-x: auto;
    overflow-y: hidden;
    -webkit-overflow-scrolling: touch;
    height: 100%;
    width: 60%;
    ${media.size('xsmall')`
        flex-grow: 1;
        width: auto;
    `}
    ${media.greaterThan('xlarge')`
        width: null;
    `}
`;

const NavBar = ({ location }) => {
  return (
    <Header>
      <Container>
        <StyledFlex>
          <NavWrapper>
            <NavLink
              isActive={location.pathname === "/"}
              title="Home"
              to="/"
            />
            <NavLink
              isActive={location.pathname.includes('/tags/')}
              title="Archive"
              to="/archive/"
            />
            <NavLink
              isActive={location.pathname.includes('/profile/')}
              title="Profile"
              to="/profile/"
            />
            <NavLink
              isActive={location.pathname.includes('/portfolio/')}
              title="Portfolio"
              to="/portfolio/"
            />
          </NavWrapper>
        </StyledFlex>
      </Container>
    </Header>
  );
};

export default NavBar;
