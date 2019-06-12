import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import MarkdownExcerpt from '../components/MarkdownExcerpt';
import Flex from '../components/Flex';
import Sidebar from '../components/Sidebar';
import Profile from '../components/Profile';
import Layout from '../components/layout';
import { media } from '../utils/theme';
import styled from 'styled-components';

//Each edge is the file system path to the node, which is our post.
const query = graphql`
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

const CustomSidebar = styled(Sidebar)`
  position: relative;
`;

const IndexPage = props => {
  return (
    <Layout location={props.location}>
      <StaticQuery
        query={query}
        render={data => {
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
        }}
      />
    </Layout>
  );
};

export default IndexPage;
