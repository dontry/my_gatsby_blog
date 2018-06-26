const path = require('path');
const createArchivePages = require('./createArchivePages');

module.exports = async ({ boundActionCreators, graphql }) => {
  const { createPage } = boundActionCreators;
  const blogPostTemplate = path.resolve(
    __dirname,
    '../src/templates/blog-post.js'
  );
  const portfoliosTemplate = path.resolve(
    __dirname,
    '../src/templates/portfolios.js'
  );

  const res = await graphql(`
    {
      allMarkdownRemark(limit: 100) {
        edges {
          node {
            html
            id
            excerpt(pruneLength: 280)
            frontmatter {
              title
              excerpt
              tags
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
  `);

  if (res.errors) {
    return Promise.reject(res.errors);
  }

  const posts = res.data.allMarkdownRemark.edges;

  createArchivePages(createPage, posts);

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

  createPage({
    path: '/portfolios.html',
    component: portfoliosTemplate,
  });
};
