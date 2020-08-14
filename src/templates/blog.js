import React from "react"
import { graphql } from "gatsby"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import blogStyles from "./blog.module.scss"
import Img from 'gatsby-image'
import Head from '../components/head/Head'
import Layout from "../components/layout/Layout"

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
      <Head title={props.data.contentfulBlogPost.title} />
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


          <Img className={blogStyles.img} fluid={props.data.image.childImageSharp.fluid} />
        </div>
      </main>
    </Layout>
  )
}

export default Blog
