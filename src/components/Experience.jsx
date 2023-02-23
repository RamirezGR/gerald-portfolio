import React from 'react'
import Button from './Button/Button'
import { Link } from 'react-router-dom'
import TextError from './Error/TextError'
   

const Experience = () => {

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
          <div className="my-project">
            <img src="/images/Project.png" alt="" />
            <div className='project-desc'>
              <h3>PORTFOLIO WEBSITE</h3>
              <p>Built this using HTML, CSS, JAVASCRIPT and REACT JS</p>
              <Link to='/'>
                <Button title="View" className='view-btn'/>
              </Link>
            </div>
          </div>
          <div className="my-project">
            <img src="/images/Project2.png" alt="" />
            <div className='project-desc'>
              <h3>SWIFT RENAISSANCE GLOBAL</h3>
              <p>Built this using HTML, CSS, JAVASCRIPT and REACT JS</p>
              <TextError name="ERROR!"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Experience