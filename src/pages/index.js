import React from "react"
import Layout from "../components/layout/layout"
import Head from '../components/head/head'
import indexStyles from "./index.module.scss"
import Bounce from 'react-reveal/bounce';
import { Link } from 'gatsby'

// Inside your component

const IndexPage = () => {
  return (
    <div>
      <Layout>
        <Head title="Home"><body className="bg_img" /></Head>

        <main className={indexStyles.home}>

          <Bounce left cascade>
            <div>

              <h1 className={indexStyles.lg_heading}>

                <span>A</span><span>r</span><span>m</span><span>i</span><span>n</span></h1> <h1 className={indexStyles.lg_heading__second}> <span className={indexStyles.text_secondary}>B</span>
                <span className={indexStyles.text_secondary}>u</span>
                <span className={indexStyles.text_secondary}>s</span>
                <span className={indexStyles.text_secondary}>a</span>
                <span className={indexStyles.text_secondary}>t</span>
                <span className={indexStyles.text_secondary}>l</span>
                <span className={indexStyles.text_secondary}>i</span>
                <span className={indexStyles.text_secondary}>c</span></h1>






            </div>


          </Bounce>
          <h2 className={indexStyles.sm_heading}>
            <Bounce left cascade>
              <div style={{ display: 'inline-block' }}>Hi I'am</div>

            </Bounce><Bounce right cascade>
              <div style={{ display: 'inline-block' }}> Armin,</div>
            </Bounce>
          </h2>
          <Bounce left cascade>

            <h2 className={indexStyles.sm_heading}>I am Front end Developer</h2>



          </Bounce>
          <Link className={indexStyles.btn__rounded} to='/projects'>Projects</Link>
        </main>
      </Layout>
    </div>
  )
}
export default IndexPage
