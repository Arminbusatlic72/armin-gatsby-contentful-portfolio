import React from 'react'
import projectStyles from "./projectInfo.module.scss"
// import Button from "../button/Button"

const ProjectInfo = (props) => {



  return (
    <>





      < figcaption className={projectStyles.project__info_wrapp}>


        <h3>{props.title}</h3>

        <p>{props.technology}</p>
        {props.children}






      </figcaption>






    </>
  )
}
export default ProjectInfo