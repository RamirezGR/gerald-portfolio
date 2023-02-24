import React from 'react'
import {NavLink} from 'react-router-dom'
import {FaFacebookF, FaLinkedinIn} from 'react-icons/fa'
import {FiGithub} from 'react-icons/fi'
import './Socmed.css'

const Socmed = () => {

  return (
    <>
        <div>
            <ul className="wrapper">
                <NavLink
                 to ="www.facebook.com/gerald.ase" target={'_blank'}>
                    <li className="icon facebook">
                        <span className='tooltip'>Facebook</span>
                        <span><FaFacebookF/></span>
                    </li>
                </NavLink>
                <NavLink to="www.linkedin.com/in/gerald-ramirez" target={'_blank'}>
                    <li className="icon linkedin">
                        <span className='tooltip'>LinkedIn</span>
                        <span><FaLinkedinIn/></span>
                    </li>
                </NavLink>
                <NavLink to="github.com/RamirezGR" target={'_blank'}>
                    <li className="icon github">
                        <span className='tooltip'>Github</span>
                        <span><FiGithub/></span>
                    </li>
                </NavLink>
            </ul>
        </div>
        <div className="email-side">
            <div>
                <p className='email' id='email'>ramirezgeraldr@gmail.com</p>
            </div>
        </div>
    </>
  )
}

export default Socmed