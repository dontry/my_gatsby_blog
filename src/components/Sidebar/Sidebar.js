import React from 'react';
import styled from 'styled-components';
import { media } from '../../utils/theme';

const Wrapper = styled.div`
  position: relative;
  height: 100%;
  width: 200px;
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
