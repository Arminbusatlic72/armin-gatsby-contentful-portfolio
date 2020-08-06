import React from "react"
import Layout from "../components/layout/layout"
import indexStyles from "./index.module.scss"
import Helmet from "react-helmet"
import Bounce from 'react-reveal/Bounce';
import { Link } from 'gatsby'

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
          <Link className={indexStyles.btn__rounded} to='/contact'>Say Hello</Link>
          <Bounce left cascade>
            <div>

              <h1 className={indexStyles.lg_heading}>

                Armin <span className={indexStyles.text_secondary}>Busatlic</span>
              </h1>

            </div>


          </Bounce>
          <h2 className={indexStyles.sm_heading}>
            <Bounce left cascade>
              <div style={{ display: 'inline-block' }}>Hi I'am</div>

            </Bounce><Bounce right cascade>
              <div style={{ display: 'inline-block' }}> Armin,</div>
            </Bounce>
          </h2>
          <Bounce bottom>
            {/* <div className={indexStyles.sm_heading__wrapper}> */}
            <h2 className={indexStyles.sm_heading}>I am Front end Developer</h2>
            {/* </div> */}
          </Bounce>
        </main>
      </Layout>
    </div>
  )
}
export default IndexPage
