import React from "react"
import Layout from "../components/layout/Layout"
import Project from "../components/project/Project"
import projectsStyles from "./projects.module.scss"




const ProjectsPage = () => {
  return (
    <div>
      <Layout>
        <main>
          <h1>Projects Page </h1>
          <div className={projectsStyles.projects__wrapp}>


            <Project />


          </div>
        </main>
      </Layout>
    </div>
  )
}
export default ProjectsPage
