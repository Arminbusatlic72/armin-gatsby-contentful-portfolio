import React, { component } from "react"
import menuStyles from "./menu.module.scss"
import { Link } from "gatsby"

const activeStyle = {
  color: " #eece1a",
}

class Menu extends React.Component {
  state = { showMenu: false }

  render() {
    const isShowing = this.state.showMenu
    return (
      <div className={menuStyles.menu_wrapp}>
        <div
          className={
            this.state.showMenu ? menuStyles.btn_rotate : menuStyles.btn
          }
          onClick={() => this.setState({ showMenu: !isShowing })}
        >
          <div className={menuStyles.line}></div>
          <div className={menuStyles.line}></div>
          <div className={menuStyles.line}></div>
        </div>

        <nav>
          <div
            className={
              this.state.showMenu
                ? menuStyles.menu__branding_show
                : menuStyles.menu__branding
            }
          >
            <h1>
              <Link to="/">
                <div className={menuStyles.portrait}></div>
              </Link>
            </h1>
          </div>
          <ul
            className={
              this.state.showMenu
                ? menuStyles.menu__nav_show
                : menuStyles.menu__nav
            }
          >
            <li className={menuStyles.nav_item} activeStyle={activeStyle}>
              <Link to="/"> Home </Link>
            </li>
            <li className={menuStyles.nav_item}>
              <Link to="/projects" activeStyle={activeStyle}>
                {" "}
                Projects{" "}
              </Link>
            </li>
            <li className={menuStyles.nav_item}>
              <Link to="/blog" activeStyle={activeStyle}>
                {" "}
                Blog{" "}
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    )
  }
}

export default Menu
