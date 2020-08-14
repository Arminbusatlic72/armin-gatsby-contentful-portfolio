import React from "react"
import Layout from "../components/layout/Layout"
import Project from "../components/project/Project"
import projectsStyles from "./projects.module.scss"
import Icon from '../images/icons/github.png'
import Head from '../components/head/Head'





const ProjectsPage = () => {
  return (
    <div>
      <Layout>
        <Head title="Projects" />
        <main>
          <div className={projectsStyles.heading__wrapp}>
            <h1>Recent projects</h1>
            <a href="https://github.com/Arminbusatlic72" target="_blank" rel="noopener noreferrer"><img src={Icon} alt="githubIcon" /></a>
          </div>
          <div className={projectsStyles.projects__wrapp}>


            <Project />


          </div>
        </main>
      </Layout>
    </div>
  )
}
export default ProjectsPage
