import React from 'react';
import {Navbar,Nav,NavDropdown,Form,Button,FormControl,Container} from "react-bootstrap"
const NavbarOne = () => {
    return (
        <div>
            <Navbar bg="light" expand="lg">
  <Container fluid>
    <Navbar.Brand href="#">ProCoder</Navbar.Brand>
    <Navbar.Toggle aria-controls="navbarScroll" />
    <Navbar.Collapse id="navbarScroll">
      <Nav
        className="me-auto my-2 my-lg-0"
        style={{ maxHeight: '100px' }}
        navbarScroll
      >
        <Nav.Link href="#action1">Home</Nav.Link>
        <Nav.Link href="#action2">Projects</Nav.Link>
        <NavDropdown title="DropDown" id="navbarScrollingDropdown">
          <NavDropdown.Item href="#action3">Project-one</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action4">Project-two</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action5">
            Other Projects
          </NavDropdown.Item>
        </NavDropdown>
        <Nav.Link href="#" disabled>
          Infuture
        </Nav.Link>
      </Nav>
      <Form className="d-flex">
        <FormControl
          type="search"
          placeholder="Search"
          className="me-2"
          aria-label="Search"
        />
        <Button variant="outline-success">Search</Button>
      </Form>
    </Navbar.Collapse>
  </Container>
</Navbar>
        </div>
    )
}

export default NavbarOne
