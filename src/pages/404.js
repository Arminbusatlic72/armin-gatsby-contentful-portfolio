import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout/layout"
import Head from '../components/head/head'

import Styles from './404.module.scss'
const NotFound = () => {
  return (
    <Layout>
      <Head title="404" />
      <main>
        <div className={Styles.container}>
          <div className={Styles.text__wrapp}>
            <h1 className={Styles.heading}>404</h1>
            <p className={Styles.paragraph}>Page not found</p>
            <Link className={Styles.btn__rounded} to='/'> go home</Link>
            <Link className={Styles.btn__rounded} to='/contact'>contact us</Link>

          </div>
        </div>
      </main>
    </Layout>
  )
}
export default NotFound
