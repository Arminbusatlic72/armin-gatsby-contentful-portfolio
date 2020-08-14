import React from 'react'
import Helmet from "react-helmet"
import { useStaticQuery, graphql } from 'gatsby'
const Head = (props, { title }) => {
    const data = useStaticQuery(graphql`
    query {
        site {
            siteMetadata {
                title
            }
        }
    }
    
    `)
    return (
        <Helmet
            title={`${title} | ${data.site.siteMetadata.title}`}

        >{props.children}</Helmet>
    )

}
export default Head