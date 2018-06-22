/* Called when a new node is created. Plugins whising to extend or transform nodes
created by other plugins should implement this API
*/

const BLOG_POST_FILENAME_REGEX = /([0-9]+)\-([0-9]+)\-([0-9]+)\-(.+)\.md$/;

// Add custom fields to MarkdownRemark nodes;
module.exports = exports.onCreateNode = ({
  node,
  boundActionCreators,
  getNode,
}) => {
  const { createNodeField } = boundActionCreators;


  switch (node.internal.type) {
    case 'MarkdownRemark':
      const { permalink, redirect_from } = node.frontmatter;
      const { relativePath } = getNode(node.parent);

      let slug = permalink;
      let path = node.frontmatter.path;

      if (!slug) {
        if (relativePath.includes('blog')) {
          const match = BLOG_POST_FILENAME_REGEX.exec(relativePath);
          const year = match[1];
          const month = match[2];
          const day = match[3];
          const filename = match[4];

          slug = `/blog/${year}/${month}/${day}/${filename}.html`;

          const date = new Date(year, month - 1, day);
          createNodeField({
            node,
            name: 'date',
            value: date.toJSON(),
          });
        }
      }

      if (!slug) {
        slug = `/${relativePath.replace('.md', '.html')}`;
      }

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
        value: relativePath,
      });

      return;
  }
};
