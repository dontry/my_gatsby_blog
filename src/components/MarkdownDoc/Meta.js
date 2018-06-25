import React from 'react';
import styled from 'styled-components';
import { darken } from 'polished';
import Tag from '../Tag';

const Wrapper = styled.h4`
  margin-bottom: 1rem;
  color: ${props => darken(0.3, props.theme.colors.light)};
`;

const Time = styled.time`
  font-weight: 500;
  display: inline-block;
  margin-right: 1.25rem;
  margin-bottom: 0.5rem;
`;

const TagWrapper = styled.div`
  display: inline-flex;
`;

const Meta = ({ meta }) => {
  const { date, tags } = meta;
  console.log(date);
  console.log(tags);
  return (
    <Wrapper>
      <Time dateTime={new Date(date).toLocaleDateString()}>{date}</Time>
      <TagWrapper>{tags && tags.map(tag => <Tag key={tag} tag={tag} />)}</TagWrapper>
    </Wrapper>
  );
};

export default Meta;
