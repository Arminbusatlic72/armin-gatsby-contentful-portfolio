import React from "react"
import Icons from "../components/icons/icons"
import Layout from "../components/layout/layout"
import indexStyles from "./index.module.scss"
import Helmet from "react-helmet"

// Inside your component

const IndexPage = () => {
  return (
    <div>
      <Layout>
        <Helmet>
          <title>Armin's portfolio</title>
          <body className="bg_img" />
        </Helmet>
        <main className={indexStyles.home}>
          <h1 className={indexStyles.lg_heading}>
            Armin <span className={indexStyles.text_secondary}>Bušatlić</span>
          </h1>
          <div className={indexStyles.sm_heading__wrapper}>
            <h2 className={indexStyles.sm_heading}>I am Front end Developer</h2>
          </div>
          <Icons />
        </main>
      </Layout>
    </div>
  )
}
export default IndexPage
