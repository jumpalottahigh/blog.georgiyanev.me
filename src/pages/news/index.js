import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../../components/structure/layout'
import PostsList from '../../components/PostsList'

const NewsPage = ({ data }) => (
  <Layout>
    <PostsList
      showChevron="yes"
      showImage="no"
      showCategories="yes"
      showSearch="yes"
      posts={data.allMarkdownRemark.edges}
    />
  </Layout>
)

export default NewsPage

export const NewsPageQuery = graphql`
  query NewsPageQuery {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      filter: { frontmatter: { draft: { ne: true } } }
    ) {
      edges {
        node {
          excerpt(pruneLength: 140)
          id
          timeToRead
          frontmatter {
            date(formatString: "MMM DD, YYYY")
            path
            title
            author
            tags
            ogImage {
              publicURL
              childImageSharp {
                fluid(maxWidth: 672) {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
          }
        }
      }
    }
  }
`
