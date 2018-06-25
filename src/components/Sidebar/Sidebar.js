import React from 'react';
import styled from 'styled-components';
import { media } from '../../utils/theme';

const Wrapper = styled.aside`
  height: 100%;
  width: 300px;
  ${media.lessThan('small')`
        display: none;
    `};
`;

const Sidebar = ({ children }) => {
  return (
    <Wrapper>
      <section>{children}</section>
    </Wrapper>
  );
};

export default Sidebar;
