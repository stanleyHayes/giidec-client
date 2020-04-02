import React from 'react';
import {Nav, Navbar, NavDropdown} from "react-bootstrap";
import './GHeader.css';
import {Link} from "react-router-dom";

function GHeader(props) {
    return (
        <Navbar expand="lg" fixed="top" sticky="top" className="Navbar">
            <Navbar.Toggle/>
            <Navbar.Brand>
                <img
                    src={process.env.PUBLIC_URL + '/logo192.png'}
                    width={50}
                    height={50}
                    className="d-inline-block align-top"
                    alt="GIISDEC Logo"/>

                <span className="Brand-Logo">GIISDEC</span>
            </Navbar.Brand>
            <Navbar.Collapse>
                <Nav className="justify-content-center flex-grow-1 ml-auto">
                    <Nav.Link>
                        <Link className="NavItem" to="/">Home</Link>
                    </Nav.Link>

                    <Nav.Link>
                        <Link className="NavItem" to="/services">Services</Link>
                    </Nav.Link>

                    <Nav.Link>
                        <Link className="NavItem" to="/events">Events</Link>
                    </Nav.Link>

                    <Nav.Link>
                        <Link className="NavItem" to="/about">About</Link>
                    </Nav.Link>

                    <NavDropdown className="NavItem" id="media" title="Media">
                        <NavDropdown.Item>
                            <Link to="/media/images">Images</Link>
                        </NavDropdown.Item>
                        <NavDropdown.Item>
                            <Link to="/media/images">Videos</Link>
                        </NavDropdown.Item>
                        <NavDropdown.Item>
                            <Link to="/media/operations">Operations</Link>
                        </NavDropdown.Item>
                    </NavDropdown>

                    <NavDropdown style={{color: "#05386b"}} className="NavItem" id="fun" title="Fun">
                        <NavDropdown.Item>
                            <Link to="/fun/facts">Fact of the Day</Link>
                        </NavDropdown.Item>
                        <NavDropdown.Item>
                            <Link to="/fun/quizzes">Quiz of the Week</Link>
                        </NavDropdown.Item>
                        <NavDropdown.Item>
                            <Link to="/fun/winners">Winner of the Week</Link>
                        </NavDropdown.Item>
                    </NavDropdown>

                    <NavDropdown className="NavItem" id="about" title="Contact">
                        <NavDropdown.Item>
                            <Link to="/find-us">Find Us</Link>
                        </NavDropdown.Item>
                        <NavDropdown.Item>
                            <Link to="/reviews">Review</Link>
                        </NavDropdown.Item>
                    </NavDropdown>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default GHeader;
