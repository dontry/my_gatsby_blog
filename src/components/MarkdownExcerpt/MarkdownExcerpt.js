import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import { media } from '../../utils/theme';
import { SmallTag } from '../Tag';
import { darken } from 'polished';

const Wrapper = styled.article`
  padding-bottom: 40px;
  ${media.lessThan('small')`
        padding-bottom: 25px;
    `};
`;

const Title = styled.h2`
  font-weight: 500;
  margin-bottom: 0.5rem;
  & a {
    color: #3a3a3a;
  }
  & a:hover {
    text-decoration: underline;
  }
`;

const Meta = styled.h5`
  margin-bottom: 0.5rem;
`;

const Time = styled.time`
  font-weight: 300;
  color: ${props => darken(0.3, props.theme.colors.light)};
  display: inline-block;
  margin-right: 1.25rem;
  margin-bottom: 0.5rem;
`;

const TagWrapper = styled.div`
  display: inline-flex;
`;

const Content = styled.div`
  overflow: hidden;
  display: -webkit-box !important;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  padding: 0;
  ${media.lessThan('small')`
    width: 280px;
  `};
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
            frontmatter.tags.map(tag => <SmallTag key={tag} tag={tag} />)}
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
