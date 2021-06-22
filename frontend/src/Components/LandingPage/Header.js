import React from 'react'
import { Navbar, Nav } from 'react-bootstrap'
const Header = () => {
    return (
        <header>
            <Navbar bg="light" expand="lg">
                <Navbar.Brand href="/">Near Doctor</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="/conex">Connexion</Nav.Link>
                        <Nav.Link href="/inscri">Inscription</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </header>
    )
}

export default Header
