import React from 'react'
import { LinkContainer } from 'react-router-bootstrap'
import { Navbar, Nav, Container,Button } from 'react-bootstrap'
import {useDispatch,useSelector} from 'react-redux'
import { logout } from '../../Redux/Actions/userActions'

const Header = () => {
    const dispatch = useDispatch()
    const userLogin=useSelector(state=>state.userLogin)
    const {userInfo}=userLogin
    const logoutHandler=()=>{
        dispatch(logout())
    }
    return (
        <header className="top">
            <Container>
            <Navbar expand="lg">
                <LinkContainer to='/'>
                    <Navbar.Brand><img src="../images/neardoctor.png" alt="logo" /></Navbar.Brand>
                </LinkContainer>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                    {       

                         userInfo && userInfo.authDoctor &&  userInfo.authDoctor.role==='doctor' ? 
                                    <>
                                    <LinkContainer to="/Dashboard" ><Nav.Link style={{fontWeight:"800"}}>Dashboard</Nav.Link></LinkContainer>
                                    <Button onClick={logoutHandler} variant="warning">Déconnexion</Button>
                                    </>
                         :
                         userInfo && userInfo.authAssistant && userInfo.authAssistant.role==='Assistant' ? 
                                    <>
                                    <LinkContainer to="/Dashboard" ><Nav.Link style={{fontWeight:"800"}}>Dashboard</Nav.Link></LinkContainer>
                                    <Button onClick={logoutHandler} variant="warning">Déconnexion</Button>

                                    </>
                         :
                         userInfo && userInfo.authPatient && userInfo.authPatient.role==='patient' ?
                                    <>
                                    <LinkContainer to="/Portail" ><Nav.Link style={{fontWeight:"800"}}>Portail</Nav.Link></LinkContainer>
                                    <Button onClick={logoutHandler} variant="warning">Déconnexion</Button>
                                    </>
                         :
                                    <>
                                    <LinkContainer to="/connexion" ><Nav.Link>Connexion</Nav.Link></LinkContainer>
                                    <LinkContainer to="/inscription" ><Nav.Link className='btn'>Inscription</Nav.Link></LinkContainer>
                                    </>


                    }

                    </Nav>
                </Navbar.Collapse>
            </Navbar>
            </Container>
        </header>
    )
}

export default Header
