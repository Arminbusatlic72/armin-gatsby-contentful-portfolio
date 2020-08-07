import React from "react"
import { graphql } from "gatsby"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import blogStyles from "./blog.module.scss"
import Bcg from '../images/typing-machine-bcg-blue.png'
import Img from 'gatsby-image'

import Layout from "../components/layout/layout"

export const query = graphql`
  query($slug: String!) {
    contentfulBlogPost(slug: { eq: $slug }) {
      title
      publishDate(fromNow: true)
      body {
        json
      }
    }
    image: file(relativePath: { eq: "blog-bcg.png" }) {
      childImageSharp {
        
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

const Blog = props => {




  const options = {
    renderNode: {
      "embedded-asset-block": node => {
        const alt = node.data.target.fields.title["en-US"]
        const url = node.data.target.fields.file["en-US"].url
        return <img alt={alt} src={url} />
      },
    },
  }
  return (
    <Layout>
      <main >

        <div className={blogStyles.blog_container}>
          <h1 className={blogStyles.blog_heading}>{props.data.contentfulBlogPost.title}</h1>
          <p className={blogStyles.blog_paragraph}>{props.data.contentfulBlogPost.publishedDate}</p>
          {documentToReactComponents(
            props.data.contentfulBlogPost.body.json,
            options
          )}
        </div>
        <div className={blogStyles.blog_bcg}>
          {/* <img className={blogStyles.img} src={Bcg} /> */}

          <Img className={blogStyles.img} fluid={props.data.image.childImageSharp.fluid} />
        </div>
      </main>
    </Layout>
  )
}

export default Blog
