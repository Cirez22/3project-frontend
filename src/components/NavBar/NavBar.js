import { Navbar, Container, Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom'




const NavBar = () => {
  return (
    <Navbar fixed='top' collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand>
        <h1 className="display-1 fw-bolder text-light mb-2" style={{fontSize:"20px", paddingTop:"10px", paddingRight:"20px"}}>OJO</h1>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">

          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#works">How it Works</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
          </Nav>
          <Nav>
            <Link to="/login">
              <button className="btn btn-outline-light" style={{ marginRight: "10px" }}>Login</button>
            </Link>
            <Link to="/register">
              <button className="btn btn-outline-light">Sign In</button>
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
