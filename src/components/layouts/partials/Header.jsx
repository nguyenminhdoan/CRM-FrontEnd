import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import logo from "../../../assets/img/logo.png";
import { useHistory } from "react-router-dom";
import { LinkContainer } from "react-router-bootstrap";
function Header() {
  const history = useHistory();
  const logOut = () => {
    sessionStorage.removeItem('accessJWT');
    history.push("/");
  };
  return (
    <Navbar collapseOnSelect bg="info" variant="dark" expand="md">
      <Navbar.Brand>
        <img src={logo} alt="logo" width="100px" />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          {/* <Link to="/dashboard">Dashboard</Link>
          <Link to="/tickets">Tickets</Link>
          <Link to="/logout">Log Out</Link> */}
          <LinkContainer to="/dashboard">
            <Nav.Link>Dashboard</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/tickets">
            <Nav.Link>Tickets</Nav.Link>
          </LinkContainer>
          <Nav.Link onClick = {logOut}>Log Out</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Header;
