import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.aside`
  position: relative;
  height: 100%;
  width: 200px;
`;

const Sidebar = ({ children }) => {
  return (
    <Wrapper>
      <section>{children}</section>
    </Wrapper>
  );
};

export default Sidebar;
