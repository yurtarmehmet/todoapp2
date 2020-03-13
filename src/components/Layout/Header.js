import React from "react";
import {Navbar, Nav, NavDropdown, Form, FormControl, Button} from "react-bootstrap";
import routes from "../../routes";
import {Link} from "react-router-dom";

const Header = (props) => {
    return (
        <Navbar bg="light" expand="lg">
            <Navbar.Brand href="#home">HEADER</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    {
                        routes.map((route) => {
                            if(!route.excluded){
                                return <Nav.Link key={route.path} onClick={(e) => {
                                    e.preventDefault();
                                    props.history.push(route.path)
                                }}>{route.name}
                            </Nav.Link>
                            }
                        })
                    }
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default Header;