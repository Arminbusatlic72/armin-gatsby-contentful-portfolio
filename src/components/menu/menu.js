import React from "react"
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
          onKeyDown={() => this.setState({ showMenu: !isShowing })}
          role="button"
          tabIndex="0"
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
            <li className={menuStyles.nav_item} activestyle={activeStyle}>
              <Link to="/"> Home </Link>
            </li>
            <li className={menuStyles.nav_item}>
              <Link to="/projects" activestyle={activeStyle}>

                Projects
              </Link>
            </li>
            <li className={menuStyles.nav_item}>
              <Link to="/blog" activestyle={activeStyle}>
                Blog
              </Link>
            </li>
            <li className={menuStyles.nav_item}>
              <Link to="/contact" activestyle={activeStyle}>
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    )
  }
}

export default Menu
