import React from 'react'
import {SiRuby,SiReact,SiPostgresql,SiJavascript,SiRails,SiHtml5,SiCss3} from "react-icons/si";
import {Row, Col, Container} from 'react-bootstrap'




const About = () => {
  return (
    <div>
      <br />
      <br />
      <Container>
     <h1>About</h1> 
     <br />
      <Row>
        <Col>
        <h5> I am passionate about web development, problem solving, growth, teamwork, process improvement, and creating meaningful applications. </h5>
        </Col>
        <Col>
          <h3>Skills</h3>
          <div className="skillsicons">
            <SiJavascript/><SiReact/><SiRuby/><SiRails/><SiPostgresql/><SiHtml5/><SiCss3/> 
          </div>
          </Col>
      </Row>
      <br />  <br />
     <a className="fancy-button" href="/">Home</a>
     </Container>
  </div>
  )
}

export default About