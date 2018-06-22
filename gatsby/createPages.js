const path = require('path');
const createTagPages = require('./createTagPages');

module.exports = async ({ boundActionCreators, graphql }) => {
  const { createPage } = boundActionCreators;
  const blogPostTemplate = path.resolve(
    __dirname,
    '../src/templates/blog-post.js'
  );

  return graphql(`
    {
      allMarkdownRemark(limit: 1000) {
        edges {
          node {
            html
            id
            frontmatter {
              title
              excerpt
              tags
            }
            fields {
              slug
              date
              path
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
      const slug = node.fields.slug;
      const path = node.fields.path;
      if (slug.includes('blog/')) {
        createPage({
          path: path,
          component: blogPostTemplate,
          context: {
            slug,
            prev: index === 0 ? null : posts[index - 1].node,
            next: index === posts.length - 1 ? null : posts[index + 1].node,
          },
        });
      }
    });
  });
};
