import React from "react"
import { Link } from "gatsby"
const Header = () => {
  return (
    <header>
      <nav>
        <h1>
          <Link to="/">This is Armin's Portfolio Blog Site</Link>
        </h1>
        <ul>
          <li>
            <Link to="/"> Home </Link>
          </li>
          <li>
            <Link to="/projects"> Projects </Link>
          </li>
          <li>
            <Link to="/blog"> Blog </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}
export default Header
