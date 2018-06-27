import React from 'react';
import MarkdownExcerpt from '../components/MarkdownExcerpt';
import Flex from '../components/Flex';
import Sidebar from '../components/Sidebar';
import Profile from '../components/Profile';
import { media } from '../utils/theme';
import styled from 'styled-components';

const CustomSidebar = styled(Sidebar)`
`;

const IndexPage = ({ data }) => {
  const { edges: posts } = data.allMarkdownRemark;
  return (
    <Flex style={{ flexDirection: 'row' }}>
      <CustomSidebar>
        <Profile />
      </CustomSidebar>
      <div>
        {posts.map(({ node: post }) => (
          <MarkdownExcerpt key={post.frontmatter.title} post={post} />
        ))}
      </div>
    </Flex>
  );
};

//Each edge is the file system path to the node, which is our post.
export const query = graphql`
  query IndexQuery {
    allMarkdownRemark(sort: { fields: [fields___date], order: DESC }) {
      totalCount
      edges {
        node {
          id
          html
          excerpt(pruneLength: 280)
          frontmatter {
            title
            tags
            excerpt
          }
          fields {
            slug
            date(formatString: "MMMM DD, YYYY")
            path
          }
        }
      }
    }
  }
`;

export default IndexPage;
