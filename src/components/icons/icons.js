import React from "react"
import Cofee from "./cofee"
import iconStyles from "./icons.module.scss"

const Icons = () => {
  return (
    <div className={iconStyles.icons}>
      <a href="#">
        <Cofee />
      </a>
      <a href="#">
        <Cofee />
      </a>
      <a href="#">
        <Cofee />
      </a>
    </div>
  )
}
export default Icons