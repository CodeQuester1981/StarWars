import React from "react";
import { Navbar, Nav } from 'react-bootstrap';

const Navigate = () => {
  return (
    <Navbar bg="dark" variant="dark" sticky="top">
      <Navbar.Brand href="/">Star Wars</Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link href="/">Home</Nav.Link>
        <Nav.Link href="people">People</Nav.Link>
        <Nav.Link href="planets">Planets</Nav.Link>
      </Nav>
    </Navbar>
  );
};

export default Navigate;
