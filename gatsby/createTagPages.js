const path = require('path');

module.exports = (createPage, posts) => {
  tagPageTemplate = path.resolve(__dirname, `../src/templates/tags.js`);
  allTagsTemplate = path.resolve(__dirname, `../src/templates/all-tags.js`);

  const postsByTags = {};

  posts.forEach(({ node }) => {
    if (node.frontmatter.tags) {
      node.frontmatter.tags.forEach(tag => {
        if (!postsByTags[tag]) {
          postsByTags[tag] = [];
        }
        postsByTags[tag].push(node);
      });
    }
  });

  const tags = Object.keys(postsByTags);

  createPage({
    path: `/tags`,
    component: allTagsTemplate,
    context: {
      tags: tags.sort(),
    },
  });

  tags.forEach(tagName => {
    const posts = postsByTags[tagName];

    createPage({
      path: `/tags/${tagName}`,
      component: tagPageTemplate,
      context: {
        posts,
        tagName,
      },
    });
  });
};
