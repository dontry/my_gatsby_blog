/* Called when a new node is created. Plugins whising to extend or transform nodes
created by other plugins should implement this API
*/

//https://www.gatsbyjs.org/docs/mdx/programmatically-creating-pages/#generate-slugs
const BLOG_POST_FILENAME_REGEX = /([0-9]+)\-([0-9]+)\-([0-9]+)\-(.+)\.md$/;

// Add custom fields to MarkdownRemark nodes;
module.exports = exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;

  switch (node.internal.type) {
    case 'MarkdownRemark':
      const { permalink, redirect_from } = node.frontmatter;
      const { relativePath } = getNode(node.parent);

      let path = node.frontmatter.path;
      let slug;

      console.log(`relativePath: ${relativePath}`);
      if (relativePath.includes('.md')) {
        const match = BLOG_POST_FILENAME_REGEX.exec(relativePath);
        const year = match[1];
        const month = match[2];
        const day = match[3];
        const filename = match[4];

        slug = `/blog/${year}/${month}/${day}/${filename}.html`;

        const date = new Date(year, month - 1, day);

        console.log(`slug: ${slug}`);

        createNodeField({
          node,
          name: 'date',
          value: date.toJSON(),
        });
      }

      // if (!slug) {
      //   slug = `/${relativePath.replace('.md', '.html')}`;
      // }

      createNodeField({
        node,
        name: 'slug',
        value: slug,
      });

      if (!path) {
        path = relativePath;
      }

      createNodeField({
        node,
        name: 'path',
        value: `/${relativePath.replace('.md', '.html')}`,
      });

      return;
  }
};
