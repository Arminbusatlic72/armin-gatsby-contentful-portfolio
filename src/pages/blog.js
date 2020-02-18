import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { Link } from "gatsby"
import blogStyles from "./blog.module.scss"

import Layout from "../components/layout/layout"

const BlogPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulBlogPost(sort: { fields: publishDate, order: DESC }) {
        edges {
          node {
            title
            slug
            publishDate(fromNow: true)
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <main>
        <h1>Blog</h1>
        <ol>
          {data.allContentfulBlogPost.edges.map(edge => {
            return (
              <li className={blogStyles.post}>
                <Link to={`/blog/${edge.node.slug}`}>
                  <h2>{edge.node.title}</h2>
                  <p>{edge.node.publishDate}</p>
                </Link>
              </li>
            )
          })}
        </ol>
      </main>
    </Layout>
  )
}

export default BlogPage