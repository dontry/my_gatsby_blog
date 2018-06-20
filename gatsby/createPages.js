const path = require('path');
const createTagPages = require('./createTagPages');

module.exports = async ({ boundActionCreators, graphql }) => {
  const { createPage } = boundActionCreators;
  const blogPostTemplate = path.resolve(__dirname, '../src/templates/blog-post.js');

  return graphql(`
    {
      allMarkdownRemark {
        edges {
          node {
            html
            id
            frontmatter {
              date
              path
              title
              excerpt
              tags
            }
          }
        }
      }
    }
  `).then(res => {
    if (res.errors) {
      return Promise.reject(res.errors);
    }

    const posts = res.data.allMarkdownRemark.edges;

    createTagPages(createPage, posts);

    posts.forEach(({ node }, index) => {
      createPage({
        path: node.frontmatter.path,
        component: blogPostTemplate,
        context: {
          prev: index === 0 ? null : posts[index - 1].node,
          next: index === posts.length - 1 ? null : posts[index + 1].node,
        },
      });
    });
  });
};
