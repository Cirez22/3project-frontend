import { useContext } from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { AuthContext } from '../../context/AuthContext';
import { useHistory } from 'react-router';


const NavBarInterface = () => {

  const history = useHistory();

  const {logOutUser} = useContext(AuthContext)
  
  const handleLogOut = () => {
    logOutUser();
    history.push('/')
  }

  return (
    <>
      <Navbar fixed='top' collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand>
            <h1 className="display-1 fw-bolder text-light mb-2" style={{ fontSize: "20px", paddingTop: "10px", paddingRight: "20px" }}>OJO</h1>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav>
              <button onClick={handleLogOut} style={{ marginLeft: "1000px", width: '10%' }} className=" btn btn-outline-light">Log Out</button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default NavBarInterface;
