import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Publify from './Publify.png';

function Nav1() {
  return (
    <>
      <Navbar bg="light" variant="light">
        <Container fluid style={{ "margin-right": "1%", "margin-left": "1%" }}>
          <Navbar.Brand href="#home">
            <img src={Publify} alt="Publify" height="80px" width="80px" />
          </Navbar.Brand>
          <Nav className="justify-content-end">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#contactUs">Contact Us</Nav.Link>
            <Nav.Link href="#aboutUs">About Us</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default Nav1;