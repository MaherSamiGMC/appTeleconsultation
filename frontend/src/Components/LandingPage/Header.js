import React from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap'
const Header = () => {
    return (
        <header>
            <Container>
            <Navbar expand="lg">
                <Navbar.Brand href="/"><img src="../images/neardoctor.png" alt="logo" /></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                        <Nav.Link href="/conex" >Connexion</Nav.Link>
                        <Nav.Link href="/inscri" className='btn'>Inscription</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
            </Container>
        </header>
    )
}

export default Header
