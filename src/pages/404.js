import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout/layout"
const NotFound = () => {
  return (
    <Layout>
      <main>
        <h1>Page not found</h1>
        <p>
          <Link to="/">home</Link>
        </p>
      </main>
    </Layout>
  )
}
export default NotFound
