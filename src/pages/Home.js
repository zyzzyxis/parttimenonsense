import { Container} from 'react-bootstrap'
import '../components/basicstyles.css'
import img from '../images/Erinavatar.png'
import {Row, Col} from 'react-bootstrap'

const Home = () => {
  return (
    <>
    <br/>
    <Container>
      <br />
      <br />
      <Row>
        <Col></Col>
      
        <Col>
        <img src={img} alt="avatar" className="avatarimg"/>
        </Col>
        <Col>
        <h1 className="avatarimg"><br/>I'm Erin Zimmerman,<br/>
          A Full-Stack Web Developer</h1> 
        </Col>
        <Col></Col>
      </Row>
   </Container> 
   <br/ >
   <div>
      
      <a className="fancy-button" href="/about">About</a>
      <a className="fancy-button"  href="/projects">Projects</a>
      <a className="fancy-button" href="/connect">Let's Connect!</a>
    </div>
    <br/>
    </>
  )

  
}

export default Home
