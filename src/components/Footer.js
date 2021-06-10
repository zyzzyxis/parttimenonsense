import React from 'react'
import {FaGithub, FaLinkedin} from "react-icons/fa";
import {MdEmail} from 'react-icons/md'
import './basicstyles.css'

const Footer = () => (
  <div className='wrap'>
    <div>
      Connect
      <div className="icons">
        <a href="https://github.com/zyzzyxis" rel="noreferrer" target="_blank">
          <FaGithub style={{margin:'10px', fontSize: "30"}}/>  
        </a>
        <a href="https://www.linkedin.com/in/erin-zimmerman/" rel="noreferrer" target="_blank">
          <FaLinkedin style={{margin:'10px',fontSize: "30"}}/>
        </a>
        <a href="/connect">
          <MdEmail style={{margin:'10px',fontSize: "30"}}/>
        </a>
      </div>
    </div>
  </div>
  )

  export default Footer