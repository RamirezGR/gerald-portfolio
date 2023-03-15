import React from 'react'
import Button from './Button/Button'
import { Link } from 'react-router-dom'
   

const Experience = () => {
  const projects =[
    {
      id: 1,
      name: "My Portfolio",
      imageUrl: "/images/Project.png",
      details: "Built this using HTML, CSS, JAVASCRIPT and REACT JS",
      url:"https://geraldrportfolio.netlify.app/"
    },
    {
      id: 2,
      name: "Soft Wishbone",
      imageUrl: "/images/Project3.png",
      details: "Built this using HTML, CSS, JAVASCRIPT and REACT JS",
      url:"https://softwishbone.netlify.app/"
    }
  ]
  const projectCard = projects.map(project => {
    return (
      <div className="my-project">
        <img src={project.imageUrl} alt="" />
        <div className='project-desc'>
          <h3>{project.name}</h3>
          <p>{project.details}</p>
          <a href={project.url} target='_blank'>
            <Button title="view"/>
          </a>
        </div>
      </div>
      )
  })

  return (
    <div className="experience">
      <div className='experience-container'>
        <h1 className="title">EXPERIENCE</h1>
        <ul className='experience-list'>
          <li className='job-exp'>
            <h3 className='job-title'>REGISTRATION CENTER SUPERVISOR</h3>
            <p>Philippine Statistics Authority</p>
            <p>October 19, 2021 - December 15, 2022</p>
          </li>
          <li className='job-exp'>
            <h3 className='job-title'>REGISTRATION KIT OPERATOR</h3>
            <p>Philippine Statistics Authority</p>
            <p>April 19, 2021 - October 15, 2021</p>
          </li>
          <li className='job-exp'>
            <h3 className='job-title'>BUSINESS PROCESS ASSOCIATE 2</h3>
            <p>Amdatex Services Corp.</p>
            <p>November 2018 - February 2020 </p>
          </li>
          <li className='job-exp'>
            <h3 className='job-title'> I.T Intern</h3>
            <p>at TCL Online Services Inc.</p>
            <p>November 2017 - February 2018</p>
          </li>
        </ul>
      </div>
      <div className="projects-container">
        <h1 className='title'>PROJECTS</h1>
        <div className="project-flex">
          {projectCard}
        </div>
      </div>
    </div>
  )
}

export default Experience