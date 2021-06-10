import React, {useState} from 'react';
import { Button, Form , Container, Modal} from "react-bootstrap"
import emailjs from 'emailjs-com';



const ContactForm = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  
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
     
     <>
      <Button variant="primary" onClick={handleShow}>
        Let's Connect!
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={true}
      >
        <Modal.Header closeButton>
          <Modal.Title>Modal title</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Container>
        <Form onSubmit={sendEmail}>
          <Form.Group>
            <Form.Control placeholder='Your Name' name='name' />
          </Form.Group>
          <Form.Group>
            <Form.Control placeholder='Your Email Address' name='email' />
          </Form.Group>
          <Form.Group>
            <Form.Control placeholder='Subject' name='subject' />
          </Form.Group>
          <Form.Group>
            <Form.Control placeholder='Message'  rows={5} type='textarea' as='textarea' name='message' />
          </Form.Group>
          <div style={{display: 'flex', justifyContent: 'center'}}>
            <Button type='submit' >
              Send
            </Button>
          </div>
        </Form>
        </Container>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary">Understood</Button>
        </Modal.Footer>
      </Modal>
    </>
    </div>
      
      </>
    
  )
}

export default ContactForm
