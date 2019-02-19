import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import styled, { ThemeProvider } from 'styled-components';
import theme, { media } from '../utils/theme';
// import {StaticQuery, graphql} from 'gatsby'

import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import Container from '../components/Container';
import '../layouts/normalize.css';
import '../layouts/index.css';
import FavIcon from '../images/favicon.ico';

const StyledContainer = styled(Container)`
  padding-top: 40px;
  padding-bottom: 40px;
  ${media.size('medium')`
        padding-top: 60px;
    `} ${media.greaterThan('large')`
        padding-top: 80px;
    `};
`;

const Layout = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <Fragment>
        <Helmet
          // title={data.site.siteMetadata.title}
          meta={[
            { name: 'description', content: 'Dontry blog' },
            { name: 'keywords', content: 'javascript, react, front-end' },
          ]}
          link={[{ rel: 'icon', href: FavIcon }]}
        />
        {/* <Header siteTitle={data.site.siteMetadata.title} /> */}
        <div style={{ minHeight: 'calc(100vh - 60px)' }}>
          <NavBar location={location} />
          <StyledContainer>{children}</StyledContainer>
        </div>
        <Footer />
      </Fragment>
    </ThemeProvider>
  );
};

export default Layout;
