import React from 'react';
import styled from 'styled-components';
import Logo from '../../images/logo.jpg';
import Flex from '../Flex';

const Wrapper = styled(Flex)`
  align-items: center;
  justify-content: center;
  width: 120px;
  height: 120px;
  border: 1px solid ${props => props.theme.colors.light};
  border-radius: 50%;
  margin-bottom: 1rem;
`;

const Image = styled.img`
  width: 80px;
  height: 80px;
  margin-bottom: 0;
`;

const Avatar = () => (
  <Wrapper>
    <Image src={Logo} />
  </Wrapper>
);

export default Avatar;
