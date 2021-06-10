import { Accordion, Card, Container } from "react-bootstrap"


const Projects = () => {
  return (
    <>
      <Container>
        <br />
        <h1>PROJECTS</h1>

      <Accordion>
          <Card>
            <Accordion.Toggle as={Card.Header} eventKey="0">
              Streaks
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="0">
              <Card.Body>
                Streaks is a web application that allows friends to track competitions in a casual and fun way. Please take a look at our completed site <a target="_blank" rel="noreferrer" href="http://streaks-app.herokuapp.com/">here</a>.<p></p>
               <p>This website continues to have features added by the same team that originally created it. </p>
               </Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card>
            <Accordion.Toggle as={Card.Header} eventKey="1">
              Future Projects
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="1">
              <Card.Body>
                <p>Tarot for the traveler</p>
                <p>A custom realtor site (coming soon)</p>
                <p>D&D tracking site</p>
                  
              </Card.Body>
            </Accordion.Collapse>
          </Card>
        </Accordion>
        <br/>
        <a className="fancy-button" href="/">Home</a>
      </Container>
    </>
    
  )
}

export default Projects