/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
const path = require('path')

exports.createPages = ({ boundActionCreators, graphql }) => {
  const { createPage } = boundActionCreators
  const blogPostTemplate = path.resolve('src/templates/blog-post.js')

  return graphql(`{
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
        }`).then(res => {
    if (res.errors) {
      return Promise.reject(res.errors)
    }

    const posts = res.data.allMarkdownRemark.edges

    posts.forEach(({ node }) => {
      createPage({
        path: node.frontmatter.path,
        component: blogPostTemplate,
      })
    })
  })
}
