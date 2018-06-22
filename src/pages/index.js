import React from 'react';
import Link from 'gatsby-link';
import Container from '../components/Container'

const IndexPage = ({ data }) => {
  const { edges: posts } = data.allMarkdownRemark;
  console.log(posts[0]);

  return (
    <Container>
      {posts.map(({ node: post }) => {
        const { frontmatter, fields} = post;
        return (
          <div key={frontmatter.title}>
            <h2>
              <Link to={fields.path}>{frontmatter.title}</Link>
            </h2>
            <p>{fields.date}</p>
            <p>{frontmatter.excerpt}</p>
            <ul>
              {frontmatter.tags &&
                frontmatter.tags.map(tag => {
                  return (
                    <li key={tag}>
                      <Link to={`/tags/${tag}`}>{tag}</Link>
                    </li>
                  );
                })}
            </ul>
          </div>
        );
      })}
    </Container>
  );
};

//Each edge is the file system path to the node, which is our post.
export const query = graphql`
  query IndexQuery {
    allMarkdownRemark(
      sort: {fields: [fields___date], order: DESC}
    ) {
      totalCount
      edges {
        node {
          id
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
