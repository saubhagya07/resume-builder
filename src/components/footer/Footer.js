import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";

function Footer() {
  return (
    <>
      <Navbar bg="light" variant="light">
        <Container className="grow">
          <Nav
            className="me-auto"
            style={{ flexGrow: 1, justifyContent: "center" }}
          >
            <Navbar.Brand href="#">Resume builder</Navbar.Brand>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default Footer;
