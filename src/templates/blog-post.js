/*
 * @Author: caidong
 * @Date:   2018-06-19 15:43:53
 * @Last Modified by:   caidong
 * @Last Modified time: 2018-06-19 15:59:55
 */
import React from 'react'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import MarkdownDoc from '../components/MarkdownDoc'
import Container from '../components/Container'

const Template = ({ data, location, pathContext }) => {
  console.log(data);
  const { markdownRemark: post } = data

  const { frontmatter, html, fields } = post

  const { title } = frontmatter

  const meta = {
    date: fields.date,
    tags: frontmatter.tags
  }

  const  {next, prev} = pathContext

  return (
    <Container>
      <Helmet title={`${title} - My blog`} />
      <MarkdownDoc title={title} meta={meta} html={html} />
	  <p>
		  {prev && <Link to={`/${prev.fields.path}`}>Previous</Link>}
		  {next && <Link to={`/${next.fields.path}`}>Next</Link>}
	  </p>
    </Container>
  )
}

export const pageQuery = graphql`
query BlogPostByPath($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        tags
        excerpt
      }
      fields {
        date(formatString: "MMMM DD, YYYY")
        path
        slug
      }
    }
  }
`

export default Template
