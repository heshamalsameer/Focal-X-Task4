import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "./NavBar.css";
import Apointment from "../Apointment/Apointment";
const NavBar = () => {
  const [num, setNum] = useState("1");
  return (
    <>
      <Navbar
        expand="lg"
        className="bg-body-tertiary  position-sticky top-0 z-3   "
      >
        <Container fluid className="container">
          <Navbar.Brand href="#" className="w-15">
            <img src="/imgs/logo.png" className="w-100" />
          </Navbar.Brand>
          <Apointment />
          <Navbar.Toggle aria-controls="navbarScroll" className="fs-s" />
          <Navbar.Collapse id="navbarScroll" className="flex-grow-0">
            <Nav
              className="me-auto my-2 my-lg-0 fs-s  fw-bold"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link
                href="#Home"
                onClick={() => setNum("1")}
                style={{ color: num == "1" ? "#3fbbc0" : "black" }}
              >
                HOME
              </Nav.Link>
              <Nav.Link
                href="#About"
                onClick={() => setNum("2")}
                style={{ color: num == "2" ? "#3fbbc0" : "black" }}
              >
                ABOUT
              </Nav.Link>
              <Nav.Link
                href="#services"
                onClick={() => setNum("3")}
                style={{ color: num == "3" ? "#3fbbc0" : "black" }}
              >
                SERVICES
              </Nav.Link>
              <Nav.Link
                href="#action2"
                onClick={() => setNum("4")}
                style={{ color: num == "4" ? "#3fbbc0" : "black" }}
              >
                DEPARTMENTS
              </Nav.Link>
              <Nav.Link
                href="#action2"
                onClick={() => setNum("5")}
                style={{ color: num == "5" ? "#3fbbc0" : "black" }}
              >
                DOCTORS
              </Nav.Link>
              <NavDropdown title="DROPDOWN" id="navbarScrollingDropdown">
                <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action4">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action5">
                  Something else here
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link
                href="#action2"
                onClick={() => setNum("6")}
                style={{ color: num == "6" ? "#3fbbc0" : "black" }}
              >
                CONTACT
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default NavBar;
