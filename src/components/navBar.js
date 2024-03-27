import { Button, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Navbar.Brand>LOGO</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse
        id="responsive-navbar-nav"
        className="justify-content-between"
      >
        <Nav className="mr-auto">
          <Nav.Link as={Link} to="/menu1">
            Menu1
          </Nav.Link>
          <Nav.Link as={Link} to="/menu2">
            Menu2
          </Nav.Link>
          <Nav.Link as={Link} to="/menu3">
            Menu3
          </Nav.Link>
        </Nav>
        <Nav className="gap-2">
          <Button variant="primary" className="mr-2">
            Log In
          </Button>
          <Button variant="primary">Log Out</Button>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
