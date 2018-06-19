/*
 * @Author: caidong
 * @Date:   2018-06-19 15:43:53
 * @Last Modified by:   caidong
 * @Last Modified time: 2018-06-19 15:59:55
 */
import React from 'react'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'

const Template = ({ data, location, pathContext }) => {
  const { markdownRemark: post } = data

  const { frontmatter, html } = post

  const { title, date } = frontmatter

  const  {next, prev} = pathContext

  return (
    <div>
      <Helmet title={`${title} - My blog`} />
      <div>
        <h1>{title}</h1>
        <h3>{date}</h3>

        <div dangerouslySetInnerHTML={{ __html: html }} />
      </div>
	  <p>
		  {prev && <Link to={prev.frontmatter.path}>Previous: {prev.frontmatter.title}</Link>}
		  {next && <Link to={next.frontmatter.path}>Next: {next.frontmatter.title}</Link>}
	  </p>
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