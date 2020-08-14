import React from "react"
import headerStyles from "./header.module.scss"

import Menu from "../menu/menu"
const Header = () => {
  return (
    <header className={headerStyles.main__header}>
      <Menu />
    </header>
  )
}
export default Header
