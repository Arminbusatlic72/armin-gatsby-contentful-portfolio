import React from "react"
import Header from "../header/header"
import Footer from "../footer/footer"
import "../../styles/index.scss"
const Layout = props => {
  return (
    <div>
      <div>
        <Header />
        {props.children}
      </div>
      <Footer />
    </div>
  )
}
export default Layout
