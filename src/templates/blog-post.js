/*
 * @Author: caidong
 * @Date:   2018-06-19 15:43:53
 * @Last Modified by:   caidong
 * @Last Modified time: 2018-06-19 15:59:55
 */
import React from 'react'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'

const Template = ({ data, location }) => {
  const { markdownRemark: post } = data

  const { frontmatter, html } = post

  const { title, date } = frontmatter

  return (
    <div>
      <Helmet title={`${title} - My blog`} />
      <div>
        <h1>{title}</h1>
        <h3>{date}</h3>

        <div dangerouslySetInnerHTML={{ __html: html }} />
      </div>
    </div>
  )
}

export const pageQuery = graphql`
query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        path
        tags
        excerpt
      }
    }
  }
`

export default Template
