import { Navbar, Container, Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom'


const NavBarInterface = () => {
  return (
    <>
      <Navbar fixed='top' collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand>
          <h1 className="display-1 fw-bolder text-light mb-2" style={{fontSize:"20px", paddingTop:"10px", paddingRight:"20px"}}>OJO</h1>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav>
              <Link to="/">
                <button style={{ marginLeft: "1000px", width:'10%' }} className=" btn btn-outline-light">Log Out</button>
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default NavBarInterface;
