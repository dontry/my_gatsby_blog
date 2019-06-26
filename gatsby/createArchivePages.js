const path = require('path');

module.exports = (createPage, posts) => {
  tagPageTemplate = path.resolve(__dirname, `../src/templates/tags.js`);
  yearPageTemplate = path.resolve(__dirname, `../src/templates/years.js`);
  allTagsTemplate = path.resolve(__dirname, `../src/templates/archive.js`);

  const postsByTags = {};
  const postsByYears = {};
  let years = [];

  posts.forEach(({ node: post }) => {
    if (post.frontmatter.tags) {
      post.frontmatter.tags.forEach(tag => {
        if (!postsByTags[tag]) {
          postsByTags[tag] = [];
        }
        postsByTags[tag].push(post);
      });
    }

    const year = new Date(post.fields.date).getFullYear();
    if (!postsByYears[year]) {
      postsByYears[year] = [];
      years.push(year);
    }
    postsByYears[year].push(post);
  });

  const tags = Object.keys(postsByTags);
  const numOfPostsByTags = {};

  tags.forEach(tag => {
    numOfPostsByTags[tag] = postsByTags[tag].length;
  });

  createPage({
    path: `/archive`,
    component: allTagsTemplate,
    context: {
      tags: tags.sort(),
      nums: numOfPostsByTags,
      posts,
      years,
    },
  });

  years = years.sort((a, b) => b - a);
  years.forEach(year => {
    const posts = postsByYears[year];

    createPage({
      path: `/archive/years/${year}`,
      component: yearPageTemplate,
      context: {
        posts,
        nums: numOfPostsByTags,
        year,
        years,
        tags,
      },
    });
  });

  tags.forEach(tag => {
    const posts = postsByTags[tag];

    createPage({
      path: `/archive/tags/${tag}`,
      component: tagPageTemplate,
      context: {
        posts,
        nums: numOfPostsByTags,
        tag,
        years,
        tags,
      },
    });
  });
};
