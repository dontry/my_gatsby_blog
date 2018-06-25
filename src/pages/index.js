import React from 'react';
import Container from '../components/Container';
import MarkdownExcerpt from '../components/MarkdownExcerpt';

const IndexPage = ({ data }) => {
  const { edges: posts } = data.allMarkdownRemark;
  return (
      <div>
        {posts.map(({ node: post }) => <MarkdownExcerpt key={post.frontmatter.title} post={post} />)}
      </div>
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
