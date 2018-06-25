import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import theme from '../utils/theme';
import { ThemeProvider } from 'styled-components';
import {media} from '../utils/theme'

import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import Container from '../components/Container';
import './normalize.css';
import './index.css';

const StyledContainer = Container.extend`
  padding-top: 40px;
  padding-bottom: 20px;
  ${media.size('medium')`
        padding-top: 60px;
    `} ${media.greaterThan('large')`
        padding-top: 80px;
    `};
`;

const Layout = ({ children, data, location }) => (
  <ThemeProvider theme={theme}>
    <div>
      <Helmet
        title={data.site.siteMetadata.title}
        meta={[
          { name: 'description', content: 'Sample' },
          { name: 'keywords', content: 'sample, something' },
        ]}
      />
      {/* <Header siteTitle={data.site.siteMetadata.title} /> */}
      <div style={{ minHeight: 'calc(100vh - 60px)' }}>
        <NavBar location={location} />
        <StyledContainer>{children()}</StyledContainer>
      </div>
      <Footer />
    </div>
  </ThemeProvider>
);

Layout.propTypes = {
  children: PropTypes.func,
};

export default Layout;

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
