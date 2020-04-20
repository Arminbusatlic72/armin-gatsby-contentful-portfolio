import React from "react"
import Layout from "../components/layout/layout"
import projectStyles from "./projects.module.scss"

const ProjectsPage = () => {
  return (
    <div>
      <Layout>
        <main>
          <h1>Projects Page </h1>
          <div className={projectStyles.projects__wrapp}>
            <div className={projectStyles.project__wrapp}>
              <div className={projectStyles.project__image_wrapp}></div>
              <h3>Skillsdivision company official website</h3>
              <p>Technologies used: Wordpress</p>
            </div>
          </div>
        </main>
      </Layout>
    </div>
  )
}
export default ProjectsPage
