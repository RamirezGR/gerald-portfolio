import React from 'react'
import Button from './Button/Button'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className='container home' id=''>
      <div className="hero-wrapper">
        <h3>Hi there! I am</h3>
        <h1><span>GERALD</span> RAMIREZ</h1>
        <h3>, a <span>front-end developer</span> with a passion for creating visually appealing and user-friendly websites.</h3>
        <a href='images/Resume.pdf' download='images/Resume.pdf'>
          <Button className="resume-btn" title="Resume" />
        </a>
        <Link to="/contact">
          <Button className="contact-btn" title="Contact" />
        </Link>
      </div>
    </div>
  )
}

export default Home