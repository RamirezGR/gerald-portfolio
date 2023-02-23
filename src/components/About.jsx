import React from 'react'
import {FaBasketballBall,FaChess,FaLaptopCode,FaSpotify,FaHtml5, FaCss3Alt, FaPhp, FaGithubSquare, FaFigma} from 'react-icons/fa'
import {RiNetflixFill} from 'react-icons/ri'
import {SiRiotgames,SiJavascript} from 'react-icons/si'
import {GrReactjs} from 'react-icons/gr'

const About = () => {
  return (
    <div className='about'>
      <div className="about-container">
        <div className="column">
            <div className="about-wrapper">
                <h1 className='title'>ABOUT</h1> 
                <p>Hello! I'm Gerald, and I am a front-end developer. With a passion for creating visually stunning and highly functional websites, I have honed my skills in HTML, CSS, JavaScript, and various front-end frameworks. <br/> <br/>
                I am constantly learning and staying up-to-date with the latest technologies and trends in the industry. With a keen eye for detail, strong problem-solving skills, and an unwavering dedication to delivering exceptional work, I am confident in my ability to meet the demands of any front-end development project.
                </p>
            </div>
            <div className="interests-wrapper">
                  <h1 className="title">INTERESTS</h1>
                  <ul className='interests-list'>
                    <li className='interest basketball'>
                      <FaBasketballBall className='interest-icon'/>
                      <span>BASKETBALL</span>
                    </li>
                    <li className='interest chess'>
                      <FaChess className='interest-icon'/>
                      <span>CHESS</span>
                    </li>
                    <li className='interest code'>
                      <FaLaptopCode className='interest-icon'/>
                      <span>PROGRAMMING</span>
                    </li>
                    <li className='interest music'>
                      <FaSpotify className='interest-icon'/>
                      <span>MUSIC</span>
                    </li>
                    <li className='interest movies'>
                      <RiNetflixFill className='interest-icon'/>
                      <span>MOVIES</span>
                    </li>
                    <li className='interest games'>
                      <SiRiotgames className='interest-icon'/>
                      <span>GAMES</span>
                    </li>
                  </ul>
            </div>
          </div>
          <div className='my-image'>
            <img src="images/my-image.jpg" alt="" />
          </div>
      </div>
      <div className="skills-wrapper" data-aos="fade-up"
     data-aos-anchor-placement="bottom-bottom">
          <h1 className="title">SKILLS</h1>
          <ul className='skills-list'>
            <li className='skill html'>
              <FaHtml5 className='skill-icon'/>
              <span>HTML</span>
            </li>
            <li className='skill css'>
              <FaCss3Alt className='skill-icon'/>
              <span>CSS</span>
            </li>
            <li className='skill javascript'>
              <SiJavascript className='skill-icon'/>
              <span>JAVASCRIPT</span>
            </li>
            <li className='skill reactjs'>
              <GrReactjs className='skill-icon'/>
              <span>REACT JS</span>
            </li>
            <li className='skill php'>
              <FaPhp className='skill-icon'/>
              <span>PHP</span>
            </li>
            <li className='skill github'>
              <FaGithubSquare className='skill-icon'/>
              <span>GITHUB</span>
            </li>
            <li className='skill figma'>
              <FaFigma className='skill-icon'/>
              <span>FIGMA</span>
            </li>
          </ul>
      </div>
    </div>
  )
}


export default About