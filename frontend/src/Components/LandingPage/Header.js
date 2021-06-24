import React from 'react'
import { LinkContainer } from 'react-router-bootstrap'
import { Navbar, Nav, Container } from 'react-bootstrap'
const Header = () => {
    return (
        <header>
            <Container>
            <Navbar expand="lg">
                <LinkContainer to='/'>
                    <Navbar.Brand><img src="../images/neardoctor.png" alt="logo" /></Navbar.Brand>
                </LinkContainer>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">

                    <LinkContainer to="/conex" ><Nav.Link>Connexion</Nav.Link></LinkContainer>
                    <LinkContainer to="/inscri" ><Nav.Link className='btn'>Inscription</Nav.Link></LinkContainer>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
            </Container>
        </header>
    )
}

export default Header
