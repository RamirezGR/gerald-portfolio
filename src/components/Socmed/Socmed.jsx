import React from 'react'
import {FaFacebookF, FaLinkedinIn} from 'react-icons/fa'
import {FiGithub} from 'react-icons/fi'
import './Socmed.css'

const Socmed = () => {

  return (
    <>
        <div>
            <ul className="wrapper">
                <a href="/" target={'_blank'}>
                    <li className="icon facebook">
                        <span className='tooltip'>Facebook</span>
                        <span><FaFacebookF/></span>
                    </li>
                </a>
                <a href="/" target={'_blank'}>
                    <li className="icon youtube">
                        <span className='tooltip'>LinkedIn</span>
                        <span><FaLinkedinIn/></span>
                    </li>
                </a>
                <a href="/" target={'_blank'}>
                    <li className="icon github">
                        <span className='tooltip'>Github</span>
                        <span><FiGithub/></span>
                    </li>
                </a>
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