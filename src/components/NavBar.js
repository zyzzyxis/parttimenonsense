import { Nav, Navbar } from "react-bootstrap";


const NavBar = () => {
  return(
    <>
      <Navbar collapseOnSelect expand="lg" sticky="top" bg="dark" variant='dark'>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link  href="/">Home</Nav.Link>
         
        </Nav>
        <Nav>
         <Nav.Link  href="/about">About</Nav.Link>
          <Nav.Link  href="/projects">Projects</Nav.Link>
          <Nav.Link href="/connect">Let's Connect!</Nav.Link>
        </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  )
}


export default NavBar