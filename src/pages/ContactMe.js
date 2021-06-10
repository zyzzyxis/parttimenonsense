import React from 'react';
import { Form , Container, Col} from "react-bootstrap"
import emailjs from 'emailjs-com';



const ContactMe = () => {
  
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_oko4loo', 'template_9rcijy7', e.target, 'user_hLwloleE2fK82EDvUyMPj')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
    e.target.reset()  
  }

  return (
    <>
    <div>
      <br />
     <h1>Send me an email! </h1>
     
    </div>
      <Container>
        <Form onSubmit={sendEmail}>
          <Form.Group>
            <Form.Row>
              <Col>
                <Form.Control placeholder="Name" name='name' />
              </Col>
              <Col>
                <Form.Control placeholder='Email' type='email' name='email' />
              </Col>
            </Form.Row>
          </Form.Group>
          <Form.Group>
            <Form.Control placeholder='Email Subject' name='subject' />
          </Form.Group>
          <Form.Group>
            <Form.Control placeholder='Message'  rows={5} type='textarea' as='textarea' name='message' />
            <button className="fancy-button" type='submit' >
              Send
            </button>
          </Form.Group>
        </Form>
        </Container>
        <br/>
        <a className="fancy-button" href="/">Home</a>
        <br/>
      </>
    
  )
}

export default ContactMe
