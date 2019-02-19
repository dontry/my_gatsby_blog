import React from 'react';
import { media } from '../../utils/theme';
import styled from 'styled-components';

const Container = styled.div`
  padding-left: 20px;
  padding-right: 20px;
  margin-left: auto;
  margin-right: auto;
  ${media.greaterThan('medium')`width: 90%`}
  ${media.greaterThan('xxlarge')`max-width: 1260px`}
`;

export default Container;
