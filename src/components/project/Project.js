import React from 'react'
import projectStyles from "./project.module.scss"
import ProjectInfo from "./ProjectInfo"
import Button from "../button/Button"
import Img from "gatsby-image"
import { graphql, useStaticQuery } from 'gatsby'
import Zoom from 'react-reveal/Zoom';


const Project = () => {


  const data = useStaticQuery(graphql`
query projects {
  allMarkdownRemark {
    edges {
      node {
        frontmatter {
          title
          technology
          link
          featuredImage {
            childImageSharp {
              fluid {
          ...GatsbyImageSharpFluid
         }

            }
          }
        }
      }
    }
  }

  
  
}
`)

  console.log(data);
  return (
    <>


      {data.allMarkdownRemark.edges.map(edge => (
        <div className={projectStyles.project__wrapp}>
          <Zoom>

            <figure >
              <Img className={projectStyles.img} key={edge.node.frontmatter.featuredImage.id} fluid={edge.node.frontmatter.featuredImage.childImageSharp.fluid} alt={'project'} />
              <ProjectInfo title={edge.node.frontmatter.title} technology={edge.node.frontmatter.technology} >
                <Button link={edge.node.frontmatter.link} >Visit website</Button>
              </ProjectInfo>


            </figure>

          </Zoom>
        </div>




      )

      )}


    </>
  )
}
export default Project