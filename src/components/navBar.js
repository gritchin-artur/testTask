import { Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      variant="white"
      className="border-bottom border-1 border-color-grey p-3"
    >
      <Nav.Link as={Link} to="/" className="text-black fs-2 font-weight-bold">
        LOGO
      </Nav.Link>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse
        id="responsive-navbar-nav"
        className="justify-content-center"
      >
        <Nav className="align-items-center">
          <Nav.Link as={Link} to="/menu1">
            Menu1
          </Nav.Link>
          <span className="d-none d-lg-inline">|</span>
          <Nav.Link as={Link} to="/menu2">
            Menu2
          </Nav.Link>
          <span className="d-none d-lg-inline">|</span>
          <Nav.Link as={Link} to="/menu3">
            Menu3
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
