import React from "react"
import Header from "../header/Header"
import Footer from "../footer/Footer"
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
