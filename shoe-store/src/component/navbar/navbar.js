import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Navbar, Container, Nav } from "react-bootstrap";
import "./navbar.css";

function NavBar() {
    const location = useLocation()
    // console.log("lOCATION", location.pathname)

    return (
        <Navbar bg="light" expand="sm" variant="light" fixed="top">
            <Container className="nav">
                <Navbar.Brand href="/" className="app-title">Shoes</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" className="app-tab">
                    <Nav.Link>
                        <Link
                            to="/"
                            className={`${(location.pathname === "/") ? "active" : "tab"}`}>
                            Home</Link>
                    </Nav.Link>
                    <Nav.Link>
                        <Link
                            to="/cart"
                            className={`${(location.pathname === "/cart") ? "active" : "tab"}`}>
                            Cart</Link>
                    </Nav.Link>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );

}

export { NavBar }