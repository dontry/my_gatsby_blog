import React from 'react';
import styled from 'styled-components';
import Link from 'gatsby-link';
import { media } from '../../utils/theme';
import Tag from '../Tag';
import { darken } from 'polished';

const Wrapper = styled.article`
  padding-bottom: 40px;
  ${media.lessThan('small')`
        padding-top: 25px;
    `};
`;

const Title = styled.h2`
  font-weight: 500;
  margin-bottom: 0.5rem;
  color: #000;
`;

const Meta = styled.h5`
  font-weight: 300;
  margin-bottom: 0.5rem;
  color: ${props => darken(0.3, props.theme.colors.light)};
`;

const Time = styled.time`
  display: inline-block;
  margin-right: 1.25rem;
  margin-bottom: 0.5rem;
`;

const TagWrapper = styled.div`
  display: inline-flex;
`;

const SmallTag = Tag.extend`
  margin-left: 10px;
  margin-right: 10px;
  &::before {
    border: 10px solid #fff;
    border-right-color: transparent;
    left: -20px;
  }
  &::after {
    width: 5px;
    height: 5px;
    top: 7px;
    left: -3px;
  }
`;

const Content = styled.div`
  overflow: hidden;
  display: -webkit-box !important;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  padding: 0;
`;

const MarkdownExcerpt = ({ post }) => {
  const { frontmatter, fields } = post;
  return (
    <Wrapper>
      <Title>
        <Link to={fields.path}>{frontmatter.title}</Link>
      </Title>
      <Meta>
        <Time dateTime={new Date(fields.date).toLocaleDateString()}>
          {fields.date}
        </Time>
        <TagWrapper>
          {frontmatter.tags &&
            frontmatter.tags.map(tag => {
              return (
                <SmallTag key={tag}>
                  <Link to={`/tags/${tag}`}>{tag}</Link>
                </SmallTag>
              );
            })}
        </TagWrapper>
      </Meta>
      {frontmatter.excerpt ? (
        <Content>{frontmatter.excerpt}</Content>
      ) : (
        <Content>{post.excerpt}</Content>
      )}
    </Wrapper>
  );
};

export default MarkdownExcerpt;
